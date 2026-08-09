const StartScreen = ({ startQuiz }) => {
  return (
    <div className="start-screen section">
      <h1>Quiz Time!</h1>
      <p>Test your knowledge with these fun questions</p>
      <button type="button" onClick={startQuiz}>
        Start Quiz
      </button>
    </div>
  )
}

export default StartScreen
