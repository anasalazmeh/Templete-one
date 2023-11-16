import React from "react";
import "./Articles.css";
import BottonHover from "../BottonHover/BottonHover";
import CardArticles from "./CardArticles/CardArticles";
import { dataArticles } from "../../Data";
const Articles = () => {
  const images = dataArticles
  return (
    <div className="ARTICLES" id="ARTICLES">
      <BottonHover>ARTICLES</BottonHover>
      <div className="container">
        {images.map((item,index)=><CardArticles key={index} image={item}/>)}
      </div>
    </div>
  );
};

export default Articles;
