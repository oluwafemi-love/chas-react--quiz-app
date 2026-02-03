import { useState } from "react";
import Timeleft from "../../../components/Timeleft/Timeleft";
import Imagee from "../../../constants/Imagee/Imagee";
import "./QuizRunner.css";
import { useNavigate } from "@tanstack/react-router";



export function QuizRunner({ questions }) {
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState([]);

  let currentQuestion = questions[index];
  const totalQuestions = questions.length;
  const remaining = totalQuestions - index - 1;

  function resetQuiz() {
    setIndex(0);
    setAnswers([]);
  }

  const navigate = useNavigate();

  function selectAnswer(option) {
    setAnswers((prev) => [
      ...prev,
      {
        questionId: currentQuestion.id,
        selected: option,
        isCorrect: option === currentQuestion.correctAnswer,
      },
    ]);

    setIndex((i) => i + 1);
  }

  if (!currentQuestion) {
    return (
      <div>
        <h2>Quiz finished 🎉</h2>
        <h5>Welldone {"Raspberry!"}</h5>
        <p>
          Score: {answers.filter((a) => a.isCorrect).length} /{" "}
          {totalQuestions}
        </p>

        <div className="end-actions">
          <button className="restart-quiz" onClick={resetQuiz}>
            Restart this quiz
          </button>
          <br />
          <button
            className="view-other-quiz"
            onClick={() => navigate({ to: "/" })}
          >
            View Other Quiz
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="quiz-wrapper">
      <div className="question-heading">
        <div className="lhs">
          <span>{remaining} questions left</span>
          <h1>
            Question {index + 1} of {totalQuestions}
          </h1>
        </div>
        <Timeleft />
      </div>

      <Imagee />

      <p className="questions">{currentQuestion.prompt}</p>

      <ol className="answer-options">
        {currentQuestion.options.map((opt, index) => (
          <li key={opt}>
            <button onClick={() => selectAnswer(opt)}>
              <div className="option-contents-wrapper">
                <span className="indexNumber">{index + 1}</span>
                <span className="option">{opt}</span>
              </div>
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}
