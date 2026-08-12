const Card = ({ charData }) => {
  const {
    name,
    image,
    status,
    species,
    gender,
    origin: { name: originName },
    location: { name: locationName },
  } = charData

  return (
    <div className="card">
      <div className="card-image">
        <img src={image} alt="" />
      </div>
      <div className="card-details">
        <h2 className="name">{name}</h2>
        <p className="status">
          {status === 'unknown' ? '⚪ Unknown' : status === 'Alive' ? '🟢 Alive' : '🔴 Dead'}
        </p>
        <div className="species-info">
          <p className="species">{species}</p>
          <span>•</span>
          <p className="gender">{gender}</p>
        </div>
        <div className="location-info">
          <p className="origin">
            <strong>Origin:</strong> {originName}
          </p>
          <p className="location">
            <strong>Location:</strong> {locationName}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Card
