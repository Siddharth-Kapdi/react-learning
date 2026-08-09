const QuestionScreen = ({
  questions,
  currentQuestionCount,
  setCurrentQuestionCount,
  score,
  setScore,
  setStep,
}) => {
  const { question, options, answer } = questions[currentQuestionCount]

  const handleOptionClick = (e) => {
    const userChoice = e.target.textContent
    if (userChoice === answer) {
      setScore((prev) => prev + 1)
      setCurrentQuestionCount((prev) => prev + 1)

      if (currentQuestionCount + 1 === questions.length) {
        setStep(3)
      }
    } else {
      setCurrentQuestionCount((prev) => prev + 1)
    }
  }

  return (
    <div className="question-screen section">
      <h3 className="question">{question}</h3>
      <div className="score-que-section">
        <p className="question-count">
          Question {currentQuestionCount + 1} of {questions.length}
        </p>
        <p className="score-count">Score: {score}</p>
      </div>
      <div className="options-list">
        <ul className="options">
          {options.map((option, index) => {
            return (
              <li className="option" key={`${option}-${index}`} onClick={handleOptionClick}>
                {option}
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default QuestionScreen
