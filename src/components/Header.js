import React, { useEffect, useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { OurWorkList } from "../Container/CardJSON";

import "../newComponent/portfolioModel/portfolioModel.css";
function Header() {
  const Navigate = useNavigate();

  const [token, setToken] = useState("");
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [showPortfolio, setShowPortfolio] = useState(false);
  const dropdownToggleRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (dropdownToggleRef.current) {
        if (window.innerWidth >= 992) {
          dropdownToggleRef.current.removeAttribute("data-bs-toggle");
        } else {
          dropdownToggleRef.current.setAttribute("data-bs-toggle", "dropdown");
        }
      }
      setIsMobile(window.innerWidth <= 992);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMouseEnter = () => {
    if (!isMobile) {
      setShowPortfolio(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setShowPortfolio(false);
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (isMobile) {
      setShowPortfolio(!showPortfolio);
    }
  };

  // const logoutBtn = () => {
  //   localStorage.clear();
  //   toast("Logout SuccessFull");
  //   setTimeout(() => {
  //     Navigate("/login");
  //     window.location.reload();
  //   }, 3000);
  // };
  // useEffect(() => {
  //   const val = JSON.parse(localStorage.getItem("Token"));
  //   setToken(val);
  // }, []);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top navtrh">
      <div className="container-fluid navihead">
        <a className="navbar-brand">
          <Link to="/">
            <img
              src={process.env.PUBLIC_URL + "/images/logo.png"}
              alt="therapidhire"
            />
          </Link>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                aria-expanded="false"
                onClick={() => setShowPortfolio(false)}
                ref={dropdownToggleRef}
              >
                We Are
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="/aboutus">
                    About Us
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/team">
                    Team
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/workwithus">
                    Career
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/letsconnect">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/faq">
                    FAQ
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <a
                className="nav-link"
                href="/services"
                onClick={() => setShowPortfolio(false)}
              >
                Services
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="/technology"
                onClick={() => setShowPortfolio(false)}
              >
                Technology
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link"
                href="/blog"
                onClick={() => setShowPortfolio(false)}
              >
                Blog
              </a>
            </li>
            <li
              className="nav-item"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={handleClick}
            >
              <div className="nav-item portfolio-div ">
                <a className="nav-link" style={{ color: "black" }} href="">
                  Our Work
                  <FontAwesomeIcon
                    className=""
                    style={{ fontSize: "11px", padding: "0px 0px 2px 4px" }}
                    icon={faCaretDown}
                  />
                </a>
              </div>
              {showPortfolio && (
                <>
                  <div className="portfolio-main-div border-bottom">
                    <div class="container mt-3">
                      <div class="row">
                        {OurWorkList?.map((list) => {
                          return (
                            <div
                              class="col-12 col-lg-4 mb-1 px-1 hover-effect"
                              onClick={() => setShowPortfolio(false)}
                            >
                              <Link to={`${list?.link}`} className="text-dark">
                                <div class="p-2">{list?.filed}</div>
                              </Link>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </>
              )}
            </li>

            {/* <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/letsconnect"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                TRH Fire Safety Solution

              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="/team">
                  Fire fighting sytem 
                  </a>
                </li>

                <li>
                  <a className="dropdown-item" href="/faq">
                  Fire Risk Assessment
                </a>
                </li>

                <li>
                  <a className="dropdown-item" href="/workwithus">
                  Testing of Fire fighting
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/workwithus">
                  Trainings


                  </a>
                </li>

              </ul>
            </li> */}

            {/* <li className="nav-item" onClick={() => setShowPortfolio(false)}>
              <a
                className="nav-link rounded-pill mt-lg-0 mt-2 mb-lg-0 mb-2 d-inline-block text-light px-lg-2 px-3"
                href="/fire"
                style={{
                  backgroundColor: "#FF4500 ",
                }}
              >
                TRH Fire Safety Solution
              </a>
            </li> */}

            {/* <li className="mt-2">
              <a
                href="/fire"
                className="enquirebtn me-3"
                style={{ backgroundColor: "#FF4500" }}
              >
                TRH Fire Safety Solution
              </a>
            </li> */}
            {/* <li className='mt-2'>
              <a href='/letsconnect' className='enquirebtn'>
                Let's Connect
              </a>
            </li> */}

            {/* <li className="mt-2 ml-2">
              {token ? (
                <button className="loginbtn" onClick={logoutBtn}>
                  <span>
                    <i className="fa fa-user" />
                  </span>
                  Logout
                </button>
              ) : (
                <a href="/login" className="loginbtn">
                  <span>
                    <i className="fa fa-user" />
                  </span>
                  Login
                </a>
              )}
            </li> */}
          </ul>
        </div>
      </div>
      <ToastContainer />
    </nav>
  );
}

export default Header;
