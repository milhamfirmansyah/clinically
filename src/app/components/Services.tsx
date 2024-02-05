import Image from 'next/image';
import React from 'react';
import serviceImage from '../assets/Rectangle 4183.jpg';
import servicesIcon1 from '../assets/services icon 1.jpg';
import servicesIcon2 from '../assets/services icon 2.jpg';
import servicesIcon3 from '../assets/services icon 3.jpg';
import servicesIcon4 from '../assets/services icon 4.jpg';
import servicesIcon5 from '../assets/services icon 5.jpg';
import servicesIcon6 from '../assets/services icon 6.jpg';
import servicesIcon7 from '../assets/services icon 7.jpg';
import servicesIcon8 from '../assets/services icon 8.jpg';
import pattern from '../assets/services pattern.png';

function Services() {
  return (
    <section className="services">
      <div className="services-container">
        <div className="services-left">
          <div className='services-left-1'>
            <h3>We provide a modern service care</h3>
            <p>We believe in technology and our team to take care of your health problems. We guarantee you will get the best service that you have never experienced before</p>
          </div>
          <div className='services-left-2'>
            <Image src={serviceImage} alt="service-image" style={{ width: '100%', height: 'auto', zIndex: '90' }} />
            {/* <Image src={pattern} alt='service-pattern' className='services-pattern' style={{zIndex: '0'}}/> */}
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
            <Image src={servicesIcon6} alt="services-icon-6" style={{ width: '27.3333px', height: 'auto', marginBottom: '16px' }} />
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
