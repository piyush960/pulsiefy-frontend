import React, { useEffect, useState } from 'react'
import { useFindHospitalsMutation } from '../../app/services/appApi';
import { RecentCard } from '../../components';

const Symptoms = () => {

  const [userCoords, setUserCoords] = useState(null);
  const [hospitalCoords, setHospitalCoords] = useState([73.8572, 18.4593]);
  const [query, setQuery] = useState('')
  const [findHospitals, {data: hos_data, isSuccess, isError, isLoading}] = useFindHospitalsMutation();

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
  }, [])

  const handleSubmit = async (e) => {
    const data = {
      query,
      lat: userCoords[1],
      lon: userCoords[0]
    }
    await findHospitals(data);
    if(isSuccess){
      console.log(hos_data)
    }
  }

  return (
    <div className='my-10 '>
        <div className='lg:mycontainer mx-auto max-lg:px-10'>
            <div className='card p-5 flex justify-center items-center max-md:flex-col-reverse'>
                <div className='w-[500px] max-lg:w-[300px] '>
                    <h3 className='text-2xl text-slate-600 font-bold'>Enter Your Disease</h3>
                    <p className='text-sm text-slate-500 font-bold pt-1'>We'll find the best hospital near you.</p>
                    <form className='' onSubmit={(e) => e.preventDefault()}>
                        <input type="text" className='font-bold text-slate-500 text-sm outline-none border-none my-4 p-2 bg-slate-100 rounded-md' value={query} onChange={(e) => setQuery(e.target.value)}/>
                        <button className='btn btn-primary block' onClick={handleSubmit}>{isLoading ? `loading...` : `Find Hospital`}</button>
                    </form>
                </div>
                <div className='max-md:mb-10'>
                    <img src="/assets/images/disease.svg" alt="disease" className='w-[400px]'/>
                </div>
            </div>
        </div>
        <div className='lg:mycontainer mx-auto max-lg:mx-10 grid grid-cols-3 max-lg:grid-cols-2 max-md:flex-col max-md:flex gap-5 my-10 '>
          {hos_data?.data?.map((hospital) => (
            <RecentCard key={hospital?.business_id} data={hospital}/>
          ))}
        </div>
    </div>
  )
}

export default Symptoms