import React from 'react';

function Form() {
  return (
    <form action="#" className="form-container">
      <div className="form-input-container">
        <label htmlFor="">Select Service</label>
        <input type="text" placeholder="Dental Care" />
      </div>
      <div className="form-input-container">
        <label htmlFor="">Select Location</label>
        <input type="text" placeholder="San Diego" />
      </div>
      <div className="form-input-container">
        <label htmlFor="">Select Date</label>
        <input type="text" placeholder="2024" />
      </div>
      <button className="button-primary form-button" style={{padding: '18px 27px'}}>Make An Appointment</button>
    </form>
  );
}

export default Form;
