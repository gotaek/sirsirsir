import React from 'react';
import { Link } from 'react-router-dom';
import ThumbnailGrid from '../../layout/thumbnailGrid';

export default function IrsContentsContainer() {
  return (
    <div className="irsContentsContainer">
      <nav>
        <li className="navItemPresent">
          <Link className="linkIrs" to="/irs">
            irs.
          </Link>
          <span>the present as a human beings</span>
        </li>
      </nav>
      <section className="irsSection">
        <div className="irsImgBoxesContainer">
          <div className="irsImgBoxLarge">
            <div className="imgItem1" />
          </div>
        </div>
        <p className="irsParagraphContainer">
          I am designing aprons with my love and this homepage for introduction with my friend
        </p>
      </section>
      <div className="irsImgBoxesContainer2">
        <div className="irsImgBoxSmall">
          <div className="imgItem2" />
        </div>
        <div className="irsImgBoxSmall">
          <div className="imgItem3" />
        </div>
        <div className="irsImgBoxSmall">
          <div className="imgItem4" />
        </div>
      </div>
      <ThumbnailGrid pageName="irs" />
    </div>
  );
}
