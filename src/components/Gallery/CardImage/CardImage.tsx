import React from "react";
import './CardImage.css'
interface Props {
  image: string;
}
const CardImage = ({ image }: Props) => {
  return (
    <div className="CardImage">
      <img src={image} alt="" />
      <div className="border"></div>
    </div>
  );
};

export default CardImage;
