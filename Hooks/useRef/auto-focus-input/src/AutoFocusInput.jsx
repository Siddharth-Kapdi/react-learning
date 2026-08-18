import { useEffect, useRef } from 'react'

const AutoFocusInput = () => {
  const focusTrap = useRef(null)

  useEffect(() => {
    focusTrap.current.focus()
    console.log(focusTrap)
  }, [])

  const handleFocusBtn = () => {
    focusTrap.current.focus()
  }

  return (
    <div className="main-container">
      <h1>Auto Focused Input</h1>
      <input type="text" ref={focusTrap} />
      <br />
      <button onClick={handleFocusBtn}>Click to Focus</button>
    </div>
  )
}

export default AutoFocusInput
