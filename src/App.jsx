import React from "react";
import "./App.css";
import BMICalculator from "./components/BMICalculator";
import TableBMI from "./components/TableBMI";
import Section from "./components/Section";
import IconSection from "./components/IconSection";
import Subtitle from "./components/Subtitle";
import ListSection from "./components/ListSection";
import Menu from "./components/Menu";

import "./css/LimitsSection.css";

import { bmiData } from "./data/dataTable";

import { h2Tips } from "./data/dataSubtitle";

import { menuItems } from "./data/dataMenu";

import {
  sectionHealth,
  sectionExercise,
  sectionSleep,
  sectionHidro,
  sectionStress,
  sectionRegular,
} from "./data/dataIcon";

import {
  sectionGender,
  sectionAge,
  sectionMuscle,
  sectionPregnancy,
  sectionRace,
} from "./data/dataLimits";

import { overweight, underweight } from "./data/dataListSection";

import {
  sectionFormTitle,
  sectionFormTxt,
  sectionExplainTitle,
  sectionExplainTxt,
  sectionLimitsTitle,
  sectionLimitsTxt,
  sectionTableTitle,
  sectionTableTxt,
} from "./data/dataSection";

function App() {
  return (
    <>
      <div className="page">
        <Menu title={"Tabla de contenido"} items={menuItems} />
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
