import React, { ReactNode } from "react";
import './BottonHover.css'
interface Props{
  children:ReactNode,
}

const BottonHover = ({children}:Props) => {
  return (
    <div className="BottonHover">
      <div className="Text">{children}</div>
    </div>
  );
};

export default BottonHover;
