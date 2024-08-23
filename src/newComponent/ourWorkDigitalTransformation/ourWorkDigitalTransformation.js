import React from "react";

import Common from "../../Container/Common";
import ServiceOffer from "../serviceOffers/serviceOffers";
import DigiTransBanner from "../../img/digitalTransformation.jpg";

const cardContent = [
  {
    title: "Strategic Vision Development",
    description: `Craft a clear, actionable digital transformation roadmap to align your business goals with technological advancements and market trends.`,
  },
  {
    title: "Technology Integration",
    description: `Seamlessly integrate cutting-edge technologies into your existing systems to enhance efficiency, productivity, and innovation across all operations.`,
  },
  {
    title: "Process Optimization",
    description: `Re-engineer and streamline business processes to improve performance, reduce costs, and accelerate time-to-market through advanced digital solutions.`,
  },
  {
    title: "Data-Driven Insights",
    description: `Leverage analytics and data management tools to gain actionable insights, drive informed decision-making, and unlock new growth opportunities.`,
  },
  {
    title: "Customer Experience Enhancement",
    description: `Utilize digital tools and strategies to elevate customer interactions, improve satisfaction, and foster deeper engagement with personalized experiences.`,
  },
  {
    title: "Change Management Support",
    description: `Guide your organization through the transition with tailored change management strategies to ensure smooth adoption of new technologies and processes.`,
  },
];
const heading = (
  <div className="web-dev-heading-title">
    Our
    <span style={{ color: "#05a4ec" }}> Industry Services</span> Offerings
  </div>
);
const text = `Transform your business with our IT services, including digital strategy development, technology integration, and process optimization to drive innovation and efficiency.`;

const OurWorkDigitalTransformation = () => {
  return (
    <>
      <div>
        <Common
          banner={DigiTransBanner}
          name={"Digital Transformation"}
          description={
            "These services help businesses navigate the complexities of digital transformation, driving efficiency, innovation, and competitive advantage."
          }
        />

        <ServiceOffer heading={heading} text={text} cardContent={cardContent} />
      </div>
    </>
  );
};

export default OurWorkDigitalTransformation;
