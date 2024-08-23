import React from "react";

import Common from "../../Container/Common";
import ServiceOffer from "../serviceOffers/serviceOffers";
import DevOpsBanner from "../../img/devops.jpg";

const cardContent = [
  {
    title: "Transformation Services",
    description: `We evaluate and enhance your DevOps practices, tools, and architecture, including pilot framework construction and cost optimization, to streamline and mature your DevOps processes.`,
  },
  {
    title: "Infrastructure Automation Services",
    description: `We provide comprehensive infrastructure automation solutions, including Infra-as-Code, cloud-native automation, configuration management, and GitOps, to ensure efficient and scalable infrastructure management.`,
  },
  {
    title: "Application Management Automation",
    description: `We automate version control, CI/CD pipelines, continuous testing, and security integration, along with project and release management, to streamline application development and deployment processes.`,
  },
  {
    title: "Observability",
    description: `Our services include infrastructure and application performance analysis, and development of KPIs and dashboards, ensuring comprehensive observability and actionable insights into your DevOps processes.`,
  },
  {
    title: "Data Platform Automation Services (DataOps)",
    description: `We offer data platform automation, cloud-native/agnostic DataOps solutions, and data governance and security automation, enhancing data testing, monitoring, and reporting efficiency.`,
  },
  {
    title: "ML Platform Automation Services (MLOps)",
    description: `We automate ML platform management, model lifecycle, security, and governance, providing robust solutions for ML model monitoring and maintaining integrity and compliance.`,
  },
];
const heading = (
  <div className="web-dev-heading-title">
    Experience a Personalized Approach to
    <span style={{ color: "#05a4ec" }}> DevXOps </span>
  </div>
);
const text = `Streamline development and operations with integrated practices for faster delivery, improved collaboration, and scalable solutions.`;

const OurWorkDevOps = () => {
  return (
    <>
      <div>
        <Common
          banner={DevOpsBanner}
          name={"DevOps"}
          description={
            "Leverage the power of DevOps practices to streamline development processes, enhance collaboration, and accelerate delivery, ensuring efficient and scalable solutions for optimal business performance."
          }
        />

        <ServiceOffer heading={heading} text={text} cardContent={cardContent} />
      </div>
    </>
  );
};

export default OurWorkDevOps;
