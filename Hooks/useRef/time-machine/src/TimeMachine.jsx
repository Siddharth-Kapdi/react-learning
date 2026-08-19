import { useEffect, useRef, useState } from 'react'

const TimeMachine = () => {
  const [CurrentName, setCurrentName] = useState('')
  const [PreviousName, setPreviousName] = useState('')
  const refName = useRef('')

  useEffect(() => {
    setPreviousName(refName.current)
    refName.current = CurrentName
  }, [CurrentName])

  return (
    <div className="main-container">
      <input type="text" value={CurrentName} onChange={(e) => setCurrentName(e.target.value)} />
      <div>
        <p>Current name : {CurrentName}</p>
        <p>Previous name : {PreviousName}</p>
      </div>
    </div>
  )
}

export default TimeMachine
