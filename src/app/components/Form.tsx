import React from 'react';

function Form() {
  return (
    <form action="#" className="form-container">
      <div className="form-input-container">
        <label htmlFor="">Select Service</label>
        <select name="Service" id="" style={{ padding: '17.75px 24px' }}>
          <option value="Primary Care">Primary Care</option>
          <option value="Dermatology">Dermatology</option>
          <option value="Psychiatrist">Psychiatrist</option>
          <option value="Sport Medicine">Sport Medicine</option>
          <option value="Neurology">Neurology</option>
          <option value="Cardiology">Cardiology</option>
          <option value="Maternity">Maternity</option>
          <option value="Dental Care">Dental Care</option>
        </select>
      </div>
      <div className="form-input-container">
        <label htmlFor="">Select Location</label>
        <input type="text" placeholder="San Diego" />
      </div>
      <div className="form-input-container">
        <label htmlFor="">Select Date</label>
        <input type="text" placeholder="2024" />
      </div>
      <button className="button-primary form-button" style={{ padding: '18px 27px' }}>
        Make An Appointment
      </button>
    </form>
  );
}

export default Form;
