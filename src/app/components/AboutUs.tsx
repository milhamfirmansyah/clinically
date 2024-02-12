import Image from 'next/image';
import React from 'react';
import videoBackground from '../assets/Rectangle 4193.svg';
import videoButton from '../assets/Button.svg';
import pattern from '../assets/aboutus-pattern1.svg';
import pattern2 from '../assets/aboutus-pattern2.svg';

function AboutUs() {
  return (
    <section className="about-us">
      <div className="about-us__container">
        <div className="about-us__left">
          <h2>We are an international clinic with over 25 years of experience in treating patients</h2>
          <p>Clinically is a health clinic that was built by Charles Xavier in 1993. This clinic was originally only operating in Pasadena, California. And now Clinically has over 25,000 branches around the world.</p>
          <button className="button-white" style={{ padding: '16px 32px' }}>
            Read More
          </button>
        </div>
        <div className="about-us__right" style={{ position: 'relative' }}>
          <Image src={videoBackground} alt="video-background" style={{ width: '100%', height: 'auto' }} />
          <Image src={videoButton} alt="video-button" className="video-button" />
        </div>
      </div>
      <Image src={pattern} alt="pattern" className="pattern" />
      <Image src={pattern2} alt="pattern2" className="about-us-pattern-2" />
    </section>
  );
}

export default AboutUs;
