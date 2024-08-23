import React from "react";

import Common from "../../Container/Common";
import ServiceOffer from "../serviceOffers/serviceOffers";
import ItServiceBanner from "../../img/itService.jpg";

const cardContent = [
  {
    title: "24/7 IT Support",
    description: `Our team provides round-the-clock support to ensure your IT infrastructure runs smoothly, minimizing downtime and maximizing productivity.`,
  },
  {
    title: "Proactive Maintenance",
    description: `We conduct regular system checks and updates to prevent potential issues before they affect your business operations, ensuring seamless functionality.`,
  },
  {
    title: "Security Management",
    description: `We implement robust security measures to protect your network, data, and systems from cyber threats, ensuring your business remains secure.`,
  },
  {
    title: "Cloud Services",
    description: `Our cloud solutions offer scalability, flexibility, and cost-efficiency, allowing your business to easily adapt to changing demands and technologies.`,
  },
  {
    title: "Data Backup and Recovery",
    description: `We provide comprehensive data backup and disaster recovery solutions to safeguard your critical business information and ensure quick recovery in case of data loss.`,
  },
  {
    title: "Network Management",
    description: `Our experts manage and optimize your network infrastructure, ensuring reliable connectivity and performance to support your business activities.`,
  },
];
const heading = (
  <div className="web-dev-heading-title">
    Our
    <span style={{ color: "#05a4ec" }}> Managed IT Service</span> Offerings
  </div>
);
const text = `We offer comprehensive managed IT services that cover all aspects of your IT infrastructure, from support and maintenance to security and cloud solutions, ensuring your business operates efficiently and securely.`;

const OurWorkItServices = () => {
  return (
    <>
      <div>
        <Common
          banner={ItServiceBanner}
          name={"Managed IT Services"}
          description={
            "Harness our managed IT services to ensure seamless operations, robust security, and scalable solutions, empowering your business to thrive in a digital landscape."
          }
        />

        <ServiceOffer heading={heading} text={text} cardContent={cardContent} />
      </div>
    </>
  );
};

export default OurWorkItServices;
