import React from 'react';
import ShapeBox from './shapeBox';

type SideContainerProps = {
  boxCount: number;
};

export default function RightSideContainer({ boxCount }: SideContainerProps) {
  return (
    <div className="rightSideContainer">
      <img className="smallRoseImg" src="img/rose.jpg" alt="" />
      <div className="rightSideGrid">
        {Array.from({ length: boxCount - 3 }, () => (
          <ShapeBox />
        ))}
      </div>
    </div>
  );
}
