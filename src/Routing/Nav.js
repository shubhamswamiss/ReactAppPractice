import React from "react";
import {Link} from 'react-router-dom';

function Nav() {
  return (
    <ul style={{ listStyleType: "none" }}>
      <li>
        <Link to="">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li><Link to='/login'>Login</Link></li>
    </ul>
  );
}

export default Nav;