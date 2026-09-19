import { Link, useLoaderData } from 'react-router-dom'
// import products from '../data/productData'

const Product = () => {
  const products = useLoaderData()
  console.log(products)

  return (
    <div>
      <div className="bg-gray-900 text-gray-300 min-h-screen">
        <section>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="mb-8">
              <h1 className="text-2xl font-bold text-blue-500">Our Products</h1>
              <p className="text-sm text-gray-400 mt-1">
                Explore the latest items available at IndoShop.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="bg-gray-800 rounded border border-gray-700 overflow-hidden flex flex-col"
                >
                  <img
                    src={product.images[0]}
                    alt={product.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4 flex flex-col flex-grow">
                    <h2 className="text-sm font-semibold text-white mb-1">{product.title}</h2>
                    <p className="text-blue-400 font-bold mb-4">${product.price}</p>
                    <Link
                      to={`/product/${product.id}`}
                      className="mt-auto w-full px-3 py-2 bg-blue-600 text-white text-sm font-medium rounded hover:bg-blue-700 transition text-center"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Product
