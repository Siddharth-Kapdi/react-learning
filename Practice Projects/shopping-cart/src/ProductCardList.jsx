import ProductCard from './ProductCard'

const ProductCardList = ({ products, cart, addItem }) => {
  return (
    <div className="product-list-section">
      {products.map((product) => {
        const inCart = cart.some((item) => item.id === product.id)
        return <ProductCard key={product.id} product={product} addItem={addItem} inCart={inCart} />
      })}
    </div>
  )
}

export default ProductCardList
