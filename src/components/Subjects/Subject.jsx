import React from "react";
import compuImg from "../../assets/3dicons-computer-front-gradient.png";
import mathImg from "../../assets/3dicons-calculator-front-gradient.png";
import historyImg from "../../assets/3dicons-notebook-front-gradient.png";
import "./Subject.css";

export const Subject = ({ subjectName, onClick }) => {
  return (
    <li onClick={onClick} className="subject cursor-pointer  px-4 py-2 rounded-lg  hover:bg-gray-200">
      <div className="imageWrappa w-fit min-w-[110px]  px-2 py-5 bg-[hsl(264,100%,97%)] border-2 border-solid border-[hsla(262,52%,71%,0.5)] rounded-md flex flex-col justify-center items-center gap-2 ">
        <img src={compuImg} alt="" className="" />
      </div>
      <div className="subject-name ">{subjectName}</div>
    </li>
  );
};
