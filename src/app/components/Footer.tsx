import Image from 'next/image';
import React from 'react';
import logo from '../assets/Logo.jpg';
import Link from 'next/link';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <div className="logo-container">
            <Image src={logo} alt="logo" style={{ width: '46px', height: '46px' }} />
            <span>Clinically</span>
          </div>
          <p className="footer-email">hello@designmate.co</p>
          <p className="footer-telp">(704) 555-0127</p>
        </div>
        <div className="footer-right">
          <div className="footer-pages-wrapper">
            <span>Pages</span>
            <div className="footer-pages-container">
              <div className="footer-pages-1">
                <Link href={'#'}>Homepage</Link>
                <Link href={'#'}>About Us</Link>
                <Link href={'#'}>Location</Link>
                <Link href={'#'}>News</Link>
                <Link href={'#'}>Career News</Link>
                <Link href={'#'}>Detail Clinic</Link>
              </div>
              <div className="footer-pages-2">
                <Link href={'#'}>Booking</Link>
                <Link href={'#'}>FAQ</Link>
                <Link href={'#'}>Contact</Link>
                <Link href={'#'}>Blog Details</Link>
                <Link href={'#'}>Doctor Details</Link>
              </div>
            </div>
          </div>
          <div className="footer-utility-pages-container">
            <div className="footer-utility-pages">
              <span>Utility Pages</span>
              <Link href={'#'}>Login</Link>
              <Link href={'#'}>Sign Up</Link>
              <Link href={'#'}>Forgot Password</Link>
              <Link href={'#'}>Reset Password</Link>
              <Link href={'#'}>404</Link>
              <Link href={'#'}>Demo Page</Link>
            </div>
            <div className="footer-templates-pages">
              <span>Template Pages</span>
              <Link href={'#'}>Style Guide</Link>
              <Link href={'#'}>License</Link>
              <Link href={'#'}>Change Log</Link>
            </div>
          </div>
        </div>
      </div>
      <p className="footer-copyright">Designed by Designmate team © 2022.</p>
    </footer>
  );
}

export default Footer;
