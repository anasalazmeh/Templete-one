import React from "react";
import './CardArticles.css'
interface Props{
  image:string
}
const CardArticles = ({image}:Props) => {
  return (
    <div className="CardArticle">
      <img src={image} alt="" />
      <h4>Test Title</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit
      </p>
      <span/>
      <div className="footerCard">
        <h4>Read More</h4>
        <i className="fas fa-long-arrow-alt-right"></i>
      </div>
    </div>
  );
};

export default CardArticles;
