import React from "react";

import ServiceOffer from "../newComponent/serviceOffers/serviceOffers";
import Common from "../Container/Common";
import WebDevBanner from "../img/webdevImg.jpg";

const cardContent = [
  {
    title: "Custom Web App Development",
    description: `Amplify your website’s look with our user-friendly, customized, and responsive web development solutions. We specialize in 3rd party integration, plugin development, and tailored features, ensuring enhanced functionality and a seamless user experience.`,
  },
  {
    title: "CMS Website Development",
    description: `We offer unparalleled, highly engaging, and high-quality CMS website development services that perfectly align with your business needs. Additionally, we assist with seamless migration to any CMS platform, ensuring a smooth transition and enhanced functionality.`,
  },
  {
    title: "Responsive Website Design",
    description: `We specialize in designing responsive websites and landing pages that automatically adapt to any device and screen size. Our end products boost business traffic, leads, and sales through optimized user experiences and dynamic functionality.`,
  },
  {
    title: "E-Commerce Website Development",
    description: `Whether you need a B2B or B2C website, The Rapid Hire leverages the latest market trends and customer preferences to create a tailored e-commerce platform that drives sales, enhances user experience, and supports your business growth.`,
  },
  {
    title: "Single Page Website Development",
    description: `We assist clients in creating image-driven, mobile-friendly single-page websites with streamlined user experiences, fast load times, and a clutter-free design—resulting in increased lead generation and rapid conversions.`,
  },
  {
    title: "Progressive Web App Development",
    description: `At The Rapid Hire, our skilled developers create secure, responsive, and high-performing Progressive Web Apps (PWAs) that function seamlessly across multiple devices and are built within your budget, ensuring excellent performance and user experience.`,
  },
];
const heading = (
  <div className="web-dev-heading-title">
    Our
    <span style={{ color: "#05a4ec" }}> Web Development </span> Services
  </div>
);
const text = `Our agile web developers are equipped with modern tools &
            technologies that can help you build innovative and powerful custom
            websites to lead your business stand out.`;

const OurWork = () => {
  return (
    <>
      <div>
        <Common
          banner={WebDevBanner}
          name={"Web Solutions"}
          description={
            "Creating impactful, user-centered websites that help your business shine and adapt in the ever-changing digital environment."
          }
        />
        <ServiceOffer heading={heading} text={text} cardContent={cardContent} />
      </div>
    </>
  );
};

export default OurWork;
