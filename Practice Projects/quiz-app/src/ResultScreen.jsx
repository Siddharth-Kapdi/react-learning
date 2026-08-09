const ResultScreen = ({ score, questions, restartQuiz }) => {
  return (
    <div className="result-screen section">
      <h2>Quiz Results</h2>
      <div className="result-section">
        <p className="score">
          Your score {score} out of {questions.length}
        </p>
        <p className="feedback">Keep it up champ, you can do it !!!</p>
      </div>
      <button type="button" onClick={restartQuiz}>
        Restart Quiz
      </button>
    </div>
  )
}

export default ResultScreen
