import React from "react";

import Common from "../../Container/Common";
import ServiceOffer from "../serviceOffers/serviceOffers";
import ItSolutionBanner from "../../img/itSolution.jpg";

const cardContent = [
  {
    title: "Healthcare Solutions",
    description: `We provide tailored IT solutions for the healthcare industry, enhancing patient care, streamlining operations, and ensuring regulatory compliance through innovative technologies.`,
  },
  {
    title: "Financial Services",
    description: `Our IT services for financial institutions boost security, streamline data management, and enhance automation, helping you stay ahead in a rapidly evolving financial landscape.`,
  },
  {
    title: "Retail Solutions",
    description: `Boost your retail business with our cutting-edge IT solutions, including e-commerce platforms, inventory management systems, and customer engagement tools.`,
  },
  {
    title: "Manufacturing Solutions",
    description: `Optimize your manufacturing processes with our IT services, including IoT integration, predictive maintenance, and supply chain solutions.`,
  },
  {
    title: "Education Solutions",
    description: `Transform the educational experience with our IT solutions, including digital classrooms, learning management systems, and secure data storage for institutions.`,
  },
  {
    title: "Logistics and Transportation",
    description: `Enhance efficiency and visibility in your logistics operations with our IT solutions, offering real-time tracking, route optimization, and fleet management systems.`,
  },
];
const heading = (
  <div className="web-dev-heading-title">
    Our
    <span style={{ color: "#05a4ec" }}> Industry Services</span> Offerings
  </div>
);
const text = `Discover our proficiency in crafting bespoke IT solutions tailored to your industry needs, blending strategy, operations, and advanced technologies for optimal business growth.`;

const OurWorkIndustrySolution = () => {
  return (
    <>
      <div>
        <Common
          banner={ItSolutionBanner}
          name={"Industry Solutions"}
          description={
            "Customized IT services addressing specific industry challenges with advanced technologies and strategic insights."
          }
        />

        <ServiceOffer heading={heading} text={text} cardContent={cardContent} />
      </div>
    </>
  );
};

export default OurWorkIndustrySolution;
