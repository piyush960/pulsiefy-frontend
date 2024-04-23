import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { Homepage, HospitalDetails, BookAppointment, RegisterForDonation, Symptoms } from './_root/pages'
import Login from './_auth/pages/Login'
import Signup from './_auth/pages/Signup'
import RootLayout from './_root/RootLayout'
import AuthLayout from './_auth/AuthLayout'
import { useSelector } from 'react-redux'

const App = () => {
  const { user } = useSelector(state => state.auth)

  return (
    <main>
      <Routes>
        <Route element={<AuthLayout/>}>
          <Route path="/sign-in" element={user ? <Navigate to={`/`}/> : <Login />}/>
          <Route path="/sign-up" element={user ? <Navigate to={`/`}/> : <Signup />}/>
        </Route>

        <Route element={<RootLayout />}>
          <Route path='/' element={<Homepage />} />
          <Route path='/details' element={<HospitalDetails />} />
          <Route path='/enter-symptoms' element={<Symptoms />} />
          <Route path='/book-appointment' element={user ? <BookAppointment /> : <Navigate to={`/sign-in`}/>} />
          <Route path='/donate' element={<RegisterForDonation />}/>
        </Route>

      </Routes>
    </main>
  )
}

export default App