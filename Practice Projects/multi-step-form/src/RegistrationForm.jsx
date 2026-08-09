import { useState } from 'react'
import StepContact from './StepContact'
import StepLogin from './StepLogin'
import StepName from './StepName'
import StepReview from './StepReview'

const RegistrationForm = () => {
  const [stepCount, setStepCount] = useState(1)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dob: '',
    userName: '',
    password: '',
  })

  // Input change function
  const handleChange = (e) => {
    const { name, value } = e.target

    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  // Button click function (if there is "Next" step or "Submit") handler
  const handleButtonClick = (e) => {
    if (stepCount === 4) {
      return handleFormSubmit(e)
    } else {
      nextCount(e)
    }
  }

  // Next count incremental function
  const nextCount = (e) => {
    const form = e.target.form
    if (!form.checkValidity()) {
      form.reportValidity()
      return
    }
    setStepCount((prev) => (prev < 4 ? prev + 1 : prev))
  }

  // Previous count decremental function
  const previousCount = () => {
    setStepCount((prev) => (prev > 1 ? prev - 1 : prev))
  }

  // form submit handler function
  const handleFormSubmit = (e) => {
    e.preventDefault()
    console.log(formData)

    setStepCount(1)

    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      dob: '',
      userName: '',
      password: '',
    })
  }

  return (
    <form className="form-container" onSubmit={handleFormSubmit}>
      <h1>Registration Form</h1>
      {stepCount === 1 && <StepName formData={formData} handleChange={handleChange} />}
      {stepCount === 2 && <StepContact formData={formData} handleChange={handleChange} />}
      {stepCount === 3 && <StepLogin formData={formData} handleChange={handleChange} />}
      {stepCount === 4 && <StepReview formData={formData} />}
      <button type="button" onClick={previousCount}>
        Previous
      </button>
      <button className="next-submit-btn" type="button" onClick={handleButtonClick}>
        {stepCount === 4 ? 'Submit' : 'Next'}
      </button>
    </form>
  )
}

export default RegistrationForm
