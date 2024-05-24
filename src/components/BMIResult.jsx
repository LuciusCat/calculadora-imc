import React from 'react';

const BMIResult = ({ bmi, message }) => {
  return (
    <div className='result-form-BMI'>
      <h3>Su IMC: {bmi || '¡Bienvenido!'}</h3>
      <p>{message || 'Ingrese su peso y su altura para ver los resultados aquí.'}</p>
    </div>
  );
};

export default BMIResult;