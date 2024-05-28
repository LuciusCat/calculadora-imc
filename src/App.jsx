import React from "react";
import "./App.css";
import BMICalculator from "./components/BMICalculator";
import TableBMI from "./components/TableBMI";
import Section from "./components/Section";
import IconSection from "./components/IconSection";
import {
  sectionHealth,
  sectionExercise,
  sectionSleep,
  sectionHidro,
  sectionStress,
  sectionRegular,
} from "./data/dataIcon";

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
  "Comprenda mejor su peso en relación con su estatura utilizando nuestra calculadora de índice de masa corporal (IMC). Si bien el IMC no es el único determinante de un peso saludable, ofrece un valioso punto de partida para evaluar su salud y bienestar general.";

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
          <div className="container-icon-section">
            <IconSection
              idCard={sectionHealth.idCard}
              idImg={sectionHealth.idImg}
              title={sectionHealth.title}
              titleLevel={sectionHealth.titleLevel}
            >
              {sectionHealth.content}
            </IconSection>
            <IconSection
              idCard={sectionExercise.idCard}
              idImg={sectionExercise.idImg}
              title={sectionExercise.title}
              titleLevel={sectionExercise.titleLevel}
            >
              {sectionExercise.content}
            </IconSection>

            <IconSection
              idCard={sectionSleep.idCard}
              idImg={sectionSleep.idImg}
              title={sectionSleep.title}
              titleLevel={sectionSleep.titleLevel}
            >
              {sectionSleep.content}
            </IconSection>

            <IconSection
              idCard={sectionHidro.idCard}
              idImg={sectionHidro.idImg}
              title={sectionHidro.title}
              titleLevel={sectionHidro.titleLevel}
            >
              {sectionHidro.content}
            </IconSection>

            <IconSection
              idCard={sectionStress.idCard}
              idImg={sectionStress.idImg}
              title={sectionStress.title}
              titleLevel={sectionStress.titleLevel}
            >
              {sectionStress.content}
            </IconSection>

            <IconSection
              idCard={sectionRegular.idCard}
              idImg={sectionRegular.idImg}
              title={sectionRegular.title}
              titleLevel={sectionRegular.titleLevel}
            >
              {sectionRegular.content}
            </IconSection>
          </div>
          <TableBMI data={bmiData} />
        </div>
      </div>
    </>
  );
}

export default App;
