import { useState } from 'react'
import './App.css'

function App() {
  const [isLight, setIsLight] = useState(false)

  return (
    <div className="container">
      <div className={`theme-container ${isLight ? 'light' : ''}`}>
        <h1>Click the button to change theme!!</h1>
        <button onClick={() => setIsLight((prev) => !prev)}>{isLight ? 'Dark' : 'Light'}</button>
      </div>
    </div>
  )
}

export default App
