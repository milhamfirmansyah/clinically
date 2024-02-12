import Image from 'next/image';
import React from 'react';
import serviceImage from '../assets/Rectangle 4183.svg';
import servicesIcon1 from '../assets/services-icon1.svg';
import servicesIcon2 from '../assets/services-icon2.svg';
import servicesIcon3 from '../assets/services-icon3.svg';
import servicesIcon4 from '../assets/services-icon4.svg';
import servicesIcon5 from '../assets/services-icon5.svg';
import servicesIcon6 from '../assets/services-icon6.svg';
import servicesIcon7 from '../assets/services-icon7.svg';
import servicesIcon8 from '../assets/services-icon8.svg';

function Services() {
  return (
    <section className="services">
      <div className="services-container">
        <div className="services-left">
          <div className='services-left-1'>
            <h2>We provide a modern service care</h2>
            <p>We believe in technology and our team to take care of your health problems. We guarantee you will get the best service that you have never experienced before</p>
          </div>
          <div className='services-left-2'>
            <Image src={serviceImage} alt="service-image" style={{ width: '100%', height: 'auto', zIndex: '90' }} />
          </div>
        </div>

        <div className="services-right">
          <div className="services-card">
            <Image src={servicesIcon1} alt="services-icon-1" style={{ width: '27.3333px', height: 'auto', marginBottom: '16px' }} />
            <h4>Primary Care</h4>
            <p>First care for your beloved family</p>
          </div>
          <div className="services-card white">
            <Image src={servicesIcon2} alt="services-icon-2" style={{ width: '27.3333px', height: 'auto', marginBottom: '16px' }} />
            <h4>Dermatology</h4>
            <p>Ftreat skin problems in a professional manner</p>
          </div>
          <div className="services-card white">
            <Image src={servicesIcon3} alt="services-icon-3" style={{ width: '27.3333px', height: 'auto', marginBottom: '16px' }} />
            <h4>Psychiatrist</h4>
            <p>help solve your problem comprehensively</p>
          </div>
          <div className="services-card">
            <Image src={servicesIcon4} alt="services-icon-4" style={{ width: '27.3333px', height: 'auto', marginBottom: '16px' }} />
            <h4>Sport Medicine</h4>
            <p>helps athletes recover their injuries quickly and efficiently</p>
          </div>
          <div className="services-card">
            <Image src={servicesIcon5} alt="services-icon-5" style={{ width: '27.3333px', height: 'auto', marginBottom: '16px' }} />
            <h4>Neurology</h4>
            <p>treat neurological problems in a professional manner</p>
          </div>
          <div className="services-card white">
            <Image src={servicesIcon6} alt="services-icon-6" style={{ width: '18px', height: 'auto', marginBottom: '16px' }} />
            <h4>Cardiology</h4>
            <p>Ftreat heart problems with modern technology</p>
          </div>
          <div className="services-card white">
            <Image src={servicesIcon7} alt="services-icon-7" style={{ width: '27.3333px', height: 'auto', marginBottom: '16px' }} />
            <h4>Maternity</h4>
            <p>pregnancy consultation with experts</p>
          </div>
          <div className="services-card">
            <Image src={servicesIcon8} alt="services-icon-8" style={{ width: '27.3333px', height: 'auto', marginBottom: '16px' }} />
            <h4>Dental Care</h4>
            <p>overcome and cure toothache comprehensively</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
