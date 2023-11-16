import React from "react";
import './Navber.css'
import megamenu from '../../assets/megamenu.png'

const Navbar = () => {
  return (
    <div className="header">
      <div className="container">
        <a href="">
          <h2 className="logo">Alazmeh</h2>
        </a>
        <ul>
          <a href="#ARTICLES">
            <li>Articles</li>
          </a>
          <a href="#GALLERY">
            <li>Gallery</li>
          </a>
          <a href="#FEATURES">
            <li>Features</li>
          </a>
          <li className="muenn">Other Links</li>
          <div className="muen">
            <div className="col-image col">
              <img src={megamenu} alt="" />
            </div>
            <div className="col">
              <a href="#TESTIMONIALS">
                <div className="text">
                  <i className="fa-regular fa-comments"></i> Testimonials
                </div>
              </a>
              <a href="#TEAM-MEMBERS">
                <div className="text">
                  <i className="fa-regular fa-user"></i> Team members{" "}
                </div>
              </a>
              <a href="#SERVICES">
                <div className="text">
                  <i className="fa-regular fa-building"></i> Services{" "}
                </div>
              </a>
              <a href="#OUR-SKILLS">
                <div className="text">
                  {" "}
                  <i className="fa-regular fa-circle-check"></i> Our Skills{" "}
                </div>
              </a>
              <a href="#HOW-IT-WORKS">
                <div className="text">
                  <i className="fa-regular fa-clipboard"></i> How it work
                </div>
              </a>
            </div>
            <div className="col">
              <a href="#LATEST-EVENTS">
                <div className="text">
                  <i className="fa-solid fa-calendar-days"></i>Events
                </div>
              </a>
              <a href="#PRICING-PLANS">
                <div className="text">
                  <i className="fa-solid fa-server"></i> Pricing Plans
                </div>
              </a>
              <a href="#TOP-VIDEOS">
                <div className="text">
                  <i className="fa-regular fa-circle-play"></i> TOP VIDEOS
                </div>
              </a>
              <a href="#stats">
                <div className="text">
                  <i className="far fa-chart-bar "></i> Stats
                </div>
              </a>
              <a href="#discount">
                <div className="text">
                  <i className="fa-solid fa-percent"></i> Request A Discount
                </div>
              </a>
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
