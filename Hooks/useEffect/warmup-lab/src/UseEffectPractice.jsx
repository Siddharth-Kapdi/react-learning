import { useState, useEffect } from 'react'

const UseEffectPractice = () => {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('')

  console.log('component rendering') // fires on EVERY render, always

  useEffect(() => {
    console.log('initial render')
  }, [])

  useEffect(() => {
    document.title = `count ${count}`
    console.log('effect ran (mount or count changed)')
  }, [count])

  return (
    <div className="child-container">
      <h1>useEffect Practice</h1>
      <div className="counter-container">
        <p className="count">{count}</p>
        <button className="count-btn" onClick={() => setCount(count + 1)}>
          Increment
        </button>
      </div>
      <div className="name-container">
        <p className="name">Name: {name}</p>
        <input
          type="text"
          name="name"
          id="name-input"
          placeholder="Enter your name..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
    </div>
  )
}

export default UseEffectPractice
