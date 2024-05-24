import React from "react";
import "./App.css";
import BMICalculator from "./components/BMICalculator";

function App() {
  return (
    <div className="form-BMI">
      <h3 className="h3-BMI">Ingresa tus Datos</h3>
      <BMICalculator />
    </div>
  );
}

export default App;
