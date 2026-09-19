import { RouterProvider } from 'react-router-dom'
import router from './app/router'
import AuthProvider from './context/AuthProvider'
import { Suspense } from 'react'
import Loading from './components/Loading'

function App() {
  return (
    <div className="min-h-screen bg-gray-400">
      <AuthProvider>
        <Suspense fallback={<Loading />}>
          <RouterProvider router={router} />
        </Suspense>
      </AuthProvider>
    </div>
  )
}

export default App
