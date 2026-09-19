import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { AuthContext } from '../context/AuthProvider'

const ProfileNavBar = () => {
  const { isAuthenticated, logout } = useContext(AuthContext)

  return (
    <nav className="bg-gray-900 border-b border-gray-800 text-gray-300">
      <section>
        <div className="max-w-6xl mx-auto h-20 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div>
            <NavLink to="/" className="text-3xl font-bold text-blue-500">
              IndoShop
            </NavLink>
          </div>

          <div>
            <ul className="flex space-x-8 text-sm font-medium">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? `text-blue-500` : `text-white hover:to-blue-500`
                  }
                >
                  Main Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/profile"
                  end={'/profile'}
                  className={({ isActive }) =>
                    isActive ? `text-blue-500` : `text-white hover:to-blue-500`
                  }
                >
                  Profile
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/profile/wishlist"
                  className={({ isActive }) =>
                    isActive ? `text-blue-500` : `text-white hover:to-blue-500`
                  }
                >
                  Wish List
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/profile/checkout"
                  className={({ isActive }) =>
                    isActive ? `text-blue-500` : `text-white hover:to-blue-500`
                  }
                >
                  Check Out
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/login"
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                  onClick={() => {
                    if (isAuthenticated) {
                      logout()
                    }
                  }}
                >
                  {isAuthenticated ? 'Log out' : 'Log in'}
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </nav>
  )
}

export default ProfileNavBar
