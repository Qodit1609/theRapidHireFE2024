import React from "react";

import ServiceOffer from "../serviceOffers/serviceOffers";
import Common from "../../Container/Common";
import UIBanner from "../../img/uiuxImg.jpg";

const cardContent = [
  {
    title: "UI/UX Web Design",
    description: `The Rapid Hire’s expert designers craft exceptional user experiences, shaping your brand identity by enhancing user interaction, engagement, and overall satisfaction.`,
  },
  {
    title: "UI/UX Mobile Design",
    description: ` The Rapid Hire designers create modern, innovative mobile designs for all screen sizes and platforms, enhancing business reach and user engagement.`,
  },
  {
    title: "Visual Design",
    description: `Our expert designers create visually appealing, scalable, and risk-free solutions and templates, perfectly aligned with evolving business requirements.`,
  },
  {
    title: "Interaction Design",
    description: `Hire our expert designers to create user-focused interfaces that establish an instant connection, blending essential principles with trendy, modern design elements.`,
  },
  {
    title: "Design Testing",
    description: `We develop well-researched, code-compatible designs across various platforms to meet client business demands and expand business opportunities.`,
  },
  {
    title: "UI & UX Consulting",
    description: `Our designers analyze business personas to craft innovative solutions that seamlessly integrate with Android and iOS, delivering smart and effective designs.`,
  },
];
const heading = (
  <div className="web-dev-heading-title">
    Our
    <span style={{ color: "#05a4ec" }}> UI/UX Design </span> Service Offerings
  </div>
);
const text = `Our UI/UX professionals and graphic designers build products from
            scratch as well as improve UI/UX and design of existing digital
            solutions or create new brand identity.`;

const OurWorkUI = () => {
  return (
    <>
      <div>
        <Common
          banner={UIBanner}
          name={"UI/UX Design"}
          description={
            "Boost user interaction and drive sales with our striking UI & UX Designing ability and consulting services."
          }
        />

        <ServiceOffer heading={heading} text={text} cardContent={cardContent} />
      </div>
    </>
  );
};

export default OurWorkUI;
