import React from "react";
import "./Landing.css";
import landing from "../../assets/landing-image.png";
const Landing = () => {
  return (
    <>
      <header>
      <div className="landing">
        <div className="landing-before"></div>
        <div className="container">
          <div className="col col-text">
            <div className="text">
              <h1>Welcome, To Alazmeh World</h1>
              <p>
                Here Iam gonna share everything about my life. Books Iam
                reading, Games Iam Playing, Stories and Events
              </p>
            </div>
          </div>
          <div className="col col-image">
            <img src={landing} alt="" />
          </div>
        </div>
      </div>
      </header>
      <div className="down">
        <div className="container">
          <a href="#ARTICLES">
            <i className="fas fa-angle-double-down "></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default Landing;
