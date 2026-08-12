import ProductCard from './ProductCard'

const products = [
  {
    id: 1,
    name: 'Wireless Headphones',
    price: 2499,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e',
  },
  {
    id: 2,
    name: 'Smart Watch',
    price: 3999,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30',
  },
  {
    id: 3,
    name: 'Running Shoes',
    price: 2999,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff',
  },
  {
    id: 4,
    name: 'Classic Sunglasses',
    price: 1299,
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083',
  },
]

const ProductCardList = () => {
  return (
    <div className="product-list-section">
      {products.map((product) => {
        return <ProductCard key={product.id} productData={product} />
      })}
    </div>
  )
}

export default ProductCardList
