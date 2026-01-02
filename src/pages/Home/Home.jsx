import React from "react";
import { useState } from "react";
import Avatar from "../../components/Avatar/Avatar";
import { Navigattion } from "../../components/Navigation/Navigattion";
import { Subjects } from "../../components/Subjects/Subjects";
const Home = () => {
  return (
    <>
      <div className="wrapper mx-[27px] my-[60px]">
        <div>
          <Avatar username="Raspberry" />
          <Navigattion />
        </div>

        <p className="text-[font-family:'Archivo'] font-semibold text-base leading-6 text-black my-[10px]">
          Hey Raspberry, what subject do you want to improve today?
        </p>

        <Subjects />
        {/* <Topics /> */}
      </div>
    </>
  );
};

export { Home };
