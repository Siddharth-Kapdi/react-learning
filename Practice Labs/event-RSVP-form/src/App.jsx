import { useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [noOfAttendees, setNoOfAttendees] = useState(0)
  const [dietPref, setDietPref] = useState('')
  const [addGuests, setAddGuests] = useState(false)
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)

  console.log(dietPref === null)
  // console.log(addGuests)

  return (
    <div className="container">
      <form
        className="rsvp-form"
        onSubmit={(e) => {
          e.preventDefault()
          return setIsFormSubmitted(true)
        }}
      >
        <h1 className="form-title">You're Invited</h1>
        <p className="form-subtitle">Please respond by the date on your invitation.</p>

        <div className="field">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Your Name"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="field">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your Email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="field">
          <label htmlFor="noOfAttendees">Number of Attendees</label>
          <input
            type="number"
            name="noOfAttendees"
            id="noOfAttendees"
            placeholder="Number of Attendees"
            value={noOfAttendees}
            min="1"
            required
            onChange={(e) => setNoOfAttendees(Number(e.target.value))}
          />
        </div>

        <div className="field">
          <label htmlFor="dietPlan">Dietary Preferences</label>
          <input
            type="text"
            name="dietPlan"
            id="dietPlan"
            placeholder="Dietary Preferences (Optional)"
            value={dietPref}
            onChange={(e) => setDietPref(e.target.value)}
          />
        </div>

        <div className="field checkbox-field">
          <input
            type="checkbox"
            name="additionalGuests"
            id="additionalGuests"
            value={addGuests}
            onChange={() => setAddGuests((prev) => !prev)}
          />
          <label htmlFor="additionalGuests">Bringing additional guests?</label>
        </div>

        <button
          type="submit"
          className="submit-btn"
          disabled={!name || !email || noOfAttendees === 0}
        >
          Submit RSVP
        </button>
        {isFormSubmitted && (
          <div className="form-details">
            <h2>RSVP Submitted!</h2>
            <p>
              <strong>Name:</strong> {name}
            </p>
            <p>
              <strong>Email:</strong> {email}
            </p>
            <p>
              <strong>Number of Attendees:</strong> {noOfAttendees}
            </p>
            <p>
              <strong>Dietary Preferences:</strong> {dietPref ? dietPref : 'None'}
            </p>
            <p>
              <strong>Bringing Others:</strong> {addGuests ? 'Yes' : 'No'}
            </p>
          </div>
        )}
      </form>
    </div>
  )
}

export default App
