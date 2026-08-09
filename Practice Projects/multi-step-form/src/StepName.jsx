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
        pattern="[A-Za-z]{2,}"
        title="Letters only, minimum 2 characters"
        placeholder="e.g. John"
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
        pattern="[A-Za-z]{2,}"
        title="Letters only, minimum 2 characters"
        placeholder="e.g. Doe"
        value={lastName}
        onChange={handleChange}
      />
    </div>
  )
}

export default StepName
