import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Logo from './Logo'
import { useDispatch, useSelector } from 'react-redux'
import { resetUser } from '../app/features/authSlice'

const Navbar = () => {
  const { user: currentUser } = useSelector(state => state.auth)
  const [user, setUser] = useState(currentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async (e) => {
    const response = await fetch('https://pulsiefy-backend.onrender.com/auth/logout', {
      method: 'GET',
      credentials: 'include'
    })
    const data = await response.json();
    console.log(data)
    if(data.success){
      console.log('hello')
      localStorage.removeItem('user')
      setUser(null)
      dispatch(resetUser())
    }
  }

  const handleLogin = (e) => {
    navigate('/sign-in')
  }

  return (
    <nav className='flex w-full shadow-md p-4 justify-center items-center bg-white max-lg:px-10'>
      <div className='flex justify-between items-center w-[1270px]'>
       
        <Logo />

        <ul className='flex flex-1 justify-end gap-6 items-center text-sm font-bold text-slate-500 max-md:hidden'>
          <li>
            <Link to={`/about`}>About</Link>
          </li>
          <li>
            <Link to={`/contact`}>Contact</Link>
          </li>
          <li>
          <div className='flex flex-1 gap-2 items-center cursor-pointer'>

            <img src="assets/icons/location.svg" alt="search" className='w-5 h-5'/>
            <p>Select Location</p>
          </div>
          </li>
          <li>
            <div className='flex flex-1 gap-2 items-center font-normal text-slate-600 bg-slate-100 rounded-md p-2 w-[200px]'>

              <img src="assets/icons/search-icon.svg" alt="search" className='w-5 h-5'/>
              <input type="text" placeholder='search' className='bg-transparent outline-none border-none'/>
            </div>
          </li>
          <li>
            {user ? <button className='btn btn-primary rounded-md' onClick={handleLogout}>{`Logout`}</button> :
            <button className='btn btn-primary rounded-md' onClick={handleLogin}>Login</button>
            }
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar