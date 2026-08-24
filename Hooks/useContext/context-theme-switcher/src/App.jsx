import './App.css'
import Parent from './Parent'
import ThemeProvider from './ThemeProvider'

function App() {
  return (
    <div className="container">
      <ThemeProvider>
        <Parent />
      </ThemeProvider>
    </div>
  )
}

export default App
