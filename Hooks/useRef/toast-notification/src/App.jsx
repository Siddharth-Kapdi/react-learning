import { useRef, useEffect, useState } from 'react'
import './App.css'
import Toast from './Toast'

function App() {
  const showToast = useRef(null)
  const [isSaved, setIsSaved] = useState(false)
  // const timeoutId = useRef(null)

  // const handleSaveBtn = () => {
  //   clearTimeout(timeoutId.current)
  //   showToast.current.style.display = 'block'
  //   timeoutId.current = setTimeout(() => {
  //     showToast.current.style.display = 'none'
  //   }, 2000)
  // }

  useEffect(() => {
    if (!isSaved) return
    showToast.current.style.display = 'block'
    const timeoutId = setTimeout(() => {
      showToast.current.style.display = 'none'
      setIsSaved(false)
    }, 2000)

    return () => clearTimeout(timeoutId)
  }, [isSaved])

  return (
    <div className="container">
      <Toast ref={showToast} />
      <div className="btn-div">
        <button onClick={() => setIsSaved(true)}>Save</button>
      </div>
    </div>
  )
}

export default App
