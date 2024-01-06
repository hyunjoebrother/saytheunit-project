const express = require("express");
const mysql = require("mysql2");
require("dotenv").config();
const app = express();

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: "root",
  password: process.env.DB_PASSWORD,
  database: "dev_saytheunit_db",
});

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to database:", err);
    return;
  }
  console.log("Connected to MySQL database");
});

app.use(express.json());

app.post("/api/getMembersData", async (req, res) => {
  const { selectedMembers } = req.body;
  console.log("선택 멤버", selectedMembers);

  const queries = selectedMembers.map(
    (member) =>
      `SELECT unit_name, unit_info, unit_member, \`like\` FROM ${member}`
  );

  try {
    const results = await Promise.all(
      queries.map((query) => executeQuery(query))
    );

    // const unitsData = results.map((result) =>
    //   result.map((row) => ({
    //     unit_name: row.unit_name,
    //     unit_info: row.unit_info,
    //     unit_member: row.unit_member,
    //     like: row.like,
    //   }))
    // );

    const commonUnitNames = findCommonUnitNames(
      results.map((result) => result.map((row) => row.unit_name))
    );
    const unionAllQuery = queries.join(" UNION ALL ");
    console.log('유닛 정보 commonUnitNames', commonUnitNames)

    const findquery = `
      SELECT unit_name, unit_info, unit_member, \`like\` 
      FROM (${unionAllQuery}) AS all_members
      WHERE unit_name IN (${commonUnitNames
        .map((name) => `'${name}'`)
        .join(", ")})
    `;

    if (commonUnitNames.length === 0) {
      res.json([]);
    }  else {
      const result = await executeQuery(findquery); // 한 명 일 때
      
      // 찾은 여러 타겟 데이터 중 첫번째만
      const uniqueResult = result.reduce((unique, current) => {
        const isExisting = unique.some(entry => entry.unit_name === current.unit_name);
        if (!isExisting) {
          unique.push(current);
        }
        return unique;
      }, []);

      console.log("유닛 정보", uniqueResult);
      
      res.json(uniqueResult);
    }

  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Error fetching data" });
  }
});

function executeQuery(query) {
  return new Promise((resolve, reject) => {
    connection.query(query, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
}

function findCommonUnitNames(arrays) {
  if (!arrays || !arrays.length) return [];

  const [firstArray, ...restArrays] = arrays;
  return firstArray.filter((value) =>
    restArrays.every((array) => array.includes(value))
  );
}

// 서버 시작
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});