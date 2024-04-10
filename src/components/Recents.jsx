import React from 'react'
import { Link } from 'react-router-dom'

const Recents = () => {
  return (
    <>
    <h3 className='font-bold text-slate-500 text-lg text-center my-5'>Your Recent Searches</h3>
    <section className='lg:mycontainer mx-auto max-lg:mx-10 grid grid-cols-3 max-lg:grid-cols-2 max-md:flex-col max-md:flex gap-5 my-10'>
      <Link to={`/`}>
        <div className='card p-5 flex gap-10 relative hover:scale-105 hover:shadow-2xl transition ease-in flex-1 flex-1'>
          <Link to={'/'} className='absolute right-5 top-4 bg-red-300 rounded-md p-1 hover:bg-red-400 transition-colors ease-in'>
            <img src="/assets/icons/close-btn.svg" alt="delete" className='w-3 h-3 opacity-70'/>
          </Link>
          <div className='flex gap-5 items-center'>
            <div className='flex flex-col gap-2'>
              <h3 className='font-bold text-xl tracking-tight text-blue-400 mb-2'>Bharati Hospital</h3>
              <p className='flex gap-1 items-center text-slate-500 text-sm font-medium'><img src="assets/icons/star.svg" alt="star" className='w-4 h-4'/> 4.0 (2209)</p>
              <p className='text-slate-500'><a href="mailto: bhartihospital@gmail.com">bhartihospital@gmail.com</a></p>
              <div className='flex gap-2 items-center'>
                  <img src="/assets/icons/location1.svg" alt="location" className='w-6, h-6'/>
                  <p className='text-sm text-slate-500'>Pune, Maharashtra</p>
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-4 justify-between'>
            <div className='flex gap-2 break-all mt-10'>
                <img src="assets/icons/call.svg" alt="phone" className='opacity-50'/>
                <a href="tel: +912040555555" className='text-slate-500 text-sm'>+912040555555</a>
            </div>
            <div className=''>
              <p className='text-slate-500 text-sm font-semibold mb-1'>State</p>
              <p className='text-sm font-medium text-green-400'>Open 24 hours</p>
            </div>
          </div>
        </div>
      </Link>
      <Link to={`/`}>
        <div className='card p-5 flex gap-10 relative hover:scale-105 hover:shadow-2xl transition ease-in flex-1'>
          <Link to={'/'} className='absolute right-5 top-4 bg-red-300 rounded-md p-1 hover:bg-red-400 transition-colors ease-in'>
            <img src="/assets/icons/close-btn.svg" alt="delete" className='w-3 h-3 opacity-70'/>
          </Link>
          <div className='flex gap-5 items-center'>
            <div className='flex flex-col gap-2'>
              <h3 className='font-bold text-xl tracking-tight text-blue-400 mb-2'>Bharati Hospital</h3>
              <p className='flex gap-1 items-center text-slate-500 text-sm font-medium'><img src="assets/icons/star.svg" alt="star" className='w-4 h-4'/> 4.0 (2209)</p>
              <p className='text-slate-500'><a href="mailto: bhartihospital@gmail.com">bhartihospital@gmail.com</a></p>
              <div className='flex gap-2 items-center'>
                  <img src="/assets/icons/location1.svg" alt="location" className='w-6, h-6'/>
                  <p className='text-sm text-slate-500'>Pune, Maharashtra</p>
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-4 justify-between'>
            <div className='flex gap-2 break-all mt-10'>
                <img src="assets/icons/call.svg" alt="phone" className='opacity-50'/>
                <a href="tel: +912040555555" className='text-slate-500 text-sm'>+912040555555</a>
            </div>
            <div className=''>
              <p className='text-slate-500 text-sm font-semibold mb-1'>State</p>
              <p className='text-sm font-medium text-green-400'>Open 24 hours</p>
            </div>
          </div>
        </div>
      </Link>
      <Link to={`/`}>
        <div className='card p-5 flex gap-10 relative hover:scale-105 hover:shadow-2xl transition ease-in flex-1'>
          <Link to={'/'} className='absolute right-5 top-4 bg-red-300 rounded-md p-1 hover:bg-red-400 transition-colors ease-in'>
            <img src="/assets/icons/close-btn.svg" alt="delete" className='w-3 h-3 opacity-70'/>
          </Link>
          <div className='flex gap-5 items-center'>
            <div className='flex flex-col gap-2'>
              <h3 className='font-bold text-xl tracking-tight text-blue-400 mb-2'>Bharati Hospital</h3>
              <p className='flex gap-1 items-center text-slate-500 text-sm font-medium'><img src="assets/icons/star.svg" alt="star" className='w-4 h-4'/> 4.0 (2209)</p>
              <p className='text-slate-500'><a href="mailto: bhartihospital@gmail.com">bhartihospital@gmail.com</a></p>
              <div className='flex gap-2 items-center'>
                  <img src="/assets/icons/location1.svg" alt="location" className='w-6, h-6'/>
                  <p className='text-sm text-slate-500'>Pune, Maharashtra</p>
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-4 justify-between'>
            <div className='flex gap-2 break-all mt-10'>
                <img src="assets/icons/call.svg" alt="phone" className='opacity-50'/>
                <a href="tel: +912040555555" className='text-slate-500 text-sm'>+912040555555</a>
            </div>
            <div className=''>
              <p className='text-slate-500 text-sm font-semibold mb-1'>State</p>
              <p className='text-sm font-medium text-green-400'>Open 24 hours</p>
            </div>
          </div>
        </div>
      </Link>
      <Link to={`/`}>
        <div className='card p-5 flex gap-10 relative hover:scale-105 hover:shadow-2xl transition ease-in flex-1'>
          <Link to={'/'} className='absolute right-5 top-4 bg-red-300 rounded-md p-1 hover:bg-red-400 transition-colors ease-in'>
            <img src="/assets/icons/close-btn.svg" alt="delete" className='w-3 h-3 opacity-70'/>
          </Link>
          <div className='flex gap-5 items-center'>
            <div className='flex flex-col gap-2'>
              <h3 className='font-bold text-xl tracking-tight text-blue-400 mb-2'>Bharati Hospital</h3>
              <p className='flex gap-1 items-center text-slate-500 text-sm font-medium'><img src="assets/icons/star.svg" alt="star" className='w-4 h-4'/> 4.0 (2209)</p>
              <p className='text-slate-500'><a href="mailto: bhartihospital@gmail.com">bhartihospital@gmail.com</a></p>
              <div className='flex gap-2 items-center'>
                  <img src="/assets/icons/location1.svg" alt="location" className='w-6, h-6'/>
                  <p className='text-sm text-slate-500'>Pune, Maharashtra</p>
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-4 justify-between'>
            <div className='flex gap-2 break-all mt-10'>
                <img src="assets/icons/call.svg" alt="phone" className='opacity-50'/>
                <a href="tel: +912040555555" className='text-slate-500 text-sm'>+912040555555</a>
            </div>
            <div className=''>
              <p className='text-slate-500 text-sm font-semibold mb-1'>State</p>
              <p className='text-sm font-medium text-green-400'>Open 24 hours</p>
            </div>
          </div>
        </div>
      </Link>
      <Link to={`/`}>
        <div className='card p-5 flex gap-10 relative hover:scale-105 hover:shadow-2xl transition ease-in flex-1'>
          <Link to={'/'} className='absolute right-5 top-4 bg-red-300 rounded-md p-1 hover:bg-red-400 transition-colors ease-in'>
            <img src="/assets/icons/close-btn.svg" alt="delete" className='w-3 h-3 opacity-70'/>
          </Link>
          <div className='flex gap-5 items-center'>
            <div className='flex flex-col gap-2'>
              <h3 className='font-bold text-xl tracking-tight text-blue-400 mb-2'>Bharati Hospital</h3>
              <p className='flex gap-1 items-center text-slate-500 text-sm font-medium'><img src="assets/icons/star.svg" alt="star" className='w-4 h-4'/> 4.0 (2209)</p>
              <p className='text-slate-500'><a href="mailto: bhartihospital@gmail.com">bhartihospital@gmail.com</a></p>
              <div className='flex gap-2 items-center'>
                  <img src="/assets/icons/location1.svg" alt="location" className='w-6, h-6'/>
                  <p className='text-sm text-slate-500'>Pune, Maharashtra</p>
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-4 justify-between'>
            <div className='flex gap-2 break-all mt-10'>
                <img src="assets/icons/call.svg" alt="phone" className='opacity-50'/>
                <a href="tel: +912040555555" className='text-slate-500 text-sm'>+912040555555</a>
            </div>
            <div className=''>
              <p className='text-slate-500 text-sm font-semibold mb-1'>State</p>
              <p className='text-sm font-medium text-green-400'>Open 24 hours</p>
            </div>
          </div>
        </div>
      </Link>
      
    </section>
    </>
  )
}

export default Recents