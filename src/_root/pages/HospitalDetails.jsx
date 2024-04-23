import React, { useEffect, useState } from 'react'
import MapWrapper from '../../components/MapWrapper'
import { Link, useLocation } from 'react-router-dom';

const HospitalDetails = () => {

  const [userCoords, setUserCoords] = useState(null);
  const [hospitalCoords, setHospitalCoords] = useState([73.8572, 18.4593]);
  const { state } = useLocation();

  const success = (pos) => {
    const latitude = pos.coords.latitude;
    const longitude = pos.coords.longitude;
    setUserCoords([longitude, latitude]);
  }

  const error = () => {
    console.log("Failed to get location");
  }

  useEffect(() => {
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(success, error);
    }
    else{
      console.log("GPS not found");
    }
    setHospitalCoords([state?.longitude, state?.latitude])
  }, [])

  const hosTypes = state?.types
  let color = 'text-slate-400';
  if(state?.state?.toLowerCase().includes('close')){
    color = 'text-red-400'
  }
  else if(state?.state?.toLowerCase().includes('open')){
    color = 'text-green-400'
  }


  return (
    <section className='w-full flex justify-center items-center'>
          <div className='mycontainer'>
            <div className='card flex justify-between my-10 max-lg:flex-col'>
                <div className='flex flex-col max-lg:flex-row gap-2 justify-center items-center m-5 pr-4 border-r-gray-100 lg:border-r-2 max-lg:justify-around max-sm:flex-col'>
                    <img src={state?.photos[0].src} alt="hospital image" className='h-[200px] w-[250px] rounded-md shadow-md'/>
                    <div className='flex flex-col gap-2 items-center'>
                      <h3 className='font-bold text-xl tracking-tight text-blue-400 mb-2'>{state?.name}</h3>
                      <p className='flex gap-1 items-center text-slate-500 text-sm font-medium'><img src="assets/icons/star.svg" alt="star" className='w-4 h-4'/>{`${state?.rating} (${state.review_count})`}</p>
                      <p className='text-slate-500'><a href="mailto: bhartihospital@gmail.com">{state?.website}</a></p>
                      <div className='flex gap-2 items-center'>
                          <img src="/assets/icons/location1.svg" alt="location" className='w-6, h-6'/>
                          <p className='text-sm text-slate-500'>{state?.city}</p>
                      </div>
                    </div>
                </div>
                <div className='flex-1 m-5 '>
                    <p className='text-slate-500 font-medium text-md mb-5'>Official Information</p>
                    <div className='flex justify-between items-center pb-5 border-b-2 border-b-gray-100 max-md:flex-wrap gap-4'>
                        <div className='flex gap-2'>
                            <img src="assets/icons/call.svg" alt="phone" className='opacity-50'/>
                            <a href="tel: +912040555555" className='text-slate-500'>{state?.phone_number}</a>
                        </div>
                        <div className='flex flex-col gap-1'>
                            <p className='text-slate-500 font-semibold text-sm'>Full Address</p>
                            <p className='text-slate-500 text-sm md:max-w-[500px]'>{state?.full_address}</p>
                        </div>
                    </div>
                    <div className='my-5 flex justify-between items-center pb-5 border-b-2 border-b-gray-100 max-md:flex-wrap gap-4'>
                        <div className=''>
                          <p className='text-slate-500 text-sm font-semibold mb-1'>Website</p>
                        <Link to={state?.website} target='_blank' className='font-medium text-blue-500'>{state?.website} </Link>
                      </div>
                      <div className='md:w-[500px]'>
                        <p className='text-slate-500 text-sm font-semibold mb-1'>State</p>
                        <p className={`text-sm font-medium ${color}`}>{state?.state ? state?.state : 'unknown'}</p>
                      </div>
                    </div>
                    <div className='my-5'>
                      <p className='font-semibold text-slate-500 text-sm mb-5'>Hospital Type</p>
                      <div className='flex gap-5 items-center max-md:flex-wrap'>
                        {hosTypes.map((type) => (
                          <p className='bg-gray-300 px-4 py-1 text-sm rounded-full text-slate-600 font-medium' key={type}>{type}</p>
                        ))}
                      </div>
                    </div>
                </div>
            </div>
            <div className='card flex justify-between items-center p-10 my-10 max-sm:flex-col'>
              <div className='flex-1'>
                <div className='flex justify-center flex-1'>
                  <div className='border-r-2 border-r-gray-100 pr-4'>
                    <p className='text-md font-semibold text-slate-500'>Your Location</p>
                    <p className='font-bold text-slate-600'>{state?.city}</p>
                  </div>
                  <div className='pl-4'>
                    <p className='text-md font-semibold text-slate-500'>Distance</p>
                    <p className='font-bold text-slate-600'>1.2km</p>
                  </div>
                </div>
                <div className='text-center my-8'>
                  <Link to={state?.place_link} target='_blank' className='btn-primary'>Open in Google Maps Instead</Link>    
                </div>
              </div>
              <div className='mt-2 flex justify-center'>
                { userCoords && hospitalCoords && <MapWrapper userCoords={userCoords} hospitalCoords={hospitalCoords}/> }
              </div>
            </div>
          </div>
    </section>
  )
}

export default HospitalDetails