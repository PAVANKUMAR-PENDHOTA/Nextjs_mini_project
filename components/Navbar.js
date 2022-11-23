import React from 'react';
import NavbarStyle from '../styles/Navbar.module.css';

const Navbar = () => {
  return (
    <div>
        <ul className={NavbarStyle.ul}>
            <li className={NavbarStyle.li}><a href='/home'>Home</a></li>
            <li className={NavbarStyle.li}><a href='/contact'>Contact</a></li>
            <li className={NavbarStyle.li}><a href='/post/contact2'>About</a></li>
            <li className={NavbarStyle.li}><a href='/sidebar'>Sidebar</a></li>
            <li className={NavbarStyle.li} style={{float:"right"}}><a href='/login'>Logout</a></li>

        </ul>
    </div>
  )
}

export default Navbar
