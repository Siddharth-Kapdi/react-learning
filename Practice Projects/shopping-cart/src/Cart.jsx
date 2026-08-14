const Cart = ({ cart, total, increaseQty, decreaseQty, removeItem }) => {
  const isEmptyCart = cart.length === 0

  if (isEmptyCart) {
    return (
      <div className="cart">
        <h2>Cart</h2>
        <p>Your cart is empty.</p>
      </div>
    )
  }

  return (
    <div className="cart">
      <h2>Cart</h2>
      <div className="cart-rows">
        {cart.map(({ id, name, price, quantity }) => {
          return (
            <div className="cart-row" key={id}>
              <div className="cart-info">
                <h3>{name}</h3>
                <span>~</span>
                <p>₹{price}</p>
              </div>

              <div className="quantity">
                <button disabled={quantity === 1} onClick={() => decreaseQty(id)}>
                  −
                </button>
                <span>{quantity}</span>
                <button disabled={quantity === 10} onClick={() => increaseQty(id)}>
                  +
                </button>
                <button onClick={() => removeItem(id)}>🗑️</button>
              </div>
            </div>
          )
        })}
      </div>
      <hr />
      <div className="price-section">
        <p className="total-price">Total: ₹{total()}</p>
      </div>
    </div>
  )
}

export default Cart
