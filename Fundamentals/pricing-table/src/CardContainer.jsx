import PriceCard from './PriceCard'

const plans = [
  {
    id: 1,
    name: 'Basic',
    price: 9.99,
    isPopular: false,
    discountPercent: 0,
    benefits: ['Access to basic features', '5 projects', '1 GB storage', 'Email support'],
  },
  {
    id: 2,
    name: 'Pro',
    price: 19.99,
    isPopular: true,
    discountPercent: 20,
    benefits: [
      'Access to all features',
      'Unlimited projects',
      '10 GB storage',
      'Priority support',
      'Advanced analytics',
    ],
  },
  {
    id: 3,
    name: 'Premium',
    price: 29.99,
    isPopular: false,
    discountPercent: 10,
    benefits: [
      'Everything in Pro',
      'Unlimited storage',
      'Dedicated support',
      'Advanced security',
      'Custom integrations',
    ],
  },
]

const CardContainer = () => {
  return (
    <div className="card-container">
      {plans.map((plan) => (
        <PriceCard key={plan.id} plan={plan} />
      ))}
    </div>
  )
}

export default CardContainer
