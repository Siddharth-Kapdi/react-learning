import { useId } from 'react'

const Toast = ({ ref }) => {
  const uniqueId = useId()
  // console.log(ref)

  return (
    <div className="toast" id={uniqueId} ref={ref}>
      <p>Success! Your changes have been saved.</p>
    </div>
  )
}

export default Toast
