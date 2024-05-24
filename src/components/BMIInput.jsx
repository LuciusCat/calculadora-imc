import React from 'react';

const BMIInput = ({ placeholder, label, value, onChange }) => {
  return (
    <>
      <label className='lbl-input-form-BMI'>
        {label}:
        <input 
        placeholder= {placeholder}
        className='input-form-BMI'
        type="number" 
        value={value} 
        onChange={onChange} />
      </label>
    </>
  );
};

export default BMIInput;
