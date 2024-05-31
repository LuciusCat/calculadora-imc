import React from "react";
import "../css/Menu.css";

const Menu = () => {
  return (
    <div className="container-menu">
      <h3>Tabla de contenido</h3>
      <ul>
        <li>
          <a href="#calculator-BMI">Calculadora IMC</a>
        </li>
        <li>
          <a href="#result-BMI">¿Qué significa su resultado de IMC</a>
        </li>
        <li>
          <a href="#tips">Consejos para mantener un peso saludable</a>
        </li>
        <li>
          <a href="#table">Tabla de IMC para adultos</a>
        </li>
        <li>
          <a href="#limits-BMI">Limitaciones del IMC</a>
        </li>
        <li><a href="#overweight-risks">Riesgos del sobrepeso</a></li>
        <li><a href="#underweight-risks">Riesgos del bajo peso</a></li>
      </ul>
    </div>
  );
};

export default Menu;
