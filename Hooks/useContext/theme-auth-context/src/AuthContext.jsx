import { createContext, useState } from 'react'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [myName, setMyName] = useState('')

  return <AuthContext.Provider value={{ myName, setMyName }}>{children}</AuthContext.Provider>
}

export default AuthProvider
