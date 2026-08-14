const ProductCard = ({ product, addItem, inCart }) => {
  const { name, image, price } = product

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={image} alt={name} />
      </div>
      <div className="product-details">
        <h3 className="product-name">{name}</h3>
        <p className="product-price">Price - ₹{price}</p>
        <button className="add-to-cart-btn" onClick={() => addItem(product)}>
          {inCart ? 'Added ✓' : 'Add to cart'}
        </button>
      </div>
    </div>
  )
}

export default ProductCard
