import { useState, useRef, useEffect } from 'react'
import './App.css'
import Modal from './Modal'

function App() {
  const [isOpen, setIsOpen] = useState(false)
  const previousFocusRef = useRef(null)

  useEffect(() => {
    if (!isOpen && previousFocusRef.current) {
      previousFocusRef.current.focus()
    }
  }, [isOpen])

  return (
    <div className="container">
      {isOpen && <Modal isOpen={isOpen} setIsOpen={setIsOpen} />}
      <button
        className={`open-btn ${isOpen ? 'hidden' : ''}`}
        onClick={() => {
          previousFocusRef.current = document.activeElement
          setIsOpen(true)
        }}
      >
        Open modal
      </button>
    </div>
  )
}

export default App
