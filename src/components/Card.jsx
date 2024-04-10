import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({ data }) => {
  return (

    <Link to={data.href} className='bg-white flex flex-1 gap-2 rounded-md shadow-md items-center justify-start cursor-pointer hover:shadow-2xl hover:scale-105 transition'>
        <img src={data.image} alt="card-image" className={`opacity-45 w-[80px] h-[80px] py-4 ${data.color} m-2 rounded-md`}/>
        <p className='px-4 font-medium text-blue-500 text-md'>
          {data.title}
        </p>
    </Link>
  )
}

export default Card