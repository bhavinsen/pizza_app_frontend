import React from 'react';

import Navbar from './NavBar';
import Logo from './Logo';

const Header = ({user}) => (
   <nav className="nav-wrapper teal">
     <div className="container">
       <Logo />
       <Navbar user={user} />
     </div>
   </nav>
);

export default Header;