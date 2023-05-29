import React from 'react';
import { Part3Data } from '../pages/pageWork';

export default function WorkPart3({ data }: { data: Part3Data }) {
  return (
    <div className="part3">
      <div className="paragraphContainer">
        <p>{data.explanation1}</p>
        <p>{data.explanation2}</p>
      </div>
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
      </div>
    </div>
  );
}
