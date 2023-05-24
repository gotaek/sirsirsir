import React from 'react';
import { useNavigate } from 'react-router-dom';

type ThumbnailProps = {
  pageName: string;
  id: number;
};
export default function Thumbnail({ pageName, id }: ThumbnailProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/${pageName}/work${id}`);
  };

  return (
    <>
      {/* eslint-disable-next-line */}
      <div role="button" className={`${pageName}ThumbnailBox`} onClick={handleClick}>
        <div className={`thumbnailItem${id}`} />
      </div>
    </>
  );
}
