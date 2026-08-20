import './App.css'
import AuthProvider from './AuthContext'
import Card from './Card'
import Header from './Header'
import Profile from './Profile'
import ThemeProvider from './ThemeContext'

function App() {
  return (
    <div className="container">
      <ThemeProvider>
        <AuthProvider>
          <Header />
          <Card />
          <Profile />
        </AuthProvider>
      </ThemeProvider>
    </div>
  )
}

export default App
