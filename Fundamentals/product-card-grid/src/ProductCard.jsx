const Card = ({ props }) => {
  const { name, price, imageUrl, inStock } = props
  return (
    <div className={`product-card ${!inStock ? 'out-of-stock' : ''}`}>
      <div className="p-img">
        <img src={imageUrl} alt={name} height={250} />
      </div>
      <div className="p-info">
        <h3 className="p-title">{name}</h3>
        <p className="p-price">${price.toFixed(2)}</p>
        <p className="stock-info">{inStock ? 'In Stock' : 'Sold Out'}</p>
      </div>
    </div>
  )
}

export default Card
