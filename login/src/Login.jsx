import { useState, useEffect } from 'react'
import './Login.css'
import {BrowserRouter as Router, Routes, Route, useNavigate} from 'react-router-dom'

function Login() {
  const navigate = useNavigate()

  useEffect(() => {
    document.body.id = 'login-body'
    document.body.className = 'login-body'
    document.title = "Login";
  }, [])

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const loginUser = 'Ric';
  const loginPassword = 'Pikmin';

  const handleSubmit = (e) => {
    e.preventDefault()
    if(username === loginUser && password === loginPassword) {
      alert('Login successful!')
      navigate('/mamuta');
    } else {
      alert('Invalid username or password. Please try again.')
      console.log("Username: " + loginUser);
      console.log("Password: " + loginPassword);
    }
  }

  return (
    <div className="login-container">
      <h1 className="login-header">
        Login
      </h1>

      <form onSubmit={handleSubmit}>

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