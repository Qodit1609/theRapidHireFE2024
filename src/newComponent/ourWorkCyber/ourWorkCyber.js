import React from "react";

import Common from "../../Container/Common";
import ServiceOffer from "../serviceOffers/serviceOffers";
import AgileBanner from "../../img/Agile.jpg";

const cardContent = [
  {
    title: "Managed Detection and Response (MDR)",
    description: `The Rapid Hire MDR Services provide 24×7 security monitoring, threat intelligence, behavior analysis, incident response, and log management to detect threats, disrupt cyber-attacks, and enhance resilience.`,
  },
  {
    title: "Vulnerability Management Services (VMS)",
    description: `Worried about high-count vulnerabilities in your system environment? Our adaptive framework reduces vulnerabilities across the enterprise, prevents breaches, maximizes your team’s productivity, and reduces costs.`,
  },
  {
    title: "Breach & Attack Simulation (BAS) Service",
    description: `We uncover unauthorized access paths attackers might use and use our simulation framework to discover attack vectors, improving your prevention strategies and overall security.`,
  },
  {
    title: "On-Demand vCISO Services",
    description: `Our cybersecurity specialists identify and articulate cyber risks that could disrupt your cash flow, providing essential insights board members need to understand and effectively mitigate these significant threats.`,
  },
  {
    title: "Third Party Risk Management",
    description: `Each phase of a third-party relationship involves potential risks. Our services assist you in navigating these obstacles, ensuring smooth, secure, and compliant operations for your business.`,
  },
  {
    title: "360° Cyber Posture Management",
    description: `Gain full visibility of changes impacting your business in real-time. Our solution uncovers risks and allows you to make informed decisions, ensuring comprehensive security and compliance.`,
  },
];
const heading = (
  <div className="web-dev-heading-title">
    Our
    <span style={{ color: "#05a4ec" }}> Cyber Security </span> Service Offerings
  </div>
);
const text = `We build and manage cybersecurity programs with strategies for identification, detection, protection, response, and recovery, ensuring strong security while you focus on growth.`;

const OurWorkCyber = () => {
  return (
    <>
      <div>
        <Common
          banner={AgileBanner}
          name={"Cyber Security"}
          description={
            "Make your business cyber resilient to manage risk and accelerate innovation with The Rapid Hire Cyber Security Services."
          }
        />

        <ServiceOffer heading={heading} text={text} cardContent={cardContent} />
      </div>
    </>
  );
};

export default OurWorkCyber;
