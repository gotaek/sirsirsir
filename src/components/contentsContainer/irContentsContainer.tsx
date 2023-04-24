import React from 'react';
import { Link } from 'react-router-dom';

export default function IrContentsContainer() {
  return (
    <div className="irContentsContainer">
      <nav>
        <li className="navItem3">
          <Link className="link3" to="/ir">
            ir.
          </Link>
          <span>the future as a human beings</span>
        </li>
      </nav>
    </div>
  );
}
