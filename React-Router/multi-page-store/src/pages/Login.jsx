import { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const { login } = useContext(AuthContext)
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    login()
    navigate('/profile')
  }
  return (
    <div>
      <div className="bg-gray-900 text-gray-300 min-h-screen flex items-center justify-center">
        <section>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
            <div className="max-w-md mx-auto bg-gray-800 rounded border border-gray-700 p-8 shadow-md">
              <h1 className="text-2xl font-bold text-blue-500 mb-2 text-center">Welcome Back</h1>
              <p className="text-sm text-gray-400 mb-6 text-center">
                Please enter your details to sign in to IndoShop.
              </p>

              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-3 py-2 bg-gray-900 text-white text-sm rounded border border-gray-700 focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-3 py-2 bg-gray-900 text-white text-sm rounded border border-gray-700 focus:outline-none focus:border-blue-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full mt-2 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded hover:bg-blue-700 transition"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Login
