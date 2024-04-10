import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Homepage, HospitalDetails, BookAppointment, RegisterForDonation } from './pages'
import { Navbar } from './components'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/details' element={<HospitalDetails />} />
        <Route path='/book-appointment' element={<BookAppointment />} />
        <Route path='/donate' element={<RegisterForDonation />}/>
      </Routes>
    </>
  )
}

export default App