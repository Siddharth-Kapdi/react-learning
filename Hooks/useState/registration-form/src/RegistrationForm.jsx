import { useState } from 'react'

const RegistrationForm = () => {
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phoneNumber: '',
  })

  const handleInputValue = (e) => {
    const { name, value } = e.target
    // setUser({ ...user, [name]: value })
    setUser((prev) => ({ ...prev, [name]: value }))
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    console.log(user)
    setUser({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      phoneNumber: '',
    })
  }

  return (
    <div className="form-container">
      <div className="form-details">
        <h1 className="heading">Registration Form</h1>
        <p className="heading-para">Please fill out the form to Register yourself!!</p>
      </div>
      <form className="form" onSubmit={handleFormSubmit}>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          placeholder="Enter your first name..."
          value={user.firstName}
          onChange={handleInputValue}
          required
        />
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          placeholder="Enter your last name..."
          value={user.lastName}
          onChange={handleInputValue}
          required
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email..."
          value={user.email}
          onChange={handleInputValue}
          required
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter your password..."
          value={user.password}
          onChange={handleInputValue}
          required
        />
        <label htmlFor="phoneNumber">Phone Number:</label>
        <input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          placeholder="Enter you phone number..."
          value={user.phoneNumber}
          onChange={handleInputValue}
          required
        />
        <p className="tc-para">
          By creating an account you agree to our <strong className="tc">Terms & Condition</strong>
        </p>
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
  )
}

export default RegistrationForm
