import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

function Expertteam() {
  const responsive = {
    0: { items: 2 },
    568: { items: 3 },
    1024: { items: 4 },
  };

  const items1 = [
    <div className="itemteam" data-value="1">
      <div className="team-item-wrap">
        <div className="team-wrap">
          <div className="image-inner">
            <img src="images/versha.jpeg" alt="Varsha" />
          </div>
        </div>
        <div className="team-content text-center">
          <h4 className="person-name">Varsha Rathore</h4>
          <span className="designation">DIRECTOR</span>
        </div>
      </div>
    </div>,
    <div className="itemteam" data-value="1">
      <div className="team-item-wrap">
        <div className="team-wrap">
          <div className="image-inner">
            <img src="images/Umesh.jpg" alt="Umesh" />
          </div>
        </div>
        <div className="team-content text-center">
          <h4 className="person-name">Umesh Rathore</h4>
          <span className="designation">Customer Relationship Manager</span>
        </div>
      </div>
    </div>,
    <div className="itemteam" data-value="2">
      <div className="team-item-wrap">
        <div className="team-wrap">
          <div className="image-inner">
            <img src="images/team2.webp" alt="Nitin_Vishvakarma" />
          </div>
        </div>
        <div className="team-content text-center">
          <h4 className="person-name">Nitin Vishvakarma</h4>
          <span className="designation">DELIVERY MANAGER</span>
        </div>
      </div>
    </div>,
    <div className="itemteam" data-value="3">
      <div className="team-item-wrap">
        <div className="team-wrap">
          <div className="image-inner">
            <img src="images/team3.webp" alt="Vikas Choudhary" />
          </div>
        </div>
        <div className="team-content text-center">
          <h4 className="person-name">Vikas Choudhary</h4>
          <span className="designation">TECHNOLOGY LEAD</span>
        </div>
      </div>
    </div>,
    <div className="itemteam" data-value="4">
      <div className="team-item-wrap">
        <div className="team-wrap">
          <div className="image-inner">
            <img src="images/shubham.jpeg" alt="Shubham Shrivastava" />
          </div>
        </div>
        <div className="team-content text-center">
          <h4 className="person-name">Shubham Shrivastava</h4>
          <span className="designation">AVP-SALE'S</span>
        </div>
      </div>
    </div>,
    <div className="itemteam" data-value="5">
      <div className="team-item-wrap">
        <div className="team-wrap">
          <div className="image-inner">
            <img src="images/raghav.jpg" alt="raghav dubey" />
          </div>
        </div>
        <div className="team-content text-center">
          <h4 className="person-name">Raghav Dubey</h4>
          <span className="designation">TECHNOLOGY LEAD</span>
        </div>
      </div>
    </div>,
    <div className="itemteam" data-value="6">
      <div className="team-item-wrap">
        <div className="team-wrap">
          <div className="image-inner">
            <img src="images/dakshina2.jpeg" alt="Dakshina" />
          </div>
        </div>
        <div className="team-content text-center">
          <h4 className="person-name">Dakshina Trivedi</h4>
          <span className="designation">HR EXECUTIVE</span>
        </div>
      </div>
    </div>,
    <div className="itemteam" data-value="7">
      <div className="team-item-wrap">
        <div className="team-wrap">
          <div className="image-inner">
            <img src="images/team8.webp" alt="Navin Kukreja" />
          </div>
        </div>
        <div className="team-content text-center">
          <h4 className="person-name">Navin Kukreja</h4>
          <span className="designation">SR. SOFTWARE DEVELOPER</span>
        </div>
      </div>
    </div>,
    <div className="itemteam" data-value="8">
      <div className="team-item-wrap">
        <div className="team-wrap">
          <div className="image-inner">
            <img src="images/abhishek.jpg" alt="Abhishek" />
          </div>
        </div>
        <div className="team-content text-center">
          <h4 className="person-name">Abhishek Dubey</h4>
          <span className="designation">SR. SOFTWARE DEVELOPER</span>
        </div>
      </div>
    </div>,
    <div className="itemteam" data-value="9">
      <div className="team-item-wrap">
        <div className="team-wrap">
          <div className="image-inner">
            <img src="images/himanshu2.jpeg" alt="Himanshu" />
          </div>
        </div>
        <div className="team-content text-center">
          <h4 className="person-name">Himanshu Rathore</h4>
          <span className="designation">QA LEAD</span>
        </div>
      </div>
    </div>,
  ];

  return (
    <div>
      <div className="rs-team style4 bg17 pt-95 pb-25 ">
        <div className="container">
          <div className="sec-title3 text-center ">
            <span className="sub-title">EXPERT TEAM</span>
            <h2 className="title ">
              The way a team plays as a whole determines its success. You may
              have the greatest bunch of individual stars in the world.
            </h2>
            <div className="heading-border-line"></div>
          </div>
          <br />
          <br />

          <AliceCarousel
            autoPlay
            autoPlayStrategy="none"
            autoPlayInterval={3000}
            animationDuration={3000}
            animationType="fadeout"
            mouseTracking
            infinite
            items={items1}
            responsive={responsive}
            controlsStrategy="alternate"
          />
        </div>
        <div className="container">
          <div className="sec-title3 text-center ">
            <span className="sub-title">Certifications</span>

            <div className="heading-border-line"></div>
          </div>
          <div className="row certifite text-center">
            <div className="col-xs-12 col-md-4">
              <img src="images/rqc.webp" alt="rqc" />
            </div>
            <div className="col-xs-12 col-md-4">
              <img src="images/ukasl.webp" alt="ukas" />
            </div>
            <div className="col-xs-12 col-md-4">
              <img src="images/cmmi.webp" alt="cmmi" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expertteam;
