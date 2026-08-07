import { useState } from 'react'
const StarRating = () => {
  const [rating, setRating] = useState(0)
  return (
    <div className="star-container">
      {[1, 2, 3, 4, 5].map((starPosition) => (
        <span
          key={starPosition}
          onClick={() => setRating(starPosition)}
          style={{ color: starPosition <= rating ? 'gold' : 'gray', cursor: 'pointer' }}
        >
          ★
        </span>
      ))}
    </div>
  )
}

export default StarRating
