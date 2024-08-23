import React from "react";

import "./serviceOffers.css";

const WebDevelopment = (props) => {
  const { heading, text, cardContent } = props;
  // console.log("------------->", cardContent[0]);
  return (
    <>
      <div className="web-dev-heading-div">
        {heading}
        <div className="web-dev-heading-context pt-3">{text}</div>
      </div>

      {/* <div className="container pt-1" style={{ padding: "0px 25px" }}>
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
      </div> */}
      {/* <div className="container pt-1" style={{ padding: "0px 25px" }}>
        <div className="row ">
          <div
            className="col-12 col-md-6 mb-4 bg-primary"
            style={{ listStyleType: "disc", fontSize: "16px" }}
          >
            {cardContent?.map((item, index) => (
              <>
                <div className="col-6 fw-normal pe-sm-0 pe-md-2" key={index}>
                  <strong> {item.title}:</strong> {item.description}
                </div>
                <div className="col-6">hgyugyugyugygyugyugyugggfgyugtgf</div>
              </>
            ))}
          </div>
        </div>
      </div> */}

      <div className="container px-4">
        <div className="row">
          {/* <!-- Parent div with 12 columns --> */}
          {/* card One  */}
          <div className="col-12 mb-3 mb-lg-0">
            <div className="row">
              {/* <!-- First child div with equal width --> */}
              <div className="col-12 col-lg-6 text-section">
                <div className="row">
                  <div className="col-12 pt-3 rounded-1 shadow">
                    <p className="fw-normal pe-sm-0 pe-md-2">
                      <strong> {cardContent[0]?.title}:</strong>{" "}
                      {cardContent[0]?.description}
                    </p>
                  </div>
                </div>
              </div>
              {/* <!-- Second child div with equal width (blank) --> */}
              <div className="col-6 blank-section d-none d-lg-block ">
                {/* <!-- This section is intentionally left blank --> */}
              </div>
            </div>
          </div>
          {/* card Two  */}
          <div className="col-12 mb-3 mb-lg-0">
            <div className="row">
              <div className="col-6 blank-section d-none d-lg-block ">
                {/* Blank */}
              </div>

              <div className="col-12 col-lg-6 text-section">
                <div className="row">
                  <div className="col-12 pt-3 rounded-1 shadow">
                    <p className="fw-normal pe-sm-0 pe-md-2">
                      <strong> {cardContent[1]?.title}:</strong>{" "}
                      {cardContent[1]?.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* card Three  */}
          <div className="col-12 mb-3 mb-lg-0">
            <div className="row">
              {/* <!-- First child div with equal width --> */}
              <div className="col-12 col-lg-6 text-section">
                <div className="row">
                  <div className="col-12 pt-3 rounded-1 shadow">
                    <p className="fw-normal pe-sm-0 pe-md-2">
                      <strong> {cardContent[2]?.title}:</strong>{" "}
                      {cardContent[2]?.description}
                    </p>
                  </div>
                </div>
              </div>
              {/* <!-- Second child div with equal width (blank) --> */}
              <div className="col-6 blank-section d-none d-lg-block ">
                {/* <!-- This section is intentionally left blank --> */}
              </div>
            </div>
          </div>
          {/* card Four  */}
          <div className="col-12 mb-3 mb-lg-0">
            <div className="row">
              <div className="col-6 blank-section d-none d-lg-block ">
                {/* Blank */}
              </div>

              <div className="col-12 col-lg-6 text-section">
                <div className="row">
                  <div className="col-12 pt-3 rounded-1 shadow">
                    <p className="fw-normal pe-sm-0 pe-md-2">
                      <strong> {cardContent[3]?.title}:</strong>{" "}
                      {cardContent[3]?.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* card Five  */}
          <div className="col-12 mb-3 mb-lg-0">
            <div className="row">
              {/* <!-- First child div with equal width --> */}
              <div className="col-12 col-lg-6 text-section">
                <div className="row">
                  <div className="col-12 pt-3 rounded-1 shadow">
                    <p className="fw-normal pe-sm-0 pe-md-2">
                      <strong> {cardContent[4]?.title}:</strong>{" "}
                      {cardContent[4]?.description}
                    </p>
                  </div>
                </div>
              </div>
              {/* <!-- Second child div with equal width (blank) --> */}
              <div className="col-6 blank-section d-none d-lg-block ">
                {/* <!-- This section is intentionally left blank --> */}
              </div>
            </div>
          </div>
          {/* card Six  */}
          <div className="col-12 mb-4">
            <div className="row">
              <div className="col-6 blank-section d-none d-lg-block ">
                {/* Blank */}
              </div>

              <div className="col-12 col-lg-6 text-section">
                <div className="row ">
                  <div className="col-12 pt-3 rounded-1 shadow">
                    <p className="fw-normal pe-sm-0 pe-md-2">
                      <strong> {cardContent[5]?.title}:</strong>{" "}
                      {cardContent[5]?.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WebDevelopment;
