import { useState } from 'react'
import Cart from './Cart'
import ProductCardList from './ProductCardList'

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

const ShoppingCart = () => {
  const [cart, setCart] = useState([])

  // First Add item in cart with quantity 1
  const addItem = (product) => {
    setCart((prevCart) => {
      const isExist = prevCart.some((item) => item.id === product.id)
      if (isExist) {
        return prevCart
      }
      return [...prevCart, { ...product, quantity: 1 }]
    })
  }

  // Increase quantity of item in cart
  const increaseQty = (productId) => {
    setCart((prevCart) => {
      return prevCart.map((item) =>
        item.id === productId
          ? { ...item, quantity: item.quantity < 10 ? item.quantity + 1 : item.quantity }
          : item
      )
    })
  }

  // Decrease quantity of item in cart
  const decreaseQty = (productId) => {
    setCart((prevCart) => {
      return prevCart.map((item) =>
        item.id === productId
          ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : item.quantity }
          : item
      )
    })
  }

  // remove item from cart
  const removeItem = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId))
  }

  // Calculate total price of items in cart
  const totalPrice = () => {
    const totalAmount = cart.reduce((acc, item) => acc + item.price * item.quantity, 0)
    return totalAmount
  }

  return (
    <div className="main-container">
      <h1>Shopping Cart</h1>
      <ProductCardList products={products} cart={cart} addItem={addItem} />
      <Cart
        cart={cart}
        total={totalPrice}
        increaseQty={increaseQty}
        decreaseQty={decreaseQty}
        removeItem={removeItem}
      />
    </div>
  )
}

export default ShoppingCart
