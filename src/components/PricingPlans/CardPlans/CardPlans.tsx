import React from "react";
import "./CardPlans.css";
interface Data {
  text: string;
  image: string;
  price: number;
  mostPopular: boolean;
}
interface Props {
  data: Data;
}
const CardPlans = ({ data }: Props) => {
  return (
    <div className={data.mostPopular ? "CardPlans active" : "CardPlans"}>
      <div className="most">Most Popular</div>
      <div className="icon">
        <h2>{data.text}</h2>
        <img src={data.image} alt="" />
        <h1>${data.price}</h1>
        <p>Per Month</p>
      </div>
      <div className="text">
        <div className="block">
          <i className="fa-solid fa-check"></i> 10GB HDD Space
        </div>
        <div className="block">
          <i className="fa-solid fa-check"></i> 5 Email Addresses
        </div>
        <div className="block">
          <i className="fa-solid fa-check"></i> 2 Subdomains
        </div>
        <div className="block">
          <i className="fa-solid fa-check"></i> 4 Databases
        </div>
        <div className="block">
          <i className="fa-solid fa-check"></i> Basic Support
        </div>
      </div>
      <button>Choose Plan</button>
    </div>
  );
};

export default CardPlans;
