const Time = ({ secFormatter, session, setSession, setIsRunning, workTime, breakTime }) => {
  return (
    <div className="time-container">
      <h2>{session.mode === 'work' ? 'Work Session' : 'Break'}</h2>
      <div className="time-section">
        <p className="timer">{secFormatter(session.timeLeft)}</p>
      </div>
      <div className="btn-section">
        <button onClick={() => setIsRunning(true)}>Start</button>
        <button onClick={() => setIsRunning(false)}>Pause</button>
        <button
          onClick={() => {
            session.mode === 'work'
              ? setSession((prev) => ({ ...prev, timeLeft: workTime }))
              : setSession((prev) => ({ ...prev, timeLeft: breakTime }))
            setIsRunning(false)
          }}
        >
          Reset
        </button>
      </div>
    </div>
  )
}

export default Time
