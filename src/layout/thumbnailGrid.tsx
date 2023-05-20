import React from 'react';
import { Link } from 'react-router-dom';

type ThumbnailGridProps = {
  pageName: string;
};
export default function ThumbnailGrid({ pageName }: ThumbnailGridProps) {
  return (
    <div className="thumbnailGrid">
      {Array.from({ length: 8 }, (_, index) => (
        <Link className="linkSirs" to={`/${pageName}/work${index + 1}`}>
          <div className="item">hello</div>
        </Link>
      ))}
    </div>
  );
}
