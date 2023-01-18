import React from 'react';
import PhotoBox from './photoBox';
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
      {photos.map((elem) => {
        return <PhotoBox url={elem.link} />;
      })}
      {footer}
    </div>
  );
}

export default SideContainer;
