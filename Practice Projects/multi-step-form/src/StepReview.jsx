const StepReview = ({ formData }) => {
  const { firstName, lastName, email, phone, dob, userName, password } = formData
  // {
  //   firstName: 'sid',
  //   lastName: 'kapdi',
  //   email: 'xyz@gmail.com',
  //   phone: '9900990090',
  //   dob: '2005-11-11',
  //   userName: 'alsiidh23',
  //   password: 'sldkfjls234',
  // }
  return (
    <div className="review-section section">
      <p className="step-name">Review your Data</p>
      <p>
        <strong>First Name :</strong> {firstName}
      </p>
      <p>
        <strong>Last Name :</strong> {lastName}
      </p>
      <p>
        <strong>Email :</strong> {email}
      </p>
      <p>
        <strong>Phone No. :</strong> {phone}
      </p>
      <p>
        <strong>Date of Birth :</strong> {dob}
      </p>
      <p>
        <strong>User name :</strong> {userName}
      </p>
      <p>
        <strong>Password :</strong> {password}
      </p>
    </div>
  )
}

export default StepReview
