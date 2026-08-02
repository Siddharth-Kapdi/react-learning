import { useState } from 'react'
import './App.css'

function App() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="container">
      <div className="password-container">
        <input type={showPassword ? 'text' : 'password'} />
        <button onClick={() => setShowPassword((prev) => !prev)}>
          {showPassword ? 'Hide' : 'Show'} password
        </button>
      </div>
    </div>
  )
}

export default App
