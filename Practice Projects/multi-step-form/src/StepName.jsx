const StepName = ({ formData, handleChange }) => {
  const { firstName, lastName } = formData
  return (
    <div className="name-section section">
      <p className="step-name">Name Info:</p>
      <label htmlFor="firstName">First Name</label>
      <input
        type="text"
        name="firstName"
        id="firstName"
        required
        autoComplete="off"
        placeholder="Enter first name..."
        value={firstName}
        onChange={handleChange}
      />
      <label htmlFor="lastName">Last Name</label>
      <input
        type="text"
        name="lastName"
        id="lastName"
        required
        autoComplete="off"
        placeholder="Enter last name..."
        value={lastName}
        onChange={handleChange}
      />
    </div>
  )
}

export default StepName
