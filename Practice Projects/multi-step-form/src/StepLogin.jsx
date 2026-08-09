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
        pattern="[a-zA-Z0-9_]{4,20}"
        title="4-20 characters, letters, numbers, and underscores only"
        placeholder="e.g. john_doe23"
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
        pattern="(?=.*[A-Za-z])(?=.*\d).{8,}"
        title="Minimum 8 characters, at least one letter and one number"
        placeholder="Min 8 characters, 1 letter & 1 number"
        value={password}
        onChange={handleChange}
      />
    </div>
  )
}

export default StepLogin
