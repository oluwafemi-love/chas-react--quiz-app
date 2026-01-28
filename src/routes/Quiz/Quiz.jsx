import React from "react";
import { useParams } from "@tanstack/react-router";
import { quizData } from "../../data/QuizData/QuizData";
import { QuizRunner } from "./QuizRunner";

//Functionality
export function Quiz() {
  const { subjectId, topicId } = useParams({
    from: "/quiz/$subjectId/$topicId",
  });

  const topic = quizData.subjects
    .find((s) => s.id === subjectId)
    ?.topics.find((t) => t.id === topicId);

  if (!topic) {
    return <p>Topic not found</p>;
  }
  // const questions = topic?.questions ?? []

  return (
    <>
      <h2>{topic.name}</h2>
      <QuizRunner questions={topic.questions} />
    </>
  );
}

