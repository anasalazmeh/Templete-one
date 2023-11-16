import React from 'react'
import gallery1 from "../../assets/gallery-01.png";
import gallery2 from "../../assets/gallery-02.png";
import gallery3 from "../../assets/gallery-03.jpg";
import gallery4 from "../../assets/gallery-04.png";
import gallery5 from "../../assets/gallery-05.jpg";
import gallery6 from "../../assets/gallery-06.png";
import './Footer.css'
const Footer = () => {
  return (
    <div className="footer">
    <div className="box-container">
        <div className="container">
            <div className="col col-logo">
                <h1>Alazmeh</h1>
                <div className="icons">
                    <a href=""><i className="fab fa-facebook-f"></i></a>
                    <a href=""><i className="fab fa-twitter"></i></a>
                    <a href=""><i className="fab fa-youtube"></i></a>
                </div>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus nulla rem, dignissimos iste aspernatur</p>
            </div>
            <div className="col col-link">
                <h3><span><i className="fas fa-angle-double-down "></i></span> Important Link 1</h3>
                <h3><span><i className="fas fa-angle-double-down "></i></span> Important Link 2</h3>
                <h3><span><i className="fas fa-angle-double-down "></i></span> Important Link 3</h3>
                <h3><span><i className="fas fa-angle-double-down "></i></span> Important Link 4</h3>
                <h3><span><i className="fas fa-angle-double-down "></i></span> Important Link 5</h3>
            </div>
            <div className="col col-icons">
                <div className="block">
                    <i className="fas fa-map-marker-alt fa-fw"></i>
                    <h3>Syria, Damascus, Mazzeh, villas attached to a building 108</h3>
                </div>
                <div className="block">
                    <i className="far fa-clock fa-fw"></i>
                    <h3>Business Hours: From 10:00 To 18:00</h3>
                </div>
                <div className="block">
                    <i className="fas fa-phone-volume fa-fw"></i>
                    <h3>+963936661257 <br/> +963982035180</h3>
                </div>
            </div>
            <div className="col col-image">
                <div className="img"><img src={gallery1} alt=""/></div>
                <div className="img"><img src={gallery2} alt=""/></div>
                <div className="img"><img src={gallery3} alt=""/></div>
                <div className="img"><img src={gallery4} alt=""/></div>
                <div className="img"><img src={gallery5} alt=""/></div>
                <div className="img"><img src={gallery6} alt=""/></div>
            </div>
        </div>
    </div>
    <p className="copyright">Made With  3 By Alazmeh</p>
  </div>
  )
}

export default Footer