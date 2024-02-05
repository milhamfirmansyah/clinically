import React from 'react';
import pattern1 from '../assets/appointment pattern 1.jpg';
import pattern2 from '../assets/appointment pattern 2.jpg';
import pattern3 from '../assets/appointment pattern 3.jpg';
import Image from 'next/image';

function Appointment() {
  return (
    <section className="appointment">
      <div className="appointment__left">
        <h1>How to make an appointment?</h1>
        <p>We are brave compared to other clinics, because we believe that what we have is the best</p>
        <button className="button-primary appointment-button-left" style={{ padding: '16px 24px' }}>
          Make an Appointment
        </button>
        <Image src={pattern3} alt="appointment pattern 3" className="pattern-3" />
      </div>

      <div className="appointment__right">
        <div className="appointment__right-card">
          <div className="appointment__right-number">
            <div className="appointment__right-number-bg">1</div>
            <div className="appointment__right-number-line"></div>
          </div>
          <div className="appointment__right-content">
            <h2>Find Clinic</h2>
            <p>search for the clinic according to the closest location by entering the location menu</p>
          </div>
        </div>
        <div className="appointment__right-card">
          <div className="appointment__right-number">
            <div className="appointment__right-number-bg">2</div>
            <div className="appointment__right-number-line"></div>
          </div>
          <div className="appointment__right-content">
            <h2>Get the Schedule</h2>
            <p>get schedules and queues easily and quickly, without waiting for anything</p>
          </div>
        </div>
        <div className="appointment__right-card">
          <div className="appointment__right-number">
            <div className="appointment__right-number-bg">3</div>
          </div>
          <div className="appointment__right-content">
            <h2>Make An Appointment</h2>
            <p>fill in the form provided in full so that we can provide maximum service</p>
          </div>
        </div>
        <button className="button-primary appointment-button-right" style={{ padding: '16px 24px' }}>
          Make an Appointment
        </button>

        <Image src={pattern1} alt="appointment pattern 1" className="pattern-1" />
        <Image src={pattern2} alt="appointment pattern 2" className="pattern-2" />
      </div>
    </section>
  );
}

export default Appointment;
