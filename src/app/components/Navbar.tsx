import React from 'react';
import Image from 'next/image';
import logo from '../assets/Logo.jpg';
import Link from 'next/link';

function Navbar() {
  return (
    <div className="navbar-container">
      <div className="navbar-left">
        <Image src={logo} alt="logo" className="logo" />
        <div className="navbar-menu">
            <Link href='#'>Home</Link>
            <Link href='#'>About Us</Link>
            <Link href='#'>Location</Link>
            <Link href='#'>Health News</Link>
            <Link href='#'>Careers</Link>
            <Link href='#'>Pages</Link>
        </div>
      </div>
      <div className="navbar-right">
        <button className='button-white'>Login</button>
        <button className='button-primary'>Book Now</button>
      </div>
    </div>
  );
}

export default Navbar;
