import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'
import { AuthContext } from './AuthContext'

const Profile = () => {
  const { isDark } = useContext(ThemeContext)
  const { myName, setMyName } = useContext(AuthContext)
  return (
    <div className={`profile ${isDark ? 'dark' : ''}`}>
      {myName ? <p>Hey {myName}, what's up!</p> : <p>Please login !</p>}

      <button onClick={() => setMyName('test')}>Login</button>
    </div>
  )
}

export default Profile
