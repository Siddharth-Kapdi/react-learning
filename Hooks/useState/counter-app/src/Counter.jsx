import { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)
  const [stepCount, setStepCount] = useState(0)
  const MIN_VALUE = 1
  const MAX_VALUE = 100

  const handleIncrement = () => {
    setCount((prev) => prev + stepCount)
  }

  const handleDecrement = () => {
    setCount((prev) => prev - stepCount)
  }

  const handleReset = () => {
    setCount(0)
  }

  const handleStepCount = (e) => {
    setStepCount(Number(e.target.value) || 0)
  }

  return (
    <div className="counter-component">
      <h1>Smart Counter</h1>
      <p className="counter">{count}</p>
      <form className="step-change">
        <label htmlFor="step">Step: </label>
        <input
          id="step"
          name="step"
          min={MIN_VALUE}
          max={MAX_VALUE}
          value={stepCount}
          onChange={(e) => handleStepCount(e)}
        />
      </form>
      <div className="btns">
        <button onClick={handleIncrement} disabled={count >= 100 ? true : false}>
          Increment
        </button>
        <button onClick={handleDecrement} disabled={count <= 0 ? true : false}>
          Decrement
        </button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  )
}

export default Counter
