import React from "react";
import './BoxTestimonials.css'
interface Props {
  countStars: number;
  image:string
}
const BoxTestimonials = ({ countStars,image }: Props) => {
  const stars = [1, 2, 3, 4, 5];
  return (
    <div className="BoxTestimonials">
      <div className="image">
        <img src={image} alt="" />
      </div>
      <h2>Mohamed Farag</h2>
      <p>Full Stack Developer</p>
      <div className="starts">
        {/* <i className="active fas fa-star"></i>
        <i className="active fas fa-star"></i>
        <i className="active fas fa-star"></i>
        <i className="active fas fa-star"></i>
        <i className="far fa-star"></i> */}
        {stars.map((item, index) =>
          index < countStars ? (
            <i className="active fas fa-star"></i>
          ) : (
            <i className="far fa-star"></i>
          )
        )}
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et
        reiciendis voluptatum, amet est natus quaerat ducimus
      </p>
    </div>
  );
};

export default BoxTestimonials;
