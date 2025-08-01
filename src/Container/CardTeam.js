import React from "react";

const CardTeam = (props) => {
  return (
    <div className="our-team">
      <div className="pic">
        <img
          src={props.imgsrc}
          alt="cloudservices"
          style={{ width: "260px", height: "260px" }}
        />
      </div>
      <h3 className="title">{props.title}</h3>
      <span className="post">{props.description}</span>
    </div>
  );
};

export default CardTeam;
