import React from 'react';
import { Part2Data } from '../pages/pageWork';

export default function WorkPart2({ data }: { data: Part2Data }) {
  return (
    <div className="part2">
      <p className="explanation">{data.explanation}</p>
      <div className="imgGrid">
        <div className="imgBox">
          <img src={data.image1} alt="" />
        </div>
        <div className="imgBox">
          <img src={data.image2} alt="" />
        </div>
        <div className="imgBox">
          <img src={data.image3} alt="" />
        </div>
        <div className="imgBox">
          <img src={data.image4} alt="" />
        </div>
        <div className="imgBox">
          <img src={data.image5} alt="" />
        </div>
        <div className="imgBox">
          <img src={data.image6} alt="" />
        </div>
      </div>
    </div>
  );
}
