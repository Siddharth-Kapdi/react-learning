import { useState, useEffect } from 'react'

const WindowResizeTracker = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  })

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div className="window-container">
      <p className="width">Window width = {windowSize.width}px</p>
      <p className="hight">Window hight = {windowSize.height}px</p>
    </div>
  )
}

export default WindowResizeTracker
