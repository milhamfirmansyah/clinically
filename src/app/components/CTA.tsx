import Image from 'next/image';
import React from 'react';
import ctaImage from '../assets/cta-image.png'

function CTA() {
  return (
    <section className="cta">
      <div className="cta-container">
        <div className="cta-left">
          <h1>We care whenever you need it</h1>
          <p>Lorem ipsum dolor sit amet consectetur. Fermentum eget sapien velit vitae dignissim urna laoreet.</p>
          <div className="cta-button-container">
            <button className="button-white" style={{ padding: '16px 24px' }}>
              Make an Appointment
            </button>
            <button className="button-primary" style={{ padding: '16px 24px', border: '1px solid #fff' }}>
              Contact Us
            </button>
          </div>
        </div>
        <div className="cta-right">
            <Image src={ctaImage} alt='cta-image'/>
        </div>
      </div>
    </section>
  );
}

export default CTA;
