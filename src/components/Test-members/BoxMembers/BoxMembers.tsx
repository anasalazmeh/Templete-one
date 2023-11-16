import React from "react";
import './BoxMembers.css'
interface Props{
  image:string
}
const BoxMembers = ({image}:Props) => {
  return (
    <div className="BoxMembers">
      <div className="image">
        <img src={image} alt="" />
      </div>
      <div className="block">
        <div className="icons">
          <a href="">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="">
            <i className="fab fa-youtube"></i>
          </a>
        </div>
        <div className="text">
          <h2>Name</h2>
          <p>Simple Shopt Description</p>
        </div>
      </div>
    </div>
  );
};

export default BoxMembers;
