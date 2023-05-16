import React from 'react';
import { Link } from 'react-router-dom';

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
          <div className="imgItem" />
        </div>
        <div className="sirsImgBoxSmall">
          <div className="imgItem" />
        </div>
      </div>
      <p className="sirsParagraphContainer">
        Not only Seoul to Kyonggi-do, but also child to adult of the child.
        <br />
        It was my life, and it will my life.
        <br />
        And I learned love of my life. Life of my love too.
      </p>
    </div>
  );
}
