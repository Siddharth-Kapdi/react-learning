import './App.css'
import Card from './ProductCard'

const products = [
  {
    id: 1,
    name: 'Wireless Headphones',
    price: 79.99,
    imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e',
    inStock: true,
  },
  {
    id: 2,
    name: 'Smart Watch',
    price: 129.99,
    imageUrl: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30',
    inStock: true,
  },
  {
    id: 3,
    name: 'Running Shoes',
    price: 64.99,
    imageUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff',
    inStock: true,
  },
  {
    id: 4,
    name: 'Leather Backpack',
    price: 89.99,
    imageUrl: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62',
    inStock: false,
  },
  {
    id: 5,
    name: 'Mechanical Keyboard',
    price: 109.99,
    imageUrl: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3',
    inStock: true,
  },
  {
    id: 6,
    name: 'Sunglasses',
    price: 39.99,
    imageUrl: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083',
    inStock: true,
  },
  {
    id: 7,
    name: 'Ceramic Coffee Mug',
    price: 14.99,
    imageUrl: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d',
    inStock: false,
  },
  {
    id: 8,
    name: 'Portable Bluetooth Speaker',
    price: 49.99,
    imageUrl: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1',
    inStock: true,
  },
]

function App() {
  return (
    <div className="container">
      <h1>Product Card Grid</h1>
      <div className="product-container">
        {products.map((product) => {
          return <Card key={product.id} props={product} />
        })}
      </div>
    </div>
  )
}

export default App
