import React from "react";

import ServiceOffer from "../serviceOffers/serviceOffers";
import Common from "../../Container/Common";
import AiBanner from "../../img/AiImg.jpg";

const cardContent = [
  {
    title: "Generative AI",
    description: `From strategy and roadmap to design and build, The Rapid Hire’s next-gen generative AI services help enterprises reinvent every touchpoint, driving innovation and enhancing operational efficiency.`,
  },
  {
    title: "Natural Language Processing",
    description: `We employ cutting-edge technologies to develop NLP algorithms that extract valuable insights from vast amounts of data, enhancing understanding and decision-making.`,
  },
  {
    title: "Chatbot Development",
    description: `To harness AI intelligence, we develop interactive custom chatbots using advanced language recognition, sensing, voice integration, and other innovative technologies for enhanced user engagement.`,
  },
  {
    title: "IoT Analytics",
    description: `We design IoT sensors to capture, process, and analyze data, helping to minimize accidents, identify current trends, and enhance operational efficiency with actionable insights and predictive analytics.`,
  },
  {
    title: "Deep Learning",
    description: `Our expert developers build reliable and scalable solutions that enhance decision-making, forecasting, and operational performance through advanced deep learning techniques and predictive analytics.`,
  },
  {
    title: "Predictive Analysis",
    description: `Our developers use ML techniques and statistical algorithms to deliver precise forecasting, fraud detection, sentiment analysis, and more, enabling data-driven decision-making and strategic insights.`,
  },
];
const heading = (
  <div className="web-dev-heading-title">
    Our
    <span style={{ color: "#05a4ec" }}> AI/ML Development </span> Service
    Offerings
  </div>
);
const text = `Our tech experts use the latest tech suite to help you unlock the
            potential of outcome-driven AI/ML services. We put efforts to
            enhance your workflow performance.`;

const OurWorkAI = () => {
  return (
    <>
      <div>
        <Common
          banner={AiBanner}
          name={"AI & Machine Learning"}
          description={
            "Embrace the power of automation fused with intelligence to predict customer needs and make accurate decisions."
          }
        />

        <ServiceOffer heading={heading} text={text} cardContent={cardContent} />
      </div>
    </>
  );
};

export default OurWorkAI;
