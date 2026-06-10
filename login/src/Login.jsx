import { useState, useEffect } from 'react'
import './Login.css'

function Login() {

  useEffect(() => {
    document.body.id = 'login-body'
    document.body.className = 'login-body'
  }, [])

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if(username === 'Ric' && password === 'Pikmin') {
      alert('Login successful!')
    } else {
      alert('Invalid username or password. Please try again.')
    }
  }

  return (
    <div className="login-container">
      <h1 className="login-header">Login</h1>

      <form>

        <div className="username-div">
          <label className="login-label">
            username:
          </label>

          <input className="login-input" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>

        <div className="password-div">
          <label className="login-label">
            Password:
          </label>

          <input className="login-input" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>

        <button className="login-button" type="submit" onClick={handleSubmit}>
          Login
        </button>
      </form>
    </div>
  )
}

export default Login;