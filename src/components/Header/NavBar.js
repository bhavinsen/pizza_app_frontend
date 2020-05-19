import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => (
  <ul className="right">
    <li>
      <Link to="/">Shop</Link>
    </li>
    <li>
      <Link to="/login">Login</Link>
    </li>
    <li>
      <Link to="cart">My Cart</Link>
    </li>
    <li>
      <Link to="cart">
        <i className="material-icons">shopping_cart</i>
      </Link>
    </li>
  </ul>
);

export default Navbar;
