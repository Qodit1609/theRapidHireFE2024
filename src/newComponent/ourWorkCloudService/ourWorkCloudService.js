import React from "react";

import Common from "../../Container/Common";
import ServiceOffer from "../serviceOffers/serviceOffers";
import CloudBanner from "../../img/cloudService.jpg";

const cardContent = [
  {
    title: "Cloud Implementation Strategy",
    description: `Partner with us for end-to-end cloud services, including advisory, strategy development, and management, ensuring a secure and optimized cloud environment tailored to your business needs.`,
  },
  {
    title: "Cloud Application Services",
    description: `We assist with migrating, managing, and monitoring applications on IaaS or PaaS platforms, enhancing flexibility, efficiency, and scalability for your enterprise while ensuring seamless performance and reliability.`,
  },
  {
    title: "Cloud Management Services",
    description: `Our services include trend forecasting, disaster recovery, and automation to safeguard your cloud assets and ensure seamless operations.`,
  },
  {
    title: "DevOps As A Service",
    description: `Boost performance, efficiency, and ROI with our DevOps expertise, delivering high-velocity applications and streamlining your development processes.`,
  },
  {
    title: "Cloud Migration Services",
    description: `Transition to the cloud smoothly and cost-effectively with our trusted migration services, minimizing disruption and leveraging top public cloud providers.`,
  },
  {
    title: "Cloud Infrastructure & Implementation Services",
    description: `Design and build a customized cloud infrastructure and data center that aligns perfectly with your business requirements and goals.`,
  },
];
const heading = (
  <div className="web-dev-heading-title">
    Our Featured
    <span style={{ color: "#05a4ec" }}> Cloud Solutions </span>
  </div>
);
const text = `Optimize your infrastructure and applications with tailored cloud strategies, ensuring flexibility, efficiency, and security for enhanced business performance.`;

const OurWorkCloudService = () => {
  return (
    <>
      <div>
        <Common
          banner={CloudBanner}
          name={"Cloud Service"}
          description={
            "Empower enterprise agility with our flexible, scalable, and cost-effective Cloud Computing Services, designed to simplify, streamline, and optimize your workflows for greater efficiency."
          }
        />

        <ServiceOffer heading={heading} text={text} cardContent={cardContent} />
      </div>
    </>
  );
};

export default OurWorkCloudService;
