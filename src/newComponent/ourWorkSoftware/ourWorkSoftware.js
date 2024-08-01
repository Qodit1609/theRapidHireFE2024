import React from "react";

import Common from "../../Container/Common";
import SoftwareBanner from "../../img/sofwareDevImg.jpg";
import ServiceOffer from "../serviceOffers/serviceOffers";

const cardContent = [
  {
    title: "Legacy System Modernization",
    description: ` Our digital modernization experts analyze your business processes, choose the right technologies, and migrate apps to the cloud, transforming your IT ecosystem for enhanced efficiency and scalability.`,
  },
  {
    title: "Custom Software",
    description: `We provide tailored software solutions that automate processes, scale products, offer real-time analytics, and drive agile innovation, ensuring enhanced efficiency and business growth.`,
  },
  {
    title: "Enterprise Software",
    description: ` The Rapid Hire delivers innovative solutions for web, mobile, and desktop, encompassing enterprise mobility, custom solutions, and digital transformation to optimize and enhance your business operations.`,
  },
  {
    title: "Custom CRM Development",
    description: `We develop custom CRM software, including modules, migration services, mobile apps, databases, and cloud solutions tailored to various industries, enhancing your customer management and business efficiency.`,
  },
  {
    title: "Software Product Development",
    description: `We provide end-to-end services for software product development, covering requirement analysis, design, development, deployment, testing, and ongoing support to ensure a successful and efficient launch.`,
  },
  {
    title: "Data Analytics & Information",
    description: `Our expert data analysts offer comprehensive data management, modernization, and analysis services to help you gain actionable insights, optimize decision-making, and develop effective strategies for business growth.`,
  },
];
const heading = (
  <div className="web-dev-heading-title">
    Our
    <span style={{ color: "#05a4ec" }}> Custom Software Development </span>{" "}
    Service
  </div>
);
const text = ` At The Rapid Hire, we innovate to build customer-centric and
            design-oriented custom software that minimizes complexities and
            costs.`;

const OurWorkSoftware = () => {
  return (
    <>
      <div>
        <Common
          banner={SoftwareBanner}
          name={"Custom Software Development"}
          description={
            "Build tech-advanced, future-proof and scalable digital solutions with a top custom software development company."
          }
        />

        <ServiceOffer heading={heading} text={text} cardContent={cardContent} />
      </div>
    </>
  );
};

export default OurWorkSoftware;
