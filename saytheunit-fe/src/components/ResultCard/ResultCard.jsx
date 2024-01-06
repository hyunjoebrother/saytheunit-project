import React from 'react';

const ResultCard = ({ result, text }) => {
  let isUnit = false;
  if (text === null) {
    isUnit = true;
  } else {
    isUnit = false;
  }

  return (
    <section className="w-full h-auto rounded-2xl bg-white px-10 py-4">
      {isUnit ? (
        <div className="flex flex-col text-left items-start justify-center">
          <ul className="list-none text-left gap-2">
            <li className="text-[24px] font-bold">{result.unit_name}</li>
            <li className="text-[14px] font-light">{result.unit_info}</li>
            <li className="mt-6 flex flex-row space-x-2">
              {result.unit_member.split(' ').map((name, index) => (
                <div
                  key={index}
                  className="px-3 py-1 text-[10px] font-medium bg-pink-500 text-white rounded-[4px]"
                >
                  {name}
                </div>
              ))}
            </li>
            {/* <li>좋아요수: {result.like}</li> */}
          </ul>{' '}
        </div>
      ) : (
        <div className="flex text-center items-center justify-center">
          <p className="text-black">{text}</p>
        </div>
      )}
    </section>
  );
};

export default ResultCard;
