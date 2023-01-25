import React from 'react';
import ShapeBox from './shapeBox';
import type { Iphotos } from './leftSideContainer';
import Footer from './Footer';

interface PropsType {
  photos: Iphotos[];
}
function SideContainer({ photos }: PropsType) {
  const rightSide = photos.length === 5;
  let footer;
  if (rightSide) {
    footer = <Footer />;
  }
  return (
    <div className="sideContainer">
      {photos.map(() => {
        return <ShapeBox />;
      })}
      {footer}
    </div>
  );
}

export default SideContainer;
