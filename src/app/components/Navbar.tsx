'use client';

import React from 'react';
import Image from 'next/image';
import logo from '../assets/Logo.jpg';
import menuIcon from '../assets/menu.jpg';
import Link from 'next/link';
import { useState } from 'react';

function Navbar() {
  const [menu, setMenu] = useState(false);

  return (
    <div className="navbar-wrapper">
      <div className="navbar-container">
        <div className="navbar-left">
          <Image src={logo} alt="logo" className="logo" />
        </div>
        <div className={menu ? 'navbar-menu-container-open' : 'navbar-menu-container'}>
          <div className="navbar-menu">
            <Link href="#">Home</Link>
            <Link href="#">About Us</Link>
            <Link href="#">Location</Link>
            <Link href="#">Health News</Link>
            <Link href="#">Careers</Link>
            <Link href="#">Pages</Link>
          </div>
          <div className="navbar-right">
            <button className="button-white">Login</button>
            <button className="button-primary">Book Now</button>
          </div>
        </div>
        <Image src={menuIcon} alt="menu-icon" className="navbar-menu-icon" onClick={() => setMenu(!menu)} />
      </div>
      <div className={menu ? "navbar-menu-open-background" : "navbar-menu-close-background"}></div>
    </div>
  );
}

export default Navbar;
