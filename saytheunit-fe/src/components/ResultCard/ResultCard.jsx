import React from 'react';

const ResultCard = ({ result, text }) => {
  let isUnit = false;
  if (text === null) {
    isUnit = true;
  } else {
    isUnit = false;
  }

  return (
    <section className="w-full 2sm:w-[326px] sm:w-[480px] tb:w-[560px] lg:w-[600px] flex h-auto 2xs:rounded-[10px] rounded-2xl bg-white 2xs:px-4 xs:px-2 2sm:px-4 px-10 py-4">
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
        <div className="flex m-auto text-center items-center justify-center">
          <p className="2xs:text-xs xs:text-sm 2sm:text-sm text-black">
            {text}
          </p>
        </div>
      )}
    </section>
  );
};

export default ResultCard;
