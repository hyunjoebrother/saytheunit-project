const express = require("express");
const path = require("path");
const cors = require("cors");
const mysql = require("mysql2");
require("dotenv").config();
const app = express();

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: "root",
  password: process.env.DB_PASSWORD,
  database: "dev_saytheunit_db",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  keepAliveInitialDelay: 10000,
  enableKeepAlive: true,
});

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, "../saytheunit-fe/build")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../saytheunit-fe/build/index.html"));
});

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

    // total unit_name counting
    const tableNames = [
      "SCOUPS",
      "JEONGHAN",
      "JOSHUA",
      "JUN",
      "HOSHI",
      "WONWOO",
      "WOOZI",
      "THE8",
      "MINGYU",
      "DK",
      "SEUNGKWAN",
      "VERNON",
      "DINO",
    ];
    const totalquery = `
      SELECT COUNT(DISTINCT unit_name) AS total_count
      FROM (
        SELECT unit_name FROM ${tableNames[0]}
        UNION
        SELECT unit_name FROM ${tableNames[1]}
        UNION
        SELECT unit_name FROM ${tableNames[2]}
        UNION
        SELECT unit_name FROM ${tableNames[3]}
        UNION
        SELECT unit_name FROM ${tableNames[4]}
        UNION
        SELECT unit_name FROM ${tableNames[5]}
        UNION
        SELECT unit_name FROM ${tableNames[6]}
        UNION
        SELECT unit_name FROM ${tableNames[7]}
        UNION
        SELECT unit_name FROM ${tableNames[8]}
        UNION
        SELECT unit_name FROM ${tableNames[9]}
        UNION
        SELECT unit_name FROM ${tableNames[10]}
        UNION
        SELECT unit_name FROM ${tableNames[11]}
        UNION
        SELECT unit_name FROM ${tableNames[12]}
      ) AS combined_unit_names
    `;

    const resultTotal = await executeQuery(totalquery);
    console.log("유닛 갯수", resultTotal);
    // res.json(resultTotal); // 직접 수치 변경

    const commonUnitNames = findCommonUnitNames(
      results.map((result) => result.map((row) => row.unit_name))
    );
    const unionAllQuery = queries.join(" UNION ALL ");
    // console.log('유닛 정보 commonUnitNames', commonUnitNames)

    const findquery = `
      SELECT unit_name, unit_info, unit_member, \`like\` 
      FROM (${unionAllQuery}) AS all_members
      WHERE unit_name IN (${commonUnitNames
        .map((name) => `'${name}'`)
        .join(", ")})
    `;

    if (selectedMembers.length === 0) {
      res.json("no select");
    } else if (commonUnitNames.length === 0) {
      res.json([]);
    } else {
      const result = await executeQuery(findquery); // 한 명 일 때

      // 찾은 여러 타겟 데이터 중 첫번째만
      const uniqueResult = result.reduce((unique, current) => {
        const isExisting = unique.some(
          (entry) => entry.unit_name === current.unit_name
        );
        if (!isExisting) {
          unique.push(current);
        }
        return unique;
      }, []);

      // console.log("유닛 정보", uniqueResult);

      res.json(uniqueResult);
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Error fetching data" });
    res.sendFile(path.join(__dirname, "./public/update.html"));

    if (!res.headersSent) {
      res.status(500).json({ error: "Error fetching data - header" });
      res.sendFile(path.join(__dirname, "./public/update.html"));
    }
  }
});

function executeQuery(query) {
  return new Promise((resolve, reject) => {
    pool.query(query, (err, results) => {
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

// Error Handling
app.use((req, res) => {
  res.status(404);
  res.sendFile(path.join(__dirname, "./public/wrong-path.html"));
});

// 서버 시작
const PORT = 1717;
// const PORT = 3000; // develop port
app.listen(PORT, () => {
  // console.log(`Server running on port ${PORT}`);
});
