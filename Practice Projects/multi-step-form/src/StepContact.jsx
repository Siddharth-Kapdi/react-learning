const StepContact = ({ formData, handleChange }) => {
  const { email, phone, dob } = formData
  return (
    <div className="contact-section section">
      <p className="step-name">Contact Info:</p>
      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        id="email"
        required
        autoComplete="off"
        placeholder="e.g. john.doe@example.com"
        value={email}
        onChange={handleChange}
      />
      <label htmlFor="phone">Phone</label>
      <input
        type="tel"
        name="phone"
        id="phone"
        required
        autoComplete="off"
        pattern="\d{10}"
        title="Phone number must be exactly 10 digits"
        placeholder="e.g. 9876543210"
        value={phone}
        onChange={handleChange}
      />
      <label htmlFor="dob">Date of Birth</label>
      <input
        type="date"
        name="dob"
        id="dob"
        required
        autoComplete="off"
        value={dob}
        onChange={handleChange}
      />
    </div>
  )
}

export default StepContact
