import DiscountBadge from './DiscountBadge'
import PopularBadge from './PopularBadge'

const PriceCard = ({ plan }) => {
  const { name, price, isPopular, discountPercent, benefits } = plan
  return (
    <div className="price-card">
      <div className="badge-div">
        {discountPercent > 0 && <DiscountBadge discount={discountPercent} />}
        {isPopular ? <PopularBadge /> : null}
      </div>

      <div className="basic-info">
        <h2 className="plan-name">{name}</h2>
        <p className="plan-price">
          <span className="price">${price}</span>/month
        </p>
      </div>

      <button>Get started</button>

      <ul className="benefits">
        {benefits.map((benefit, idx) => (
          <li key={`${name}-${idx}`}>{benefit}</li>
        ))}
      </ul>
    </div>
  )
}

export default PriceCard
