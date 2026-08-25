import { useEffect, useRef } from 'react'

const Modal = ({ isOpen, setIsOpen }) => {
  const containerRef = useRef(null)

  useEffect(() => {
    const focusableElements = containerRef.current.querySelectorAll(
      'button, input, textarea, select, a[href], [tabindex]:not([tabindex="-1"])'
    )
    focusableElements[0].focus()

    const handleFocusTravel = (e) => {
      if (e.key === 'Escape') {
        setIsOpen(false)
      }

      if (focusableElements.length <= 1) return

      if (e.key === 'Tab') {
        if (e.shiftKey && document.activeElement === focusableElements[0]) {
          e.preventDefault()
          focusableElements[focusableElements.length - 1].focus()
        } else if (document.activeElement === focusableElements[focusableElements.length - 1]) {
          e.preventDefault()
          focusableElements[0].focus()
        }
      }
    }

    document.addEventListener('keydown', handleFocusTravel)

    return () => document.removeEventListener('keydown', handleFocusTravel)
  }, [isOpen, setIsOpen])

  return (
    <div className="modal-overlay" ref={containerRef}>
      <div className="modal">
        <div className="modal-header">
          <h2 className="modal-title">Dummy Modal</h2>
        </div>

        <div className="modal-body">
          <input type="text" className="modal-input" placeholder="Enter something..." />
        </div>

        <div className="modal-footer">
          <button className="modal-close-btn" onClick={() => setIsOpen(false)}>
            Close
          </button>
          <button className="modal-confirm-btn">Confirm</button>
        </div>
      </div>
    </div>
  )
}

export default Modal
