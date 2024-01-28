import React from 'react';
import Form from './Form';

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
    </div>
  );
}

export default Hero;
