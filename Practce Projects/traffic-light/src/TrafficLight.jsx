import { useState, useEffect } from 'react'

export const TrafficLight = () => {
  const [timer, setTimer] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimer((timer) => (timer === 7 ? 0 : timer + 1))
    }, 1000)

    return () => {
      clearInterval(intervalId)
    }
  }, [])

  return (
    <div className="container">
      <h1>Traffic Lights</h1>
      <div className="lights">
        <div
          id="red-light"
          style={{ backgroundColor: timer >= 0 && timer <= 3 ? '#E60000' : '#000' }}
        ></div>
        <div
          id="green-light"
          style={{ backgroundColor: timer > 3 && timer <= 6 ? '#008450' : '#000' }}
        ></div>
        <div id="yellow-light" style={{ backgroundColor: timer === 7 ? '#EFB700' : '#000' }}></div>
      </div>
      <p>{timer}</p>
    </div>
  )
}
