const ResultScreen = ({ score, questions, restartQuiz }) => {
  const getScoreMessage = (score) => {
    if (score === 5) {
      return 'Perfect! You got all 5 questions correct!'
    } else if (score >= 4) {
      return 'Excellent! You did a great job!'
    } else if (score >= 3) {
      return 'Good job! Keep practicing!'
    } else if (score >= 2) {
      return 'Not bad! You can improve with more practice.'
    } else if (score === 1) {
      return 'Keep trying! You need more practice.'
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
