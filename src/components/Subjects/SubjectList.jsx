import React from "react";
import { quizData } from "../../data/QuizData/QuizData";
import { Subject } from "./Subject";

export default function SubjectList({ onSelectSubject }) {
  return (
    <>
      {quizData.subjects.map(({ id, name }) => (
        <Subject
          key={id}
          subjectName={name}
          onClick={() => {
            console.log("Clicked subject:", id);
            onSelectSubject(id);
          }}
        />
      ))}
    </>
  );
}
