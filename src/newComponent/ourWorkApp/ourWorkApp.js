import React from "react";

import ServiceOffer from "../serviceOffers/serviceOffers";
import Common from "../../Container/Common";
import AppBanner from "../../img/codingWebDev.jpg";

const cardContent = [
  {
    title: "iOS App Development",
    description: `Partner with our expert team for cutting-edge iOS app development services, featuring innovative app design, seamless integration, and holistic development for iPhone, iPad, and Apple Watch. Elevate your digital presence with our end-to-end solutions tailored to your needs.`,
  },
  {
    title: "Android App Development",
    description: `Engage with our expert team for innovative Android app development services. We provide high-performance, robust, and scalable solutions, leveraging Android SDK, JDK, JSP, SQLite, and more to create dynamic, feature-rich apps tailored to your specific needs.`,
  },
  {
    title: "Flutter App Development",
    description: `We build dynamic and interactive apps with native performance and adaptable UI designs, ensuring your digital concepts are fully realized across all mobile and web platforms with unmatched flexibility, performance, cutting-edge technology, and seamless integration.`,
  },
  {
    title: "React Native App Development",
    description: `Our React Native developers build feature-rich, cross-platform mobile apps that deliver a native user experience, optimized efficiency, and rapid performance for both Android and iOS platforms, ensuring seamless integration and high-quality results.`,
  },
  {
    title: "MVP Development",
    description: `Looking to achieve immediate value while minimizing development cost, time, and effort? Opt for MVP development! We collaborate with you to analyze your business goals and create a streamlined MVP that effectively meets your needs and accelerates your market entry.`,
  },
  {
    title: "Progressive Web App (PWA) Development",
    description: `Delivering a seamless user experience across all devices, our Progressive Web App development services boost your revenues and double your conversion rates faster than ever, while enhancing performance, engagement, and accessibility.`,
  },
];
const heading = (
  <div className="web-dev-heading-title">
    Our
    <span style={{ color: "#05a4ec" }}> Mobile App Development </span> Services
  </div>
);
const text = `Creating digital applications that unlock your future business
            growth.`;

const OurWorkApp = () => {
  return (
    <>
      <div>
        <Common
          banner={AppBanner}
          name={"Mobile App"}
          description={
            "Drive profitable growth with our innovation-led mobile app development services that meets business objectives with simplified user experience."
          }
        />

        <ServiceOffer heading={heading} text={text} cardContent={cardContent} />

        
      </div>
    </>
  );
};

export default OurWorkApp;
