import React from 'react';
import { Link } from 'react-router-dom';
import ThumbnailGrid from '../../layout/thumbnailGrid';

export default function SirsContentsContainer() {
  return (
    <div className="sirsContentsContainer">
      <nav>
        <li className="navItemPast">
          <Link className="linkSirs" to="/sirs">
            sirs.
          </Link>
          <span>the past as a human beings</span>
        </li>
      </nav>
      <div className="sirsImgBoxesContainer">
        <div className="sirsImgBoxLarge">
          <div className="imgItem1" />
        </div>
        <div className="sirsImgBoxSmall">
          <div className="imgItem2" />
        </div>
      </div>
      <p className="sirsParagraphContainer">
        Not only Seoul to Kyonggi-do, but also child to adult of the child.
        <br />
        It was my life, and it will my life.
        <br />
        And I learned love of my life. Life of my love too.
      </p>
      <ThumbnailGrid pageName="sirs" />
    </div>
  );
}
