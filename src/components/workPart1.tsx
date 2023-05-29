import React from 'react';
import { Part1Data } from '../pages/pageWork';

export default function WorkPart1({ data }: { data: Part1Data }) {
  return (
    <div className="part1">
      <p className="explanation">{data.explanation1}</p>
      <div className="imgParagraphContainer">
        <div className="imgBox">
          <img src={data.image} alt="" />
        </div>

        <p>{data.explanation2}</p>
      </div>
    </div>
  );
}
