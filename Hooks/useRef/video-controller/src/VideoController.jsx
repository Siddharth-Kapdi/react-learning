import { useRef } from 'react'

const VideoController = () => {
  const controller = useRef(null)

  const play = () => {
    controller.current.play()
  }

  const pause = () => {
    controller.current.pause()
  }

  const fiveSecForward = () => {
    controller.current.currentTime = controller.current.currentTime + 5
    console.log(controller.current.currentTime)
  }

  const fiveSecBackward = () => {
    controller.current.currentTime = controller.current.currentTime - 5
    console.log(controller.current.currentTime)
  }

  const restart = () => {
    controller.current.currentTime = 0
  }

  return (
    <div className="main-container">
      <video width="620" height="440" ref={controller}>
        <source src="../../public/spidyy.mp4" type="video/mp4" />
      </video>
      <div className="controllers">
        <button onClick={fiveSecBackward}>- 5</button>
        <button onClick={restart}>↻</button>
        <button onClick={play}>Play</button>
        <button onClick={pause}>Pause</button>
        <button onClick={fiveSecForward}>+ 5</button>
      </div>
    </div>
  )
}

export default VideoController
