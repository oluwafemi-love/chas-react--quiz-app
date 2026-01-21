import React from "react";
import "./Topic.css";
import { quizData } from "../../data/QuizData/QuizData";
import algebraImg from "../../assets/3dicons-cup-dynamic-color.png";
import proporImg from "../../assets/3dicons-map-pin-dynamic-premium.png";
import arithiImg from "../../assets/3dicons-pencil-dynamic-premium.png";

export const Topic = ({ name }) => {
  return (
    <li className="topic  mb-[25px] ">
      <img src={algebraImg} alt="" className="" />
      <span className="text-black">{name}</span>
    </li>
  );
};
