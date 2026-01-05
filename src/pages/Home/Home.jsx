import React from "react";
import { useState } from "react";
import Avatar from "../../components/Avatar/Avatar";
import { Navigattion } from "../../components/Navigation/Navigattion";
import { Subjects } from "../../components/Subjects/Subjects";
import { Topics } from "../../components/Topics/Topics";
import "./Home.css"

const Home = () => {
  return (
    <>
      <div className="homeWrapper">
        <div className="flex items-center justify-between">
          <Avatar username="Raspberry" />
          <Navigattion />
        </div>

        <p className="font-semibold text-base leading-6 text-black my-[10px] w-[calc(70%)] ml-[10px] mb-[40px]">
          Hey Raspberry, what subject do you want to improve today?
        </p>

        <Subjects />
        <br />
        <Topics />
      </div>
    </>
  );
};

export { Home };
