import React from 'react';
import ShapeBox from './shapeBox';

type SideContainerProps = {
  boxCount: number;
};

export default function LeftSideContainer({ boxCount }: SideContainerProps) {
  return (
    <div className="leftSideContainer">
      <div className="leftSideGrid">
        {Array.from({ length: boxCount }, () => (
          <ShapeBox />
        ))}
      </div>
    </div>
  );
}
