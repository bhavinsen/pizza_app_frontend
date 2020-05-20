import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const Li = styled.li`
   cursor: pointer;
`;

const Navbar = ({user}) => {

  const logout = () => {
    localStorage.removeItem('user');
    document.location.reload();
  }
  return (
    <ul className="right">
      <li>
        <Link to="/">Shop</Link>
      </li>
      {user && user.access_token ? (
        <Li
          onClick={logout}
        >
          Logout
        </Li>
      ) : (
        <li>
          <Link to="/login">Login</Link>
        </li>
      )}
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
};

export default Navbar;
