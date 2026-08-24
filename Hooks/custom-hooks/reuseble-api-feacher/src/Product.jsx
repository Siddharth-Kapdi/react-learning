const Product = ({ product }) => {
  return (
    <div className="product-card">
      <h2>{product.title}</h2>
      <p>{product.description}</p>

      <div className="product-details">
        <span>Price: ${product.price}</span>
        <span>Rating: ⭐ {product.rating}</span>
        <span>Stock: {product.stock}</span>
      </div>
    </div>
  )
}

export default Product
