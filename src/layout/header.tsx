import React from 'react';
import { Link } from 'react-router-dom';
import Contact from '../components/contact';

function Header() {
  return (
    <Link className="header" to="/">
      <Contact />
      <div className="title">SIRSIRSIR</div>
    </Link>
  );
}

export default Header;
