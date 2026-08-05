import { useState } from 'react'

const ContactForm = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleUserData = (e) => {
    const { name, value } = e.target
    setUser((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(user)
    setUser({
      name: '',
      email: '',
      message: '',
    })
  }

  return (
    <div className="form-container">
      <div className="heading">
        <h1>Contact Form</h1>
      </div>
      <form action="" className="form" onSubmit={handleSubmit}>
        <label htmlFor="name">Full Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter your name..."
          required
          autoComplete="off"
          value={user.name}
          onChange={handleUserData}
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email..."
          required
          autoComplete="off"
          value={user.email}
          onChange={handleUserData}
        />
        <label htmlFor="msg">Message:</label>
        <textarea
          name="message"
          id="msg"
          cols="30"
          rows="10"
          required
          autoComplete="off"
          placeholder="Enter your Message..."
          value={user.message}
          onChange={handleUserData}
        ></textarea>
        <button type="submit" className="submit">
          Submit
        </button>
      </form>
    </div>
  )
}

export default ContactForm
