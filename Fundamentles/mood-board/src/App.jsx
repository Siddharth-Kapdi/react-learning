export function MoodBoardItem({ color, image, description }) {
  return (
    <div className="mood-board-item" style={{ backgroundColor: color }}>
      <img className="mood-board-image" src={image} alt={description} />
      <h3 className="mood-board-text">{description}</h3>
    </div>
  )
}

export function MoodBoard() {
  const places = [
    {
      color: 'green',
      imageUrl: 'https://cdn.freecodecamp.org/curriculum/labs/pathway.jpg',
      description: 'Caribbean',
    },
    {
      color: 'purple',
      imageUrl: 'https://cdn.freecodecamp.org/curriculum/labs/shore.jpg',
      description: 'Gawadar Beach',
    },
    {
      color: 'skyblue',
      imageUrl: 'https://cdn.freecodecamp.org/curriculum/labs/grass.jpg',
      description: 'Cape Town',
    },
    {
      color: 'pink',
      imageUrl: 'https://cdn.freecodecamp.org/curriculum/labs/ship.jpg',
      description: 'Suez Canal',
    },
    {
      color: 'tomato',
      imageUrl: 'https://cdn.freecodecamp.org/curriculum/labs/santorini.jpg',
      description: 'Santorini',
    },
    {
      color: 'grey',
      imageUrl: 'https://cdn.freecodecamp.org/curriculum/labs/pigeon.jpg',
      description: 'Istanbul',
    },
  ]
  return (
    <div>
      <h1 className="mood-board-heading">Destination Mood Board</h1>
      <div className="mood-board">
        {places.map((place, index) => (
          <MoodBoardItem
            key={place + index}
            color={place.color}
            image={place.imageUrl}
            description={place.description}
          />
        ))}
      </div>
    </div>
  )
}

function App() {
  return <MoodBoard />
}

export default App
