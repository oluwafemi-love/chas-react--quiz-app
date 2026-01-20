import React from "react";
import { useState } from "react";
import Avatar from "../../components/Avatar/Avatar";
import { Navigattion } from "../../components/Navigation/Navigattion";
import SubjectList from "../../components/Subjects/SubjectList";
import TopicList from "../../components/Topics/TopicList";
import "./Home.css";

const Home = () => {
  const [selectedSubjectId, setSelectedSubjectId] = useState(null);
  console.log("selectedSubjectId", selectedSubjectId)
  return (
    <>
      <div className="homeWrapper">
        <div className="flex items-center justify-between mb-[40px]">
          <Avatar username="Raspberry" />
          <Navigattion />
        </div>

        <p className="font-semibold text-base leading-6 text-black my-[10px] w-[calc(70%)] ml-[10px] mb-[40px]">
          Hey Raspberry, what subject do you want to improve today?
        </p>

        <ul className="subjectsWrapper flex text-center gap-3 ml-[15px] mb-[40px]">
          <SubjectList onSelectSubject = {setSelectedSubjectId}/>
        </ul>

        <ul className="ml-[15px]">
          <TopicList selectedSubjectId = {selectedSubjectId}/>
        </ul>
      </div>
    </>
  );
};

export { Home };
