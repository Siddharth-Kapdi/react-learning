import { useContext } from 'react'
import { ThemeContext } from './ThemeProvider'

const GrandGrandChild = () => {
  const { isLight, setIsLight } = useContext(ThemeContext)
  return (
    <div className={`grand-grand-child ${isLight ? 'light' : ''}`}>
      <button onClick={() => setIsLight((prev) => !prev)}>{isLight ? 'Dark' : 'Light'}</button>
    </div>
  )
}

export default GrandGrandChild
