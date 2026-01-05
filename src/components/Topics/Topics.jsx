import React from "react";
import "./Topics.css";
import algebraImg from "../../assets/3dicons-cup-dynamic-color.png";
import proporImg from "../../assets/3dicons-map-pin-dynamic-premium.png";
import arithiImg from "../../assets/3dicons-pencil-dynamic-premium.png";

export const Topics = () => {
  return (
    <>
      <ul className="ml-[15px]">
        <li className="topic  mb-[25px] ">
          <img src={algebraImg} alt="" className="" />
          <span>Algebra</span>
        </li>
        <li className="topic  mb-[25px] ">
          <img src={proporImg} alt="" className="" />
          <span>Proportional Thinking</span>
        </li>
        <li className="topic  mb-[25px] ">
          <img src={arithiImg} alt="" className="" />
          <span>Arithmetic Thinking</span>
        </li>
      </ul>
    </>
  );
};
