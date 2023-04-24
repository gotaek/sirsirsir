import React from 'react';
import { Link } from 'react-router-dom';

export default function SirsContentsContainer() {
  return (
    <div className="sirsContentsContainer">
      <nav>
        <li className="navItem1">
          <Link className="link1" to="/sirs">
            sirs.
          </Link>
          <span>the past as a human beings</span>
        </li>
      </nav>
    </div>
  );
}
