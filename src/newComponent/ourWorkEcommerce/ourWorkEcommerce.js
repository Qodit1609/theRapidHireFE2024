import React from "react";

import Common from "../../Container/Common";
import ServiceOffer from "../serviceOffers/serviceOffers";
import AgileBanner from "../../img/Agile.jpg";

const cardContent = [
  {
    title: "eCommerce Online Platform",
    description: `At TRH, we deliver scalable and seamless eCommerce solutions for B2B and B2C, utilizing the latest tech stacks and popular platforms to enhance functionality.`,
  },
  {
    title: "CMS Development",
    description: `We provide custom CMS solutions with comprehensive development, installation, and setup support, tailored to meet your specific business needs.`,
  },
  {
    title: "Third-Party Integration",
    description: `Our developers excel in integrating third-party APIs and modules, optimizing complex business operations for efficiency and accuracy.`,
  },
  {
    title: "eCommerce Enterprise Software",
    description: `We design and develop SEO-friendly enterprise portals that streamline business management with an intuitive user experience.`,
  },
  {
    title: "Multi-Vendor Marketplaces",
    description: `Our team builds reliable multi-vendor marketplaces, ensuring a smooth experience for both buyers and sellers with robust, user-friendly design.`,
  },
  {
    title: "Legacy Apps Re-engineering",
    description: `We modernize existing applications by integrating current technologies, rejuvenating outdated systems across various industries.`,
  },
  {
    title: "B2B/B2C/P2P/B2B2C Solutions",
    description: `We create secure, scalable platforms for B2B, B2C, P2P, and B2B2C businesses, facilitating smooth transactions and effective buyer-seller connections.`,
  },
  {
    title: "Headless CMS Development",
    description: `We develop headless CMS platforms with decoupled front and back-ends, enabling flexible integration and customization of your content management.`,
  },
];
const heading = (
  <div className="web-dev-heading-title">
    Our
    <span style={{ color: "#05a4ec" }}> eCommerce </span> Service Offerings
  </div>
);
const text = `We take a dedicated approach, integrating cutting-edge technologies with user-centric design to deliver an outstanding digital commerce experience for your business.`;

const OurWorkEcommerce = () => {
  return (
    <>
      <div>
        <Common
          banner={AgileBanner}
          name={"eCommerce"}
          description={
            "Setting new standards in revolutionizing the shopping experience with our tailored eCommerce software solutions."
          }
        />

        <ServiceOffer heading={heading} text={text} cardContent={cardContent} />
      </div>
    </>
  );
};

export default OurWorkEcommerce;
