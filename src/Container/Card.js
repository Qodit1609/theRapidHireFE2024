import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Card = (props) => {
  const { imgsrc, title, description, classStyle, type } = props;
  return (
    <div
      className={`service-wrap ${classStyle}`}
      style={{borderTop: "4px solid #05a4ec" }}
    >
      <div className="image-part">
        {/* <img src={props.imgsrc} alt={props.imgsrc} /> */}
        {type === "ourwork" ? (
          <FontAwesomeIcon
            style={{ fontSize: "3rem", color: "#05a4ec", marginLeft: "8px" }}
            icon={imgsrc}
          />
        ) : (
          <img src={imgsrc} alt={imgsrc} />
        )}
      </div>
      <div className="content-part">
        <h3 className="title">{title}</h3>
        <div className="desc">{description}</div>
      </div>
    </div>
  );
};

export default Card;
