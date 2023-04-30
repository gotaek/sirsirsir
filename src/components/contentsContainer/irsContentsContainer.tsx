import React from 'react';
import { Link } from 'react-router-dom';

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
        <div className="irsImgContainer">
          <img src="//source.unsplash.com/500x500/?blue" alt="" />
        </div>
        <p className="irsParagraphContainer">
          I am designing aprons with my love and this homepage for introduction with my friend
        </p>
      </section>
      <div className="irsImgContainer2">
        <img src="https://source.unsplash.com/random/400×400/?yellow" alt="" />
        <img src="https://source.unsplash.com/random/400×400/?yellow" alt="" />
        <img src="https://source.unsplash.com/random/400×400/?yellow" alt="" />
      </div>
    </div>
  );
}
