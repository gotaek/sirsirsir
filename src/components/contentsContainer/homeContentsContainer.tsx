import React from 'react';
import { Link } from 'react-router-dom';

export default function HomeContentsContainer() {
  return (
    <div className="homeContentsContainer">
      <div className="backgroundRoseImg" />
      <div className="textBoxContainer">
        <div className="textBox1">
          <Link className="link1" to="/sirs">
            sirs.
          </Link>
          <span>the past as a human beings</span>
        </div>
        <div className="textBox2">
          <Link className="link2" to="/irs">
            irs.
          </Link>
          <span>the present as a human beings</span>
        </div>
        <div className="textBox3">
          <Link className="link3" to="/ir">
            ir.
          </Link>
          <span>the future as a human beings</span>
        </div>
      </div>
    </div>
  );
}
