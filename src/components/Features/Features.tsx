import React from "react";
import './Features.css'
import features1 from '../../assets/features-01.jpg'
import features2 from '../../assets/features-02.jpg'
import features3 from '../../assets/features-03.jpg'
import BottonHover from "../BottonHover/BottonHover";
const Features = () => {
  return (
    <div className="FEATURES" id="FEATURES">
      <BottonHover>FEATURES</BottonHover>
      <div className="sections-FEATURES">
        <div className="container">
          <div className="col col-owe">
            <div className="image"></div>
            <img src={features1} alt="" />
            <div className="text">
              <h1>
                Quality
                <hr />
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                harum hic veniam eligendi minima
              </p>
              <button>More</button>
            </div>
          </div>
          <div className="col col-two">
            <div className="image"> </div>
            <img src={features2} alt="" />
            <div className="text">
              <h1>
                Time
                <hr />
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                harum hic veniam eligendi minima
              </p>
              <button>More</button>
            </div>
          </div>
          <div className="col col-three">
            <div className="image"></div>
            <img src={features3} alt="" />

            <div className="text">
              <h1>
                Passion
                <hr />
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                harum hic veniam eligendi minima
              </p>
              <button>More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
