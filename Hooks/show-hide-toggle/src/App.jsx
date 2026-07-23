import { useState } from 'react'
import './App.css'

function App() {
  const [isShowMsg, setShowMsg] = useState(false)

  // function handleMsgShow() {
  //   if (isShowMsg) {
  //     setShowMsg(false)
  //     return
  //   }
  //   setShowMsg(true)
  // }

  return (
    <div className="container">
      <h2>Click button to show message</h2>
      <button onClick={() => setShowMsg((prev) => !prev)}>Click me</button>
      {isShowMsg && (
        <p>
          Hello, Siddharth!!, <br />
          How are you today?
        </p>
      )}
    </div>
  )
}

export default App
