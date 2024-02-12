'use client';

import React from 'react';
import Image from 'next/image';
import logo from '../assets/Logo (4).svg';
import menuIcon from '../assets/menu (1).svg';
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
          <button className={menu ? 'close-button' : 'close-button-none'} onClick={() => setMenu(false)}>
            Close
          </button>
          <div className="navbar-right">
            <button className="button-white" style={{ padding: '16px 24px' }}>
              Login
            </button>
            <button className="button-primary" style={{ padding: '16px 32px' }}>
              Book Now
            </button>
          </div>
        </div>
        <Image src={menuIcon} alt="menu-icon" className="navbar-menu-icon" onClick={() => setMenu(true)} />
      </div>
      <div className={menu ? 'navbar-menu-open-background' : 'navbar-menu-close-background'}></div>
    </div>
  );
}

export default Navbar;
