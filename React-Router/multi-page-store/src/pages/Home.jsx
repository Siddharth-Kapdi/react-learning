import { Link } from 'react-router-dom'

const featuresData = [
  {
    id: 1,
    title: 'Lightning Fast',
    description:
      'Optimized for speed to deliver instant load times and seamless user experiences across all devices.',
  },
  {
    id: 2,
    title: 'Rock Solid Security',
    description:
      'Enterprise-grade encryption and advanced protocols keep your sensitive data completely safe 24/7.',
  },
  {
    id: 3,
    title: 'Smart Automation',
    description:
      'Intelligent workflows handle repetitive tasks automatically, freeing up your time for what matters most.',
  },
  {
    id: 4,
    title: 'Seamless Syncing',
    description:
      'Real-time synchronization ensures your team always stays on the exact same page without conflicts.',
  },
]

const Home = () => {
  return (
    <div>
      <section className="bg-blue-800 text-white ">
        <div className="max-w-6xl mx-auto h-96 px-4 sm:px-6 lg:px-8 py-8 ">
          <div className="h-full flex flex-col items-start justify-center gap-4">
            <h1 className="text-5xl font-bold">Welcome to IndoShop</h1>
            <p className="text-lg text-gray-200">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <Link
              to="/product"
              className="text-lg font-semibold py-2 px-4 bg-white text-blue-800 rounded-lg cursor-pointer"
            >
              Explore Products
            </Link>
          </div>
        </div>
      </section>

      <section>
        <div className="max-w-6xl mx-auto h-96 px-4 sm:px-6 lg:px-8 py-8 ">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Powerful Features</h2>
            <p className="mt-2 text-gray-600">
              Everything you need to build and scale your project effortlessly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuresData.map((feature) => (
              <div
                key={feature.id}
                className="p-6 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
