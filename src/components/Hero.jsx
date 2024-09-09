import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className='flex justify-center items-center'>
      <div className='flex bg-blue-100 justify-center items-center rounded-md p-6 w-[1270px]  m-10 max-md:flex-col-reverse'>
        <div className='w-[50%]'>
          <h2 className='text-4xl font-bold drop-shadow-sm w-[80%]'>Find the Nearest Hospital for Your Emergency</h2>
          <p className='text-slate-700 py-9 font-normal w-[80%]'> — Fast, Accurate, and Tailored to Your Medical Needs.</p>
          <Link to={'/enter-symptoms'} className='btn-primary'>Find Hospital</Link>
        </div>
        <img src="/assets/images/hospital.svg" alt="doctor-image" className='w-[350px] h-[350px]'/>
      </div>
    </section>
  )
}

export default Hero