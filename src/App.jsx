import React from 'react'
import Homepage from './pages/Homepage'
import { Routes, Route } from 'react-router-dom'
import HospitalDetails from './pages/HospitalDetails'

const App = () => {
  return (

    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/details' element={<HospitalDetails />} />

    </Routes>
  )
}

export default App