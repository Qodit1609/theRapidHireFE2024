import React from "react";

import "./serviceOffers.css";

const WebDevelopment = (props) => {
  const { heading, text, cardContent } = props;
  return (
    <>
      <div className="web-dev-heading-div">
        {heading}
        <div className="web-dev-heading-context pt-3">{text}</div>
      </div>

      <div className="container pt-1" style={{ padding: "0px 25px" }}>
        <div className="row ">
          {cardContent?.map((item, index) => (
            <ul
              key={index}
              className="col-12 col-md-6 mb-4"
              style={{ listStyleType: "disc", fontSize: "16px" }}
            >
              <li className="fw-normal pe-sm-0 pe-md-2">
                <strong> {item.title}:</strong> {item.description}
              </li>
            </ul>
          ))}
        </div>
      </div>
    </>
  );
};

export default WebDevelopment;
