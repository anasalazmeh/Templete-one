import React from "react";
import './BoxSelect.css'
interface Props {
  address: string;
  date: string;
  active: boolean;
  click:()=>void
}

const BoxSelect = ({ address, date, active ,click }: Props) => {
  return (
    <div onClick={click} className={active ? "block active" : "block"}>
      {address}
      <p>{date}</p>
    </div>
  );
};

export default BoxSelect;
