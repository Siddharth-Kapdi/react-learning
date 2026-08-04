import { useState } from 'react'

const LoginForm = () => {
  const [user, setUser] = useState({
    userName: '',
    password: '',
  })
  return (
    <div className="form-container">
      <div className="heading">
        <h1>Login Form</h1>
      </div>
      <form
        action=""
        className="form"
        onSubmit={(e) => {
          e.preventDefault()
          console.log(user)
          setUser({
            userName: '',
            password: '',
          })
        }}
      >
        <label htmlFor="username">User Name:</label>
        <input
          type="text"
          name="username"
          id="username"
          autoComplete="off"
          value={user.userName}
          onChange={(e) => setUser((prev) => ({ ...prev, userName: e.target.value }))}
          required
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          id="password"
          autoComplete="off"
          value={user.password}
          onChange={(e) => setUser((prev) => ({ ...prev, password: e.target.value }))}
          required
        />
        <button type="submit" className="submit-btn">
          Login
        </button>
      </form>
    </div>
  )
}

export default LoginForm

// import { useState } from 'react'

// const LoginForm = () => {
//   const [userName, setUserName] = useState('')
//   const [password, setPassword] = useState('')
//   return (
//     <div className="form-container">
//       <div className="heading">
//         <h1>Login Form</h1>
//       </div>
//       <form
//         action=""
//         className="form"
//         onSubmit={(e) => {
//           e.preventDefault()
//           console.log(userName, password)
//           setUserName('')
//           setPassword('')
//         }}
//       >
//         <label htmlFor="username">User Name:</label>
//         <input
//           type="text"
//           name="username"
//           id="username"
//           value={userName}
//           onChange={(e) => setUserName(e.target.value)}
//           required
//         />
//         <label htmlFor="password">Password:</label>
//         <input
//           type="password"
//           name="password"
//           id="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//         <button type="submit" className="submit-btn">
//           Login
//         </button>
//       </form>
//     </div>
//   )
// }

// export default LoginForm
