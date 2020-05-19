import React from 'react';

import Navbar from './NavBar';
import Logo from './Logo';

const Header = () => (
   <nav className="nav-wrapper teal">
     <div className="container">
       <Logo />
       <Navbar />
     </div>
   </nav>
);

export default Header;