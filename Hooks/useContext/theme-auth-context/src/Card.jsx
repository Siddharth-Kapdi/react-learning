import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

const Card = () => {
  const { isDark, setIsDark } = useContext(ThemeContext)

  return (
    <div className="card-container">
      <div className={`card ${isDark ? 'dark' : ''}`}>
        <h2>My Card</h2>
        <p>This is {isDark ? 'dark' : 'light'} theme.</p>
        <button onClick={() => setIsDark(!isDark)}>{isDark ? 'Light' : 'Dark'}</button>
      </div>
    </div>
  )
}

export default Card
