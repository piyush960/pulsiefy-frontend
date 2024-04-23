import React from 'react'
import { Link } from 'react-router-dom'

const RecentCard = ({ data }) => {
  let color = 'text-slate-400';
  if(data?.state?.toLowerCase().includes('close')){
    color = 'text-red-400'
  }
  else if(data?.state?.toLowerCase().includes('open')){
    color = 'text-green-400'
  }

  return (
    <Link to={`/details`} state={data} >
        <div className='card p-5 flex gap-10 relative hover:scale-105 hover:shadow-2xl transition ease-in flex-1'>
          <div className='flex gap-5 items-center'>
            <div className='flex flex-col gap-2'>
              <h3 className='font-bold text-xl tracking-tight text-blue-400 mb-2'>{data?.name.length > 20 ? `${data?.name.slice(0, 17)}...` : `${data?.name}`}</h3>
              <p className='flex gap-1 items-center text-slate-500 text-sm font-medium'><img src="assets/icons/star.svg" alt="star" className='w-4 h-4'/>{`${data?.rating} (${data.review_count})`}</p>
              <p className='text-slate-500'><a href="mailto: bhartihospital@gmail.com">{data?.website}</a></p>
              <div className='flex gap-2 items-center'>
                  <img src="/assets/icons/location1.svg" alt="location" className='w-6, h-6'/>
                  <p className='text-sm text-slate-500'>{data?.city}</p>
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-4 justify-between'>
            <div className='flex gap-2 break-all mt-10'>
                <img src="assets/icons/call.svg" alt="phone" className='opacity-50'/>
                <a href="tel: +912040555555" className='text-slate-500 text-sm'>{data?.phone_number}</a>
            </div>
            <div className=''>
              <p className='text-slate-500 text-sm font-semibold mb-1'>State</p>
              <p className={`text-sm font-medium ${color}`}>{data?.state ? data?.state : 'unknown'}</p>
            </div>
          </div>
        </div>
    </Link>
  )
}

export default RecentCard