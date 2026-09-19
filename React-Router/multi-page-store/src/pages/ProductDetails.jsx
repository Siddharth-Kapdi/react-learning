import { useLoaderData } from 'react-router-dom'
// import { useParams} from 'react-router-dom'
import NotFound from '../pages/NotFound'

export default function ProductDetails() {
  // const { id } = useParams()
  const product = useLoaderData()
  console.log(product)

  if (!product) {
    return <NotFound />
  }

  const { title, price, images } = product

  return (
    <div className="bg-gray-900 text-gray-300 min-h-[calc(100vh-5rem)] py-12">
      <section>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="bg-gray-800 rounded border border-gray-700 overflow-hidden">
              <img src={images[0]} alt={title} className="w-full h-96 object-cover" />
            </div>

            <div className="flex flex-col justify-center">
              <h1 className="text-3xl font-bold text-white mb-2">{title}</h1>
              <p className="text-2xl font-bold text-blue-500 mb-4">${price.toFixed(2)}</p>

              <p className="text-sm text-gray-400 mb-6 leading-relaxed">
                Experience crystal-clear sound quality and all-day comfort with our premium wireless
                headphones. Featuring active noise cancellation and a long-lasting battery life for
                your daily commute or workouts.
              </p>

              <div className="space-y-4">
                <button
                  type="button"
                  className="w-full sm:w-auto px-6 py-3 bg-blue-600 text-white text-sm font-medium rounded hover:bg-blue-700 transition"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
