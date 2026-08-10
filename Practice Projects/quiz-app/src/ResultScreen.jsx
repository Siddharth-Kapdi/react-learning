const ResultScreen = ({ score, questions, restartQuiz }) => {
  const getScoreMessage = (score) => {
    const perc = (score / questions.length) * 100

    if (perc === 100) {
      return 'Perfect! You got all questions correct!'
    } else if (perc >= 80) {
      return 'Excellent! You did a great job!'
    } else if (perc >= 60) {
      return 'Good job! Keep practicing!'
    } else if (perc >= 40) {
      return 'Not bad! You can improve with more practice.'
    } else if (perc >= 20) {
      return 'Keep trying! You are getting there.'
    } else {
      return "Don't give up! Practice and try again."
    }
  }

  return (
    <div className="result-screen section">
      <h2>Quiz Results</h2>
      <div className="score-section">
        <p className="score">
          Your score {score} out of {questions.length}
        </p>
        <p className="feedback">{getScoreMessage(score)}</p>
      </div>
      <button type="button" onClick={restartQuiz}>
        Restart Quiz
      </button>
    </div>
  )
}

export default ResultScreen
