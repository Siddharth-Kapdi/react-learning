function Card({ name, role, experience, address, description }) {
  return (
    <div className="user-card">
      <div className="name-sec">
        <h2 id="name">{name}</h2>
        <div className="role-sec">
          <p id="role">{role}</p>
          <p id="experience">Experience of {experience}</p>
        </div>
        <p id="address">{address}</p>
      </div>
      <div className="description-sec">
        <h3 id="desc-heading">Description</h3>
        <p id="description">{description}</p>
      </div>
    </div>
  )
}

export default Card
