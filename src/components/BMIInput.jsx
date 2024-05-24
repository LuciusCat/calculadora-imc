import React from 'react';

const BMIInput = ({ placeholder, label, value, onChange }) => {
  return (
    <div className='input-form-BMI'>
      <input 
        type="number" 
        value={value} 
        onChange={onChange} 
        placeholder={placeholder}
      />
      <label>{label}</label>
    </div>
  );
};

export default BMIInput;