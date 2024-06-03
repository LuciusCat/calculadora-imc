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

import "./css/LimitsSection.css";

import {
  sectionGender,
  sectionAge,
  sectionMuscle,
  sectionPregnancy,
  sectionRace,
} from "./data/dataLimits";

import ListSection from "./components/ListSection";

import { overweight, underweight } from "./data/dataListSection";

import Menu from "./components/Menu";
import { menuItems } from "./data/dataMenu";

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

const sectionLimitsTitle = "Limitaciones del IMC";

const sectionLimitsTxt =
  "Aunque el IMC suele ser un indicador práctico para evaluar un peso saludable, no es adecuado para todas las personas. Grupos específicos deben interpretar los resultados de su IMC con cautela y, en algunos casos, puede no ser beneficioso utilizar esta medición.";

const Subtitle = ({ content}) => {
  return <h2 className="h2-sub" id="tips">{content}</h2>;
};

const h2Tips = "Consejos para mantener un peso saludable";

const sectionTableTitle = "Tabla de IMC para adultos";

const sectionTableTxt =
  "La tabla de Índice de Masa Corporal (IMC) es una herramienta utilizada para evaluar si una persona tiene un peso saludable en relación con su altura. El IMC se calcula dividiendo el peso de una persona en kilogramos por el cuadrado de su altura en metros (kg/m²). Los valores obtenidos se clasifican en diferentes categorías para facilitar la interpretación:";

function App() {
  return (
    <>
      <div className="page">
        <Menu title={"Tabla de contenido"}
        items={menuItems}
        />
        <div className="content">
          <div className="section-form">
            <Section
              className={"section-form-1"}
              title={sectionFormTitle}
              titleLevel="h1"
            >
              {sectionFormTxt}
            </Section>
            <BMICalculator/>
          </div>
          <article className="article-explain" id="result-BMI">
            <Section
              className={"section-explain"}
              title={sectionExplainTitle}
              titleLevel={"h2"}
            >
              {sectionExplainTxt}
            </Section>
            <div className="img-doc-2" />
          </article>

          <Subtitle content={h2Tips} />
          <div className="container-icon-section">
            <IconSection
              className={"icon-section"}
              idCard={sectionHealth.idCard}
              idImg={sectionHealth.idImg}
              title={sectionHealth.title}
              titleLevel={sectionHealth.titleLevel}
            >
              {sectionHealth.content}
            </IconSection>
            <IconSection
              className={"icon-section"}
              idCard={sectionExercise.idCard}
              idImg={sectionExercise.idImg}
              title={sectionExercise.title}
              titleLevel={sectionExercise.titleLevel}
            >
              {sectionExercise.content}
            </IconSection>

            <IconSection
              className={"icon-section"}
              idCard={sectionSleep.idCard}
              idImg={sectionSleep.idImg}
              title={sectionSleep.title}
              titleLevel={sectionSleep.titleLevel}
            >
              {sectionSleep.content}
            </IconSection>

            <IconSection
              className={"icon-section"}
              idCard={sectionHidro.idCard}
              idImg={sectionHidro.idImg}
              title={sectionHidro.title}
              titleLevel={sectionHidro.titleLevel}
            >
              {sectionHidro.content}
            </IconSection>

            <IconSection
              className={"icon-section"}
              idCard={sectionStress.idCard}
              idImg={sectionStress.idImg}
              title={sectionStress.title}
              titleLevel={sectionStress.titleLevel}
            >
              {sectionStress.content}
            </IconSection>

            <IconSection
              className={"icon-section"}
              idCard={sectionRegular.idCard}
              idImg={sectionRegular.idImg}
              title={sectionRegular.title}
              titleLevel={sectionRegular.titleLevel}
            >
              {sectionRegular.content}
            </IconSection>
          </div>

          <Section
            id={"table"}
            className={"section-table"}
            title={sectionTableTitle}
            titleLevel={"h2"}
          >
            {sectionTableTxt}
          </Section>

          <TableBMI data={bmiData} />

          <article className="article-explain" id="limits-BMI">
            <Section
              className={"section-explain"}
              title={sectionLimitsTitle}
              titleLevel={"h2"}
            >
              {sectionLimitsTxt}
              <div className="container-limits-section">
                <IconSection
                  className={"limits-section"}
                  idCard={sectionGender.idCard}
                  idImg={sectionGender.idImg}
                  title={sectionGender.title}
                  titleLevel={sectionGender.titleLevel}
                >
                  {sectionGender.content}
                </IconSection>

                <IconSection
                  className={"limits-section"}
                  idCard={sectionAge.idCard}
                  idImg={sectionAge.idImg}
                  title={sectionAge.title}
                  titleLevel={sectionAge.titleLevel}
                >
                  {sectionAge.content}
                </IconSection>

                <IconSection
                  className={"limits-section"}
                  idCard={sectionMuscle.idCard}
                  idImg={sectionMuscle.idImg}
                  title={sectionMuscle.title}
                  titleLevel={sectionMuscle.titleLevel}
                >
                  {sectionMuscle.content}
                </IconSection>

                <IconSection
                  className={"limits-section"}
                  idCard={sectionPregnancy.idCard}
                  idImg={sectionPregnancy.idImg}
                  title={sectionPregnancy.title}
                  titleLevel={sectionPregnancy.titleLevel}
                >
                  {sectionPregnancy.content}
                </IconSection>

                <IconSection
                  className={"limits-section"}
                  idCard={sectionRace.idCard}
                  idImg={sectionRace.idImg}
                  title={sectionRace.title}
                  titleLevel={sectionRace.titleLevel}
                >
                  {sectionRace.content}
                </IconSection>
              </div>
            </Section>
          </article>
          <ListSection
            id={"overweight-risks"}
            title={overweight.title}
            intro={overweight.intro}
            listItems={overweight.listItems}
            conclusion={overweight.conclusion}
          />

          <ListSection
            id={"underweight-risks"}
            title={underweight.title}
            intro={underweight.intro}
            listItems={underweight.listItems}
            conclusion={underweight.conclusion}
          />
        </div>
      </div>
    </>
  );
}

export default App;
