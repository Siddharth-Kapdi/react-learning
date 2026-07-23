import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
      <h1 className="counter" style={{ color: count > 0 ? 'green' : count < 0 ? 'red' : 'black' }}>
        {count}
      </h1>
      <button onClick={() => setCount((count) => count - 1)}>Decrease</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={() => setCount((count) => count + 1)}>Increase</button>
    </div>
  )
}

export default App
