import { useState } from 'react'
const MAX_LENGTH = 50

const CharacterCounter = () => {
  const [char, setChar] = useState('')
  return (
    <div className="counter-container">
      <h1>Character counter</h1>
      <p className="char-para">
        Character count is{' '}
        <span className={char.length > MAX_LENGTH ? 'char-count' : ''}>{char.length}</span>
      </p>
      {char.length > MAX_LENGTH && <p className="warning-text">Character limit exceeded!</p>}
      <textarea
        name="msg"
        className={`msg-box ${char.length > MAX_LENGTH ? 'warning' : ''}`}
        cols="40"
        rows="10"
        placeholder="Enter your message..."
        value={char}
        onChange={(e) => setChar(e.target.value)}
      ></textarea>
    </div>
  )
}

export default CharacterCounter
