import React, { useEffect, useState } from "react";
import "./OurSkills.css";
import skills from "../../assets/skills.png";
import { motion } from "framer-motion";
import BottonHover from "../BottonHover/BottonHover";

const OurSkills = () => {
  const [value, setvalue] = useState(0);
  return (
    <div className="OUR-SKILLS" id="OUR-SKILLS">
      <BottonHover>OUR SKILLS</BottonHover>
      <div className="sections-OUR-SKILLS">
        <div className="container">
          <div className="col">
            <img src={skills} alt="" />
          </div>
          <div className="col">
            <div className="lasts">
              <div className="nav">
                <h2>ADOBE</h2>
                <div className="navber">
                  <motion.div
                    className="navbar-pro"
                    whileInView={{ width: "95%" }}
                  ></motion.div>
                  <span>95%</span>
                </div>
              </div>
              <div className="nav">
                <h2>HTML & CSS</h2>
                <div className="navber">
                  <motion.div
                    className="navbar-pro"
                    whileInView={{ width: "93%" }}
                  ></motion.div>
                  <span>93%</span>
                </div>
              </div>
              <div className="nav">
                <h2>JAVASCRIOPT</h2>
                <div className="navber">
                  <motion.div
                    className="navbar-pro"
                    whileInView={{ width: "85%" }}
                  ></motion.div>
                  <span>85%</span>
                </div>
              </div>
              <div className="nav">
                <h2>Python</h2>
                <div className="navber">
                  <motion.div
                    className="navbar-pro"
                    whileInView={{ width: "87%" }}
                  ></motion.div>
                  <span>87%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurSkills;
