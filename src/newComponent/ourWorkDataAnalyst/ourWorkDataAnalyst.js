import React from "react";

import Common from "../../Container/Common";
import ServiceOffer from "../serviceOffers/serviceOffers";
import DataAnalystBanner from "../../img/dataAnalysis.jpg";

const cardContent = [
  {
    title: "Data Collection",
    description: `We gather relevant data from diverse sources, ensuring a comprehensive dataset for thorough analysis and decision-making.`,
  },
  {
    title: "Data Cleaning",
    description: `We process and clean your data to eliminate inaccuracies and inconsistencies, ensuring accuracy and reliability for effective analysis.`,
  },
  {
    title: "Data Analysis",
    description: `We apply advanced statistical and analytical techniques to interpret your data, uncover trends, and provide actionable insights to drive informed decisions.`,
  },
  {
    title: "Data Visualization",
    description: `We create clear and impactful visualizations, including charts, graphs, and dashboards, to simplify complex information and communicate insights effectively.`,
  },
  {
    title: "Reporting",
    description: `We generate detailed reports that summarize analysis and insights, tailored to meet the needs of stakeholders and support strategic decision-making.`,
  },
  {
    title: "Continuous Improvement",
    description: `We continuously monitor data trends and refine analysis methods to enhance accuracy, efficiency, and overall effectiveness of data-driven strategies.`,
  },
];
const heading = (
  <div className="web-dev-heading-title">
    Our
    <span style={{ color: "#05a4ec" }}> Data Analyst </span> Service Offerings
  </div>
);
const text = `The Rapid Hire combines technology and data sciences to provide actionable insights, using machine learning and advanced analytics to address business challenges and maximize value.`;

const OurWorkDataAnalyst = () => {
  return (
    <>
      <div>
        <Common
          banner={DataAnalystBanner}
          name={"Data Analyst"}
          description={
            "Develop a data-driven approach with intelligent insights to guide your digital future."
          }
        />

        <ServiceOffer heading={heading} text={text} cardContent={cardContent} />
      </div>
    </>
  );
};

export default OurWorkDataAnalyst;
