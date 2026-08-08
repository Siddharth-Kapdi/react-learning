const StepLogin = ({ formData, handleChange }) => {
  const { userName, password } = formData
  return (
    <div className="login-section section">
      <p className="step-name">Login info:</p>
      <label htmlFor="userName">username</label>
      <input
        type="text"
        name="userName"
        id="userName"
        required
        autoComplete="off"
        placeholder="Enter username..."
        value={userName}
        onChange={handleChange}
      />
      <label htmlFor="password">password</label>
      <input
        type="password"
        name="password"
        id="password"
        required
        autoComplete="off"
        placeholder="Enter password..."
        value={password}
        onChange={handleChange}
      />
    </div>
  )
}

export default StepLogin
