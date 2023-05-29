import React from 'react';
import { Part4Data } from '../pages/pageWork';

export default function WorkPart4({ data }: { data: Part4Data }) {
  return (
    <div className="part4">
      <div className="imgGrid">
        <div>
          <img src={data.image1} alt="" />
        </div>
        <div>
          <img src={data.image2} alt="" />
        </div>
        <div>
          <img src={data.image3} alt="" />
        </div>
        <div>
          <img src={data.image4} alt="" />
        </div>
      </div>
      <div className="paragraphContainer">
        <p>{data.explanation}</p>
        <div className="title">{data.title}</div>
        <p className="information">{data.date}</p>
      </div>
    </div>
  );
}
