const StepList = ({ stepList }) => {
  return (
    <div className="step-list">
      <details>
        <summary>
          <strong>Steps to follow</strong>
        </summary>
        {stepList.map(({ order, text }, idx) => {
          return (
            <p key={`${order}-${idx}`}>
              <strong>Step {order}</strong> - {text}
            </p>
          )
        })}
      </details>
    </div>
  )
}

export default StepList
