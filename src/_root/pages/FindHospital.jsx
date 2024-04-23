import React, { useEffect, useState } from 'react'
import { MapWrapper } from '../../components'


const FindHospital = () => {
  const [userCoords, setUserCoords] = useState(null);
  const [hospitalCoords, setHospitalCoords] = useState([73.8567, 18.5204]);

  const success = (pos) => {
    const latitude = pos.coords.latitude;
    const longitude = pos.coords.longitude;
    setUserCoords([longitude, latitude]);
    console.log(latitude, longitude);
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


  return (
    <>
      <h3>Find Hospital</h3>
      {userCoords && hospitalCoords && <MapWrapper userCoords={userCoords} hostipalCoords={hospitalCoords}/>}
    </>
  )
}

export default FindHospital