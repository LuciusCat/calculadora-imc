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

const sectionFormTxt =
  "Comprenda mejor su peso en relación con el suyo utilizando nuestra calculadora de índice de masa corporal (BM). Si bien el IMC no es el único determinante de un peso saludable, ofrece un valioso punto de partida para evaluar su salud y bienestar general.";

const sectionExplainTitle = "¿Qué significa su resultado de IMC?";

const sectionExplainTxt =
  'Un IMC entre 18,5 y 24,9 se considera un "peso saludable". Mantener un peso saludable puede reducir las posibilidades de experimentar problemas de salud en el futuro, como obesidad y diabetes tipo 2. Trate de seguir una dieta nutritiva con contenido reducido de grasas y azúcares, incorporando abundantes frutas y verduras. Además, esfuércese por realizar actividad física con regularidad, idealmente unos 30 minutos diarios durante cinco días a la semana.';

function App() {
  return (
    <>
      <div className="page">
        <div className="content">
          <div className="section-form">
            <Section
              className={"section-form-1"}
              title={sectionFormTitle}
              titleLevel="h1"
            >
              {sectionFormTxt}
            </Section>
            <BMICalculator />
          </div>
          <article className="article-explain">
            <Section
              className={"section-explain"}
              title={sectionExplainTitle}
              titleLevel={"h2"}
            >
              {sectionExplainTxt}
            </Section>
            <div className="img-doc-2" />
          </article>

          <TableBMI data={bmiData} />
        </div>
      </div>
    </>
  );
}

export default App;
