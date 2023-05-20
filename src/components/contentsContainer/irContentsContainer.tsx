import React from 'react';
import { Link } from 'react-router-dom';
import ThumbnailGrid from '../../layout/thumbnailGrid';

export default function IrContentsContainer() {
  return (
    <div className="irContentsContainer">
      <nav>
        <li className="navItemFuture">
          <Link className="linkIr" to="/ir">
            ir.
          </Link>
          <span>the future as a human beings</span>
        </li>
      </nav>
      <div className="irParagraphContainer">
        <div className="irParagraph">
          <span className="irParagraphTitle">
            Like Lewis Hamilton,
            <div className="irCircle backgroundTeal" />
          </span>
          <p className="irParagraphContent">
            compassion and morality regardless of location, and love for race and car.
          </p>
        </div>
        <div className="irParagraph">
          <span className="irParagraphTitle">
            Like Tommy Shelby,
            <div className="irCircle backgroundLightgrey" />
          </span>
          <p className="irParagraphContent">
            calm and strong mind to a strong person who has nothing to do with the situation
          </p>
        </div>
        <div className="irParagraph">
          <span className="irParagraphTitle">
            Like Peter Dupont,
            <div className="irCircle backgroundBurgundy" />
          </span>
          <p className="irParagraphContent">trying to grow me in other jobs.</p>
        </div>
      </div>
      <ThumbnailGrid pageName="ir" />
    </div>
  );
}
