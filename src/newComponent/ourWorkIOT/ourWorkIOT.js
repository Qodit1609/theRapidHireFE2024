import React from "react";

import Common from "../../Container/Common";
import ServiceOffer from "../serviceOffers/serviceOffers";
import AgileBanner from "../../img/Agile.jpg";

const cardContent = [
  {
    title: "IoT Application Development",
    description: `We create customized IoT apps that tackle real-world issues and enhance business operations with personalized user experiences.`,
  },
  {
    title: "IoT Gateway Development",
    description: `Our solutions provide quick cloud connectivity for smart devices, helping businesses stay competitive and streamline operations.`,
  },
  {
    title: "Wearable App Development",
    description: `We develop comprehensive IoT software for seamless integration with microcomputers and sensors on various wearable devices.`,
  },
  {
    title: "Voice-Enabled Technology Solutions",
    description: `Our team designs voice-enabled solutions using advanced technologies like machine learning, AI, and neural networks.`,
  },
  {
    title: "IoT Consulting",
    description: `We craft tailored IoT strategies, helping you choose platforms, implement effective solutions, and enhance your products.`,
  },
  {
    title: "IoT Implementation & Support",
    description: `We focus on understanding your needs to offer maintenance services that ensure optimal performance and maximize ROI.`,
  },
];
const heading = (
  <div className="web-dev-heading-title">
    Our
    <span style={{ color: "#05a4ec" }}> Internet of Things </span> Service
    Offerings
  </div>
);
const text = `Harness the potential of a connected world with our complete IoT services. Transform your business and explore limitless opportunities.`;

const OurWorkIOT = () => {
  return (
    <>
      <div>
        <Common
          banner={AgileBanner}
          name={"Internet of Things"}
          description={
            "Embrace smart technology with our robust IoT solutions, designed to give you a competitive edge globally."
          }
        />

        <ServiceOffer heading={heading} text={text} cardContent={cardContent} />
      </div>
    </>
  );
};

export default OurWorkIOT;
