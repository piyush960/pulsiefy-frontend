import React from 'react'
import { Card, Footer, Hero, Navbar, Recents } from '../../components'
import { facilities } from '../../constants';
import { useSelector } from 'react-redux';

const Homepage = () => {
  
  return (
    <div className='bg-slate-100 h-auto'>
        <Hero />
        <div className='flex justify-center items-center my-2 py-5'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 mycontainer'>
            {
              facilities.map((facility) => (
                <Card data={facility} key={facility.title}/>
              ))
            }
          </div>
        </div>
        <Recents />
        <Footer />
    </div>
  )
}

export default Homepage