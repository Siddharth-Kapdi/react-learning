const Card = ({ pokemonData }) => {
  const { id, sprites, name, types, height, weight, stats, base_experience, abilities } =
    pokemonData
  return (
    <div className="card">
      <p className="id">#{id}</p>
      <div className="card-image">
        <img src={sprites.other.dream_world.front_default} alt={name} />
      </div>
      <div className="card-info">
        <div className="card-name">
          <h2 className="name">{name}</h2>
        </div>
        <p className="type">{types.map((type) => type.type.name).join(', ')}</p>
        <div className="info-sec-one">
          <p className="height">
            <strong>Height: </strong>
            {height}
          </p>
          <p className="weight">
            <strong>Weight: </strong>
            {weight}
          </p>
          <p className="speed">
            <strong>Speed: </strong>
            {stats[5].base_stat}
          </p>
        </div>
        <div className="info-sec-two">
          <p className="experience">
            <strong>Experience: </strong>
            {base_experience}
          </p>
          <p className="Attack">
            <strong>Attack: </strong>
            {stats[1].base_stat}
          </p>
          <p className="abilities">
            <strong>Abilities: </strong>
            {abilities[0].ability.name}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Card
