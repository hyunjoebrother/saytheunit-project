import React from 'react';

const ResultCard = ({ result, text }) => {
  let isUnit = false;
  if (text === null) {
    isUnit = true;
  } else {
    isUnit = false;
  }

  return (
    <section className="w-full 2sm:w-[326px] sm:w-[480px] tb:w-[560px] lg:w-[600px] flex h-auto 2xs:rounded-[10px] xs:rounded-[12px] rounded-2xl bg-white 2xs:px-4 2xs:py-4 xs:px-6 xs:py-4 2sm:px-6 2sm:py-4 sm:px-10 px-14 py-6">
      {isUnit ? (
        <div className="flex flex-col text-left items-start justify-center">
          <ul className="list-none text-left gap-2">
            <li className="2xs:text-[18px] xs:text-[18px] 2sm:text-[20px] text-[24px] font-bold">
              {result.unit_name}
            </li>
            <li className="2xs:text-[12px] xs:text-[12px] 2sm:text-[14px] font-normal">
              {result.unit_info}
            </li>
            <li className="mt-6 flex flex-row 2xs:space-x-1 xs:space-x-1 2sm:space-x-1 space-x-2">
              {result.unit_member.split(' ').map((name, index) => (
                <div
                  key={index}
                  className="2xs:px-2 xs:px-2 px-3 py-1 2xs:text-[8px] text-[12px] font-medium bg-[#f8cacc] text-white 2xs:rounded-[4px] xs:rounded-[6px] 2sm:rounded-[6px] rounded-[8px]"
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
          <p className="2xs:text-[10px] xs:text-sm 2sm:text-sm text-black">
            {text}
          </p>
        </div>
      )}
    </section>
  );
};

export default ResultCard;
