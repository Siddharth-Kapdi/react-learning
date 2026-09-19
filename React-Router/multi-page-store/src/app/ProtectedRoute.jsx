import { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { AuthContext } from '../context/AuthProvider'

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useContext(AuthContext)

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />
  }
  return children ? children : <Outlet />
}

export default ProtectedRoute
