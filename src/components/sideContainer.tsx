import React from 'react';
import PhotoBox from './photoBox';
import type { Iphotos } from './leftSideContainer';

interface PropsType {
  photos: Iphotos[];
}
function SideContainer({ photos }: PropsType) {
  return (
    <div className="sideContainer">
      {photos.map((elem) => {
        return <PhotoBox url={elem.link} />;
      })}
    </div>
  );
}

export default SideContainer;
