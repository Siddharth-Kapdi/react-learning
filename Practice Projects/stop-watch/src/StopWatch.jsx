import { useEffect } from 'react'
import { useState } from 'react'

export const StopWatch = () => {
  const [time, setTime] = useState(0)
  const [isRunning, setIsRunning] = useState(false)

  const formatTime = (centiseconds) => {
    const minutes = Math.floor(centiseconds / 6000)
    const seconds = Math.floor((centiseconds % 6000) / 100)
    const cs = centiseconds % 100

    const pad = (num) => String(num).padStart(2, '0')

    return `${pad(minutes)}:${pad(seconds)}:${pad(cs)}`
  }

  useEffect(() => {
    if (!isRunning) return
    const intervalId = setInterval(() => {
      setTime((prev) => prev + 1)
    }, 10)
    return () => {
      clearInterval(intervalId)
    }
  }, [isRunning])

  return (
    <div className="container">
      <h1 className="heading">Stop Watch</h1>

      <div className="stop-watch-container">
        <p className="stop-watch">{formatTime(time)}</p>
        <div className="btns">
          <button id="start-btn" onClick={() => setIsRunning(true)}>
            ▶
          </button>
          <button id="pause-btn" onClick={() => setIsRunning(false)}>
            ⏸
          </button>
          <button
            id="reset-btn"
            onClick={() => {
              setTime(0)
              setIsRunning(false)
            }}
          >
            ↻
          </button>
        </div>
      </div>
    </div>
  )
}
