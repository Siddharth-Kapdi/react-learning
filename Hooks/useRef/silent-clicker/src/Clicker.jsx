import { useEffect, useRef, useState } from 'react'

// const Clicker = () => {
//   const [stateCount, setStateCount] = useState(0)
//   const count = useRef(0)

//   const handleIncrement = () => {
//     count.current = count.current + 1
//   }

//   const handleReveal = () => {
//     console.log('Re-render and increment the counter value :', count.current)
//     setStateCount(count.current)
//   }

//   return (
//     <div className="main-container">
//       <p className="count">{stateCount}</p>
//       <div className="btns">
//         <button onClick={handleIncrement}>Increment</button>
//         <button onClick={handleReveal}>Reveal</button>
//       </div>
//     </div>
//   )
// }

const Clicker = () => {
  const [stateCount, setStateCount] = useState(0)
  const [isReveal, setIsReveal] = useState(false)
  const count = useRef(0)

  const handleIncrement = () => {
    count.current = count.current + 1
  }

  const handleReveal = () => {
    console.log('Re-render and increment the counter value :', count.current)
    setIsReveal((prev) => !prev)
  }

  useEffect(() => {
    setStateCount(count.current)
  }, [isReveal])

  return (
    <div className="main-container">
      <p className="count">{stateCount}</p>
      <div className="btns">
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleReveal}>Reveal</button>
      </div>
    </div>
  )
}

export default Clicker
