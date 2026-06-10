import Login from './Login.jsx'
import Mamuta from './Mamuta.jsx'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/mamuta" element={<Mamuta />} />
      </Routes>
    </Router>
  )
}

export default App
