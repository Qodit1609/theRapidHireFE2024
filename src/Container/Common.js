import React from "react";

const Common = (props) => {
  const bannerStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("${props?.banner}")`,
  };
  return (
    // <div className="rs-breadcrumbs img1">
    <div className={`rs-breadcrumbs img1`} style={bannerStyle}>
      <div className="container-fluid">
        <div className="breadcrumbs-inner">
          <h2 className="page-title">
            {props.name}
            <span className="watermark">{props.background}</span>
          </h2>
          <span className="sub-text">{props.description}</span>
        </div>
      </div>
    </div>
  );
};

export default Common;
