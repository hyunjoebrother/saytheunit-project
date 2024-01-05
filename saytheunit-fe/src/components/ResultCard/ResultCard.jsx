import React from 'react';

const ResultCard = ({ result, text }) => {
  let isUnit = false;
  if (text === null) {
    isUnit = true;
  } else {
    isUnit = false;
  }
  return (
    <section className="w-full h-24 rounded-2xl bg-white p-4">
      <div className="flex flex-col text-left items-center justify-center">
        {isUnit ? (
          <>
            <li>유닛 이름: {result.unit_name}</li>
            <li>유닛 설명: {result.unit_info}</li>
            <li>유닛 멤버: {result.unit_member}</li>
            <li>좋아요수: {result.like}</li>
          </>
        ) : (
          <p className="font-medium text-center text-pink-600">{text}</p>
        )}
      </div>
    </section>
  );
};

export default ResultCard;
