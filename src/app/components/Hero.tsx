import React from 'react';
import Form from './Form';
import hospital from '../assets/hospital.svg';
import Image from 'next/image';

function Hero() {
  return (
    <div className="hero-wrapper">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-heading">
            The Next Generation of <span>Clinic & Family</span> Care
          </h1>
          <p className="hero-p">Our clinic lets you visit exceptional medical providers, get clinically-backed wellness services, and discover the right medicine, all in one place.</p>
        </div>
        <Form />
      </div>
      <Image src={hospital} alt='hospital' style={{width: '100%', height: 'auto'}}/>
    </div>
  );
}

export default Hero;
