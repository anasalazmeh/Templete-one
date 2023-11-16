import React from "react";
import "./TestMembers.css";
import BottonHover from "../BottonHover/BottonHover";
import BoxMembers from "./BoxMembers/BoxMembers";
import { dataTestMembers } from "../../Data";
const TestMembers = () => {
  const images = dataTestMembers
  return (
    <div className="TEST-MEMBERS" id="TEAM-MEMBERS">
      <BottonHover>TEST MEMBERS</BottonHover>

      <div className="sections-TEST-MEMBERS">
        <div className="container">
          {images.map((item)=><BoxMembers image={item}/>)}

        </div>
      </div>
    </div>
  );
};

export default TestMembers;
