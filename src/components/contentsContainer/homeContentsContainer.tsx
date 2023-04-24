import React from 'react';
import { Link } from 'react-router-dom';

export default function HomeContentsContainer() {
  return (
    <div className="homeContentsContainer">
      <div className="backgroundRoseImg" />
      <nav>
        <ul>
          <li className="navItem1">
            <Link className="link1" to="/sirs">
              sirs.
            </Link>
            <span>the past as a human beings</span>
          </li>
          <li className="navItem2">
            <Link className="link2" to="/irs">
              irs.
            </Link>
            <span>the present as a human beings</span>
          </li>
          <li className="navItem3">
            <Link className="link3" to="/ir">
              ir.
            </Link>
            <span>the future as a human beings</span>
          </li>
        </ul>
      </nav>
    </div>
  );
}
