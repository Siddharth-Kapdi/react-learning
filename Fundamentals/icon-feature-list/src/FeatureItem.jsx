const FeatureItem = ({ feature }) => {
  const { icon, label, description } = feature
  return (
    <div className="feature-item">
      <span className="feature-icon">{icon}</span>
      <h3 className="feature-label">{label}</h3>
      <hr />
      <p className="feature-description">{description}</p>
    </div>
  )
}

export default FeatureItem
