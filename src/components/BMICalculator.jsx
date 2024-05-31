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
    if (bmi < 12 || bmi > 65) return "Ingrese valores correctos, por favor.";
    if (bmi < 18.5) return "Bajo peso.";
    if (bmi >= 18.5 && bmi <= 24.9) return "Normal.";
    if (bmi >= 25 && bmi <= 29.9) return "Sobrepeso.";
    if (bmi >= 30 && bmi <= 34.9) return "Obesidad grado I.";
    if (bmi >= 35 && bmi <= 39.9) return "Obesidad grado II.";
    if (bmi >= 40) return "Obesidad grado III.";
  };

  return (
    <div className="form-BMI">
      <div className="content-form" id="calculator-BMI">
        <h3 className="h3-BMI">Ingresa tus Datos</h3>

        <div className="input-elements">
          <div className="content-group">
            <label className="radio-form-BMI">
              <input
                type="radio"
                value="metric"
                checked={unit === "metric"}
                onChange={() => setUnit("metric")}
              />
              Métrico
            </label>
            <BMIInput
              placeholder={unit === "metric" ? "ejm. 166 cm" : "ejm. 65 in"}
              label={unit === "metric" ? "Altura (cm)" : "Altura (in)"}
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
          <div className="content-group">
            <label className="radio-form-BMI">
              <input
                type="radio"
                value="imperial"
                checked={unit === "imperial"}
                onChange={() => setUnit("imperial")}
              />
              Imperial
            </label>
            <BMIInput
              placeholder={unit === "metric" ? "ejm. 66 kg" : "ejm. 145 lbs"}
              label={unit === "metric" ? "Peso (kg)" : "Peso (lbs)"}
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
        </div>

        <button className="btn-form-BMI" onClick={calculateBMI}>
          Calcular IMC
        </button>
        <BMIResult bmi={bmi} message={message} />
      </div>
    </div>
  );
};

export default BMICalculator;
