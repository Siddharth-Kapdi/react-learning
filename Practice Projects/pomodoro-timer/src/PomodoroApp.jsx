import { useEffect, useState } from 'react'
import Time from './Time'

const WORK_TIME = 10
const BREAK_TIME = 5

const PomodoroApp = () => {
  const [session, setSession] = useState({ mode: 'work', timeLeft: WORK_TIME })
  const [isRunning, setIsRunning] = useState(false)

  // time formatter
  const format = (totalSec) => {
    const min = Math.floor(totalSec / 60)
    const sec = totalSec % 60
    return `${min}:${sec < 10 ? '0' : ''}${sec}`
  }

  useEffect(() => {
    let intervalId

    if (isRunning) {
      intervalId = setInterval(() => {
        setSession((prev) => {
          if (prev.timeLeft === 0) {
            const nextMode = prev.mode === 'work' ? 'break' : 'work'
            return { mode: nextMode, timeLeft: nextMode === 'work' ? WORK_TIME : BREAK_TIME }
          }
          return { ...prev, timeLeft: prev.timeLeft - 1 }
        })
      }, 1000)
    }
    return () => clearInterval(intervalId)
  }, [isRunning])

  return (
    <div className="main-container">
      <Time
        secFormatter={format}
        session={session}
        setSession={setSession}
        setIsRunning={setIsRunning}
        workTime={WORK_TIME}
        breakTime={BREAK_TIME}
      />
    </div>
  )
}

export default PomodoroApp
