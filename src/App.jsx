import React from "react";
import "./App.css";
import BMICalculator from "./components/BMICalculator";
import TableBMI from "./components/TableBMI";
import Section from "./components/Section";

const bmiData = [
  { classification: "Bajo peso", bmi: "Menos de 18,4" },
  { classification: "Peso normal", bmi: "18,5 a 24,9" },
  { classification: "Sobrepeso", bmi: "25 a 29,9" },
  { classification: "Obesidad grado I", bmi: "30 a 34,9" },
  { classification: "Obesidad grado II", bmi: "35 a 39,9" },
  { classification: "Obesidad grado III", bmi: "Igual o mayor a 40" },
];

const sectionFormTitle = "CALCULADORA ÍNDICE DE MASA CORPORAL";

const formTxt =
  "Comprenda mejor su peso en relación con el suyo utilizando nuestra calculadora de índice de masa corporal (BM). Si bien el IMC no es el único determinante de un peso saludable, ofrece un valioso punto de partida para evaluar su salud y bienestar general.";

function App() {
  return (
    <>
      <div className="page">
        <div className="content">
          <div className="section-form">
            <Section title={sectionFormTitle} titleLevel="h1">
              {formTxt}
            </Section>
            <BMICalculator />
          </div>

          <TableBMI data={bmiData} />
        </div>
      </div>
    </>
  );
}

export default App;
