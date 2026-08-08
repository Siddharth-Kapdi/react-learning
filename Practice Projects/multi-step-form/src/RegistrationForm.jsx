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

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleButtonClick = (e) => {
    if (stepCount === 4) {
      return handleFormSubmit(e)
    }
    setStepCount((prev) => (prev < 4 ? prev + 1 : prev))
  }

  const handlePreviousBtn = () => {
    setStepCount((prev) => (prev > 1 ? prev - 1 : prev))
  }

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
      <button type="button" onClick={handlePreviousBtn}>
        Previous
      </button>
      <button className="next-submit-btn" type="button" onClick={handleButtonClick}>
        {stepCount === 4 ? 'Submit' : 'Next'}
      </button>
    </form>
  )
}

export default RegistrationForm
