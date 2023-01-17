import React from 'react';

interface PropsType {
  url: string;
}
function PhotoBox({ url }: PropsType) {
  return (
    <div className="photoBox">
      <img src={url} alt="이미지" />
    </div>
  );
}

export default PhotoBox;
