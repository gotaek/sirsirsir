import React from 'react';
import PhotoBox from './photoBox';

function SideContainer() {
  const contents = [{}, {}, {}, {}, {}, {}, {}];

  return (
    <div className="sideContainer">
      {contents.map(() => {
        return <PhotoBox />;
      })}
    </div>
  );
}

export default SideContainer;
