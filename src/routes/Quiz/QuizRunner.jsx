// components/QuizRunner.tsx
import { useState } from "react"

export function QuizRunner({ questions }) {
  const [index, setIndex] = useState(0)
  const [answers, setAnswers] = useState([])

  const currentQuestion = questions[index]

  function selectAnswer(option) {
    const isCorrect = option === currentQuestion.correctAnswer

    setAnswers((prev) => [
      ...prev,
      {
        questionId: currentQuestion.id,
        selected: option,
        isCorrect,
      },
    ])

    setIndex(index + 1)
  }

  if (!currentQuestion) {
    return (
      <div>
        <h2>Quiz finished 🎉</h2>
        <p>Score: {answers.filter(a => a.isCorrect).length}</p>
      </div>
    )
  }

  return (
    <div>
      <h3>{currentQuestion.question}</h3>

      {currentQuestion.options.map((opt) => (
        <button key={opt} onClick={() => selectAnswer(opt)}>
          {opt}
        </button>
      ))}
    </div>
  )
}
