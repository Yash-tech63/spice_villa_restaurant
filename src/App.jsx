import React from 'react'
import Home from './components/home/Home'
import { Route, Routes } from 'react-router'
import About from './Report'
import Dashboard from './Dashboard'
import Login from './components/home/Login'


const App = () => {
  return (
    <div>
      {/* <Navbar /> */}
      {/* <Home /> */}
      <Routes>
        <Route path="/login/home" element={<Home />} />
        <Route path="/login/report" element={<About />} />
        <Route path="/login/dashboard" element={<Dashboard />} />
        <Route path="/" element={<Login />} />

      </Routes>
    </div>
  )
}

export default App
