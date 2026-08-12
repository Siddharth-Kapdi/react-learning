import Cart from './Cart'
import ProductCardList from './ProductCardList'

const ShoppingCart = () => {
  return (
    <div className="main-container">
      <h1>Shopping Cart</h1>
      <ProductCardList />
      <Cart />
    </div>
  )
}

export default ShoppingCart
