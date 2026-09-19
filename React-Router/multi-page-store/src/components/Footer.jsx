import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <section>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h2 className="text-xl font-bold text-blue-500 mb-4">IndoShop</h2>
              <p className="text-sm text-gray-400">
                Your trusted destination for quality products and everyday shopping.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                Quick Links
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/" className="hover:text-blue-400">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/product" className="hover:text-blue-400">
                    Products
                  </Link>
                </li>
                <li>
                  <Link to="/profile" className="hover:text-blue-400">
                    Profile
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                Newsletter
              </h3>
              <p className="text-sm text-gray-400 mb-4">
                Subscribe to get updates on new arrivals and offers.
              </p>
              <form className="flex flex-col space-y-2">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="px-3 py-2 bg-gray-800 text-white text-sm rounded border border-gray-700 focus:outline-none focus:border-blue-500"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded hover:bg-blue-700 transition"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </footer>
  )
}

export default Footer
