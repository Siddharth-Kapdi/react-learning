const Cart = () => {
  return (
    <div className="cart">
      <h2>Cart</h2>
      <div className="cart-rows">
        <div className="cart-row">
          <div className="cart-info">
            <h3>Wireless Headphones</h3>
            <span>~</span>
            <p>₹2999</p>
          </div>

          <div className="quantity">
            <button>−</button>
            <span>1</span>
            <button>+</button>
          </div>
        </div>
      </div>

      <div className="price-section">
        <p className="total-price">Total: ₹2999</p>
      </div>
    </div>
  )
}

export default Cart
