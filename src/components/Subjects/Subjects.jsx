import React from "react";
import mathImg from "../../assets/3dicons-calculator-front-gradient.png";
import compuImg from "../../assets/3dicons-computer-front-gradient.png";
import historyImg from "../../assets/3dicons-notebook-front-gradient.png";
import "./Subjects.css";

export const Subjects = () => {
  return (
    <>
      <ul className="subjectsWrapper flex text-center gap-3 ml-[15px] mb-[40px]">
        <li className="subject fokus ">
          <div className="imageWrappa w-fit min-w-[110px]  px-2 py-5 bg-[hsl(264,100%,97%)] border-2 border-solid border-[hsla(262,52%,71%,0.5)] rounded-md flex flex-col justify-center items-center gap-2 ">
            <img src={mathImg} alt="" className="" />
          </div>
          <div className="subject-name ">Math</div>
        </li>
        <li className="subject ">
          <div className="imageWrappa w-fit min-w-[110px]  px-2 py-5 bg-[hsl(264,100%,97%)] border-2 border-solid border-[hsla(262,52%,71%,0.5)] rounded-md flex flex-col justify-center items-center gap-2 ">
            <img src={compuImg} alt="" className="" />
          </div>
          <div className="subject-name ">Computer Science</div>
        </li>
        <li className="subject ">
          <div className="imageWrappa w-fit min-w-[110px]  px-2 py-5 bg-[hsl(264,100%,97%)] border-2 border-solid border-[hsla(262,52%,71%,0.5)] rounded-md flex flex-col justify-center items-center gap-2 ">
            <img src={historyImg} alt="" className="" />
          </div>
          <div className="subject-name ">History</div>
        </li>
      </ul>
    </>
  );
};
