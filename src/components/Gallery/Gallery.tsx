import React from "react";
import './Gallery.css'
import BottonHover from "../BottonHover/BottonHover";
import CardImage from "./CardImage/CardImage";
import { dataGallery } from "../../Data";
const Gallery = () => {
  const images = dataGallery
  return (
    <div className="GALLERY" id="GALLERY">
      <BottonHover>GALLERY</BottonHover>
      <div className="sections-GALLERY">
        <div className="container">
            {images.map((item,index)=><CardImage image={item} key={index}/>)}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
