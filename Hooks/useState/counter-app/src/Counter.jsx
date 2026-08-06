import { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)
  const [stepCount, setStepCount] = useState(0)
  const [stepHistory, setStepHistory] = useState([])
  const MIN_VALUE = 1
  const MAX_VALUE = 100

  const handleIncrement = () => {
    setCount((prev) => Math.min(prev + stepCount, MAX_VALUE))
    // if (stepHistory.includes(stepCount)) return
    setStepHistory([...stepHistory, stepCount])
  }

  const handleDecrement = () => {
    setCount((prev) => Math.max(prev - stepCount, MIN_VALUE))
  }

  const handleReset = () => {
    setCount(MIN_VALUE)
    setStepHistory([])
  }

  const handleStepCount = (e) => {
    setStepCount(Number(e.target.value) || 0)
  }

  return (
    <div className="counter-component">
      <h1>Smart Counter</h1>
      <p className="counter">{count}</p>
      <div className="step-change">
        <label htmlFor="step">Step: </label>
        <input
          type="number"
          id="step"
          name="step"
          min={MIN_VALUE}
          max={MAX_VALUE}
          value={stepCount}
          onChange={(e) => {
            handleStepCount(e)
          }}
        />
      </div>
      <div className="btns">
        <button onClick={handleIncrement} disabled={count + stepCount > 100}>
          Increment
        </button>
        <button onClick={handleDecrement} disabled={count - stepCount <= 0}>
          Decrement
        </button>
        <button onClick={handleReset}>Reset</button>
      </div>

      {stepHistory.length > 0 && (
        <>
          <h3>Inputs history:</h3>
          <ol className="step-history">
            {stepHistory.map((history, index) => (
              <li key={`${history}-${index}`}>{history}</li>
            ))}
          </ol>
        </>
      )}
    </div>
  )
}

export default Counter
