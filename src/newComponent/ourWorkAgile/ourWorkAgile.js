import React from "react";

import Common from "../../Container/Common";
import ServiceOffer from "../serviceOffers/serviceOffers";
import AgileBanner from "../../img/Agile.jpg";

const cardContent = [
  {
    title: "Agile Transformation",
    description: `Our agile transformation services guide enterprises through the process of adopting agile methodologies, ensuring a seamless transition that enhances collaboration, flexibility, and overall productivity`,
  },
  {
    title: "Scrum Framework Implementation",
    description: `We specialize in implementing the Scrum framework, enabling teams to work more efficiently, prioritize tasks effectively, and deliver high-quality products through iterative development cycles.`,
  },
  {
    title: "Agile Coaching and Training",
    description: `Our experienced agile coaches provide comprehensive training and support, empowering teams with the skills and knowledge needed to successfully implement and sustain agile practices.`,
  },
  {
    title: "Kanban System Integration",
    description: `We integrate Kanban systems to streamline workflow, improve task visualization, and enhance team efficiency by managing work in progress and optimizing processes.`,
  },
  {
    title: "DevOps and Agile Synergy",
    description: ` Combining DevOps with agile practices, we help organizations achieve continuous integration and delivery, fostering a culture of collaboration between development and operations for faster, more reliable releases.`,
  },
  {
    title: "Agile Project Management Tools",
    description: `We offer expertise in agile project management tools such as JIRA and Trello, enabling teams to track progress, manage tasks, and maintain transparency throughout the development process.`,
  },
];
const heading = (
  <div className="web-dev-heading-title">
    Our
    <span style={{ color: "#05a4ec" }}> Agile Development </span>
    Services
  </div>
);
const text = `We implement agile methodologies, enhance workflows, and boost team collaboration to deliver high-quality, scalable, and flexible solutions efficiently.`;

const OurWorkAgile = () => {
  return (
    <>
      <div>
        <Common
          banner={AgileBanner}
          name={"Agile Development"}
          description={
            "Harness the power of agile methodologies to accelerate project timelines, boost collaboration, and enhance flexibility for optimal business outcomes."
          }
        />

        <ServiceOffer heading={heading} text={text} cardContent={cardContent} />
      </div>
    </>
  );
};

export default OurWorkAgile;
