import React from 'react';
import Thumbnail from '../components/thumbnail';

type ThumbnailGridProps = {
  pageName: string;
};
export default function ThumbnailGrid({ pageName }: ThumbnailGridProps) {
  return (
    <div className="thumbnailGrid">
      {Array.from({ length: 8 }, (_, index) => (
        <Thumbnail pageName={pageName} id={index + 1} />
      ))}
    </div>
  );
}
