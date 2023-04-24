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
      <div className="sirsImgContainer">
        <img
          src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGFyaXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
        <img src="https://source.unsplash.com/collection/190727/400x300" alt="" />
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
