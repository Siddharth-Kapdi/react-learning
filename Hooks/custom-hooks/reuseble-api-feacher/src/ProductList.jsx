import { useState } from 'react'
import useFetch from './components/useFetch'
import Product from './Product'

const ProductList = () => {
  const [limit, setLimit] = useState(5)
  const url = `https://dummyjson.com/products?limit=${limit}`
  const { data, loading, error } = useFetch(url)
  if (loading) return <p className="loading">Loading...</p>
  if (error) return <p className="error">Error: {error}</p>

  console.log(data)

  return (
    <div className="product-list">
      <h1>Products</h1>
      <br />
      <div className="list">
        {data.products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
      <br />
      <button onClick={() => setLimit((prev) => prev + 1)}>Add product</button>
    </div>
  )
}

export default ProductList
