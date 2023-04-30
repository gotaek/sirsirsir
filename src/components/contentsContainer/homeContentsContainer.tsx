import React from 'react';
import { Link } from 'react-router-dom';

export default function HomeContentsContainer() {
  return (
    <div className="homeContentsContainer">
      <div className="backgroundRoseImg" />
      <nav>
        <ul>
          <li className="navItemPast">
            <Link className="linkSirs" to="/sirs">
              sirs.
            </Link>
            <span>the past as a human beings</span>
          </li>
          <li className="navItemPresent">
            <Link className="linkIrs" to="/irs">
              irs.
            </Link>
            <span>the present as a human beings</span>
          </li>
          <li className="navItemFuture">
            <Link className="linkIr" to="/ir">
              ir.
            </Link>
            <span>the future as a human beings</span>
          </li>
        </ul>
      </nav>
    </div>
  );
}
