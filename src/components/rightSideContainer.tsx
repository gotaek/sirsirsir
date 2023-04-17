import React from 'react';
import ShapeBox from './shapeBox';

type SideContainerProps = {
  boxCount: number;
};
const HEIGHT_IMG = 3;

export default function RightSideContainer({ boxCount }: SideContainerProps) {
  return (
    <div className="rightSideContainer">
      <img className="smallRoseImg" src="img/rose.jpg" alt="" />
      <div className="rightSideGrid">
        {Array.from({ length: boxCount - HEIGHT_IMG }, () => (
          <ShapeBox />
        ))}
      </div>
    </div>
  );
}
