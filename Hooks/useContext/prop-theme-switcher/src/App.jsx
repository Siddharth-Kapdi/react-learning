import { useState } from 'react'
import './App.css'
import Parent from './Parent'

function App() {
  const [isLight, setIsLight] = useState(false)

  return (
    <div className={`container ${isLight ? 'light' : ''}`}>
      <h1>Theme Switcher</h1>
      <Parent isLight={isLight} setIsLight={setIsLight} />
    </div>
  )
}

export default App
