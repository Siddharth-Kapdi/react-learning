import { useState } from 'react'

const QuestionScreen = ({
  questions,
  currentQuestionCount,
  setCurrentQuestionCount,
  score,
  setScore,
  setStep,
}) => {
  const [selected, setSelected] = useState('')
  const { question, options, answer } = questions[currentQuestionCount]

  const handleOptionClick = (e) => {
    const userChoice = e.currentTarget.textContent
    setSelected(userChoice)

    setTimeout(() => {
      if (userChoice === answer) {
        setScore((prev) => prev + 1)
      }

      if (currentQuestionCount + 1 === questions.length) {
        setStep(3)
      } else {
        setCurrentQuestionCount((prev) => prev + 1)
      }
    }, 1000)
  }

  return (
    <div className="question-screen section">
      <div className="question-container">
        <h2 className="question">{question}</h2>
        <hr className="divider" />
        <div className="score-que-section">
          <p className="question-count">
            Question {currentQuestionCount + 1} of {questions.length}
          </p>
          <p className="score-count">Score: {score}</p>
        </div>
        <div className="options-list">
          <div className="options">
            {options.map((option, index) => {
              return (
                <p
                  className={`option ${selected === option ? (option === answer ? 'right' : 'wrong') : ''}`}
                  key={`${option}-${index}`}
                  onClick={handleOptionClick}
                >
                  {option}
                </p>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuestionScreen
