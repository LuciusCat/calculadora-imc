import React, { useState } from "react";
import BMIInput from "./BMIInput";
import BMIResult from "./BMIResult";

const BMICalculator = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [message, setMessage] = useState("");
  const [unit, setUnit] = useState("metric");

  const calculateBMI = () => {
    if (weight && height) {
      let bmi;
      if (unit === "metric") {
        const heightInMeters = height / 100;
        bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      } else if (unit === "imperial") {
        bmi = ((703 * weight) / (height * height)).toFixed(2);
      }
      setBmi(bmi);
      setMessage(getBMICategory(bmi));
    } else {
      setMessage("Por favor ingrese peso y altura válidos.");
    }
  };

  const getBMICategory = (bmi) => {
    if (bmi < 18.5) return "Bajo peso";
    if (bmi >= 18.5 && bmi <= 24.9) return "Normal";
    if (bmi >= 25 && bmi <= 29.9) return "Sobrepeso";
    if (bmi >= 30) return "Obesidad";
  };

  return (
    <>
      <div className="radio-form-BMI">
        <label>
          <input
            type="radio"
            value="metric"
            checked={unit === "metric"}
            onChange={() => setUnit("metric")}
          />
          Métrico (kg, cm)
        </label>
        <label>
          <input
            type="radio"
            value="imperial"
            checked={unit === "imperial"}
            onChange={() => setUnit("imperial")}
          />
          Imperial (lbs, in)
        </label>
      </div>
      <div className="contentlbl-form-BMI">
        <BMIInput
          placeholder={
            unit === "metric" ? "kg" : "lbs"
          }
          label={unit === "metric" ? "Peso (kg)" : "Peso (lbs)"}
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
        <BMIInput
          placeholder={
            unit === "metric" ? "cm" : "in"
          }
          label={unit === "metric" ? "Altura (cm)" : "Altura (in)"}
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </div>

      <button className="btn-form-BMI" onClick={calculateBMI}>
        Calcular IMC
      </button>
      <BMIResult bmi={bmi} message={message} />
    </>
  );
};

export default BMICalculator;
