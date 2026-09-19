import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="bg-gray-900 text-gray-300 min-h-screen flex items-center justify-center">
      <section>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full text-center">
          <div className="max-w-md mx-auto bg-gray-800 rounded border border-gray-700 p-8 shadow-md">
            <h1 className="text-4xl font-extrabold text-blue-500 mb-2">404</h1>
            <h2 className="text-lg font-semibold text-white mb-2">Page Not Found</h2>
            <p className="text-sm text-gray-400 mb-6">
              Sorry, the page you are looking for doesn't exist or has been moved.
            </p>
            <Link
              to="/"
              className="inline-block px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded hover:bg-blue-700 transition"
            >
              Go Back Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
