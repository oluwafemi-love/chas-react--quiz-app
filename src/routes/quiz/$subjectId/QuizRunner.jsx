import { useState } from "react";
import Timeleft from "../../../components/Timeleft/Timeleft";
import Imagee from "../../../constants/Imagee/Imagee";


export function QuizRunner({ questions }) {
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState([]);

  const currentQuestion = questions[index];
  const totalQuestions = questions.length;
  const remaining = totalQuestions - index - 1;

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
        <p>
          Score: {answers.filter(a => a.isCorrect).length} / {totalQuestions}
        </p>
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
        {currentQuestion.options.map((opt) => (
          <li key={opt}>
            <button onClick={() => selectAnswer(opt)}>
              {opt}
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}
