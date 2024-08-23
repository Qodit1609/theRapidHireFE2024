import React from "react";

import Common from "../../Container/Common";
import ServiceOffer from "../serviceOffers/serviceOffers";
import ItConsultingBanner from "../../img/itConsultation.jpg";

const cardContent = [
  {
    title: "IT Assessments",
    description: `We assess your business processes to understand your IT environment, enhancing security and efficiency through tailored evaluations.`,
  },
  {
    title: "IT Strategy & Planning",
    description: `We analyze your IT strategies and planning, providing guidance on investing in the right technologies to align with your business goals.`,
  },
  {
    title: "Digital Transformation Consulting",
    description: `We evaluate your business processes to enhance efficiency and guide you through effective digital transformation strategies.`,
  },
  {
    title: "Security Risk Assessments",
    description: `We identify security risks associated with your technology and recommend preventive measures to safeguard your business.`,
  },
  {
    title: "Cloud & Data Migration Services",
    description: `We assist in choosing the optimal data migration strategy and evaluating the pros and cons of various cloud services for your needs.`,
  },
  {
    title: "Custom Web & Mobile Application Development",
    description: `Our experienced tech team delivers custom web and mobile applications to help your business grow and stay competitive in the market.`,
  },
];
const heading = (
  <div className="web-dev-heading-title">
    Our
    <span style={{ color: "#05a4ec" }}> IT Consulting </span> Service Offerings
  </div>
);
const text = `Leverage a tailored suite of services to drive innovation, embrace new advancements, and achieve substantial growth for your business.`;

const OurWorkItConsulting = () => {
  return (
    <>
      <div>
        <Common
          banner={ItConsultingBanner}
          name={"IT Consulting"}
          description={
            "Utilize our extensive technology expertise in digital transformation to create effective short- and long-term strategies for your business."
          }
        />

        <ServiceOffer heading={heading} text={text} cardContent={cardContent} />
      </div>
    </>
  );
};

export default OurWorkItConsulting;
