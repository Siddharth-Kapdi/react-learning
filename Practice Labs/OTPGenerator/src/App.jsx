import { useEffect, useState } from 'react'
import './App.css'

function OTPGenerator() {
  const [seconds, setSeconds] = useState(5)
  const [otp, setOtp] = useState('')
  const [isRunning, setIsRunning] = useState(false)

  function generateOtp() {
    let otpp = ''
    for (let i = 0; i < 6; i++) {
      otpp += Math.floor(Math.random() * 10)
    }
    return setOtp(otpp)
  }

  function handleSec() {
    setSeconds(5)
    setIsRunning(true)
    generateOtp()
  }

  useEffect(() => {
    if (!isRunning || seconds <= 0) {
      return
    }

    const intervalId = setInterval(() => {
      setSeconds((sec) => sec - 1)
    }, 1000)

    return () => clearInterval(intervalId)
  }, [seconds, isRunning])

  return (
    <div className="container">
      <h1 id="otp-title">OTP Generator</h1>
      <h2 id="otp-display">{otp ? otp : `Click 'Generate OTP' to get a code`}</h2>
      {isRunning && (
        <p id="otp-timer" aria-live="polite">
          {isRunning && seconds > 0
            ? `Expire in : ${seconds} seconds`
            : `OTP expired. Click the button to generate a new OTP.`}
        </p>
      )}
      <button id="generate-otp-button" onClick={handleSec} disabled={isRunning && seconds > 0}>
        Generate OTP
      </button>
    </div>
  )
}
export default OTPGenerator
