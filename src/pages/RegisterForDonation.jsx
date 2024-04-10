import React, { useState } from 'react'
import { blood_types, diseases, medicines } from '../constants';
import { Checkbox } from '../components'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";

const RegisterForDonation = () => {

  const [bloodtype, setBloodtype] = useState('');
  const [gender, setGender] = useState('');
  const [dob, setDob] = useState(new Date());
  const [hasDonated, sethasDonated] = useState(false);
  const [diseaseList, setDiseaseList] = useState([]);
  const [medicineList, setMedicineList] = useState([]);

  const handleDiseaseSelect = (e) => {
    const value = e.target.value;
    let newList = []
    if(diseaseList.includes(value)){
      newList = diseaseList.filter((disease) => {
        return disease !== value
      })
      console.log(newList)
    }
    else{
      newList = [...diseaseList, value];
    }
    setDiseaseList(newList);
    console.log(value)
  }

  const handleMedicineSelect = (e) => {
    const value = e.target.value;
    let newList = []
    if(medicineList.includes(value)){
      newList = medicineList.filter((disease) => {
        return disease !== value
      })
      console.log(newList)
    }
    else{
      newList = [...medicineList, value];
    }
    setMedicineList(newList);
    console.log(value)
  }

  const handleBloodChange = (e) => {
    setBloodtype(e.target.value)
    console.log(bloodtype)
  }

  const handleGenderChange = (e) => {
    setGender(e.target.value)
  }

  const handleDateChange = (newdate) => {
    setDob(newdate)
  }

  const handlehasDonatedChange = (e) => {
    sethasDonated(hasDonated => !hasDonated)
  }

  return (
    <>
      <div className='lg:mycontainer mx-auto max-lg:mx-10'>
        <div className='bg-blue-100 rounded-md my-10 p-10 flex items-center justify-center'>
          <div className='md:w-[50%]'>
            <h2 className='font-bold text-4xl text-slate-600'>Be the reason for someone's <span className='text-red-500'>heartbeat.</span><img src="/assets/icons/heart.svg" alt="heart beat" className='inline-block mx-2 opacity-70 bg-red-300 p-2 rounded-full'/></h2>
          </div>
          <div className='flex flex-col items-center relative max-md:hidden'>
            <div className='h-[100px] animate-bounce relative right-[78px] top-8'>
              <img src="/assets/images/blood_drop.svg" alt="drop" className='w-[100px]'/>
            </div>
            <div className='w-[80px] h-[40px] bg-red-800 absolute bottom-20 left-12 rounded-full blur-xl animate-bounce'></div>
            <div className='h-[200px] overflow-hidden'>
              <img src="/assets/images/hand.svg" alt="hand" className='w-[350px]'/>
            </div>
          </div>
        </div>
      </div>
      <div className='lg:w-[800px] mx-auto max-lg:mx-10'>
        <div className='card p-8 my-10'>
        <h3 className='font-bold text-3xl text-center my-4 mb-7 text-slate-500'>Register for donation Now!</h3>
        <form action="" className='flex flex-col mx-16 max-md:mx-3'>
          <div>
            <label htmlFor="bloodtype" className='text-label'>Select Your Blood Type</label>
            <div id='bloodtype' className='my-4 grid grid-cols-2 max-md:grid-cols-1 max-md:gap-y-2'>
              <div className='flex flex-col gap-2'>
                {blood_types.map((type, index) => {
                  if(index < 4){
                    return(
                      <label className='flex items-center' key={type}>
                        <input type="radio" value={type} checked={bloodtype===type} onChange={handleBloodChange} />
                        <span className='pl-2 text-sm font-medium text-slate-500 cursor-pointer'>{type}</span>
                      </label>
                    )
                  }
                })}
              </div>
              <div className='flex flex-col gap-2'>
                {blood_types.map((type, index) => {
                  if(index >= 4){
                    return(
                      <label className='flex items-center' key={type}>
                        <input type="radio" value={type} checked={bloodtype===type} onChange={handleBloodChange} />
                        <span className='pl-2 text-sm font-medium text-slate-500 cursor-pointer'>{type}</span>
                      </label>
                    )
                  }
                })}
              </div>
            </div>
          </div>
          <div>
            <label htmlFor="name" className='text-label'>Full Name</label>
            <div className='my-4 grid grid-cols-2 max-md:grid-cols-1 max-md:gap-y-2 max-md:my-2'>
              <input type="text" placeholder='First Name' className='form-input mr-10'/>
              <input type="text" placeholder='Last Name' className='form-input mr-10' />
            </div>
          </div>
          <div className='grid grid-cols-2 max-md:grid-cols-1 max-md:gap-y-2 items-baseline'>
            <div className='flex flex-col'>
              <label htmlFor="dob" className='text-label'>Birth Date</label>
              <div className='outline-none border-none p-2 bg-slate-100 rounded-md max-md:my-2 my-4 flex items-center gap-2 w-fit'>
                <img src="/assets/icons/date.svg" alt="date"  className='w-4 h-4 opacity-70'/>
                <DatePicker selected={dob} onChange={handleDateChange} 
                  placeholderText='Enter Suitable Date'
                  dateFormat='dd/MM/yyyy'
                  showYearDropdown
                  className='outline-none border-none text-sm font-bold text-slate-600 bg-slate-100 rounded-md'
                />
              </div>
            </div>
            <div>
              <label htmlFor="gender" className='text-label'>Gender</label>
              <div className='flex my-4 max-md:my-3 gap-[100px]'>
                <label className='flex items-center'>
                  <input type="radio" value={`male`} checked={gender==='male'} onChange={handleGenderChange} />
                  <span className='pl-2 text-sm font-medium text-slate-500 cursor-pointer'>Male</span>
                </label>
                <label className='flex items-center'>
                  <input type="radio" value={`female`} checked={gender==='female'} onChange={handleGenderChange} />
                  <span className='pl-2 text-sm font-medium text-slate-500 cursor-pointer'>Female</span>
                </label>
              </div>
            </div>
          </div>
          <div className='grid grid-cols-2 max-md:grid-cols-1 max-md:mt-2 max-md:gap-y-2'>
            <div className='flex flex-col'>
              <label htmlFor="phone" className='text-label'>Phone</label>
              <input type="text" className='form-input my-4 max-md:my-2 mr-10' placeholder='eg. 9867542315'/>
            </div>
            <div className='flex flex-col'>
              <label htmlFor="email" className='text-label'>Email</label>
              <input type="text" className='form-input my-4 max-md:my-2 mr-10' placeholder='eg. katie@gmail.com'/>
            </div>
          </div>
          <div className='grid grid-cols-2 max-md:grid-cols-1 max-md:gap-y-2 mt-3'>
            <div className='flex flex-col'>
              <label htmlFor="weight" className='text-label'>Weight</label>
              <input type="text" className='form-input my-4 max-md:my-2 mr-10' placeholder='eg. 70kg'/>
            </div>
            <div className='flex flex-col'>
              <label htmlFor="bmi" className='text-label'>BMI</label>
              <input type="text" className='form-input my-4 max-md:my-2 mr-10' placeholder='eg. 18.5kg/m2'/>
            </div>
          </div>
          <div className='grid grid-cols-2 max-md:grid-cols-1 max-md:gap-y-2 mt-3'>
            <div className='flex flex-col'>
              <label htmlFor="Hb" className='text-label'>Hb</label>
              <input type="text" className='form-input my-4 max-md:my-2 mr-10' placeholder='eg. 15.9g/dL'/>
            </div>
            <div className='flex flex-col'>
              <label htmlFor="BP" className='text-label'>BP</label>
              <input type="text" className='form-input my-4 max-md:my-2 mr-10' placeholder='eg. 119/70mm Hg'/>
            </div>
          </div>
          <div className='mt-4'>
            <label htmlFor="hasdonated" className='text-label'>Have you donated previously?</label>
            <div className='flex my-4 max-md:my-2 gap-[100px]'>
              <label className='flex items-center'>
                <input type="radio" value={`male`} checked={hasDonated} onChange={handlehasDonatedChange} />
                <span className='pl-2 text-sm font-medium text-slate-500 cursor-pointer'>Yes</span>
              </label>
              <label className='flex items-center'>
                <input type="radio" value={`female`} checked={!hasDonated} onChange={handlehasDonatedChange} />
                <span className='pl-2 text-sm font-medium text-slate-500 cursor-pointer'>No</span>
              </label>
            </div>
          </div>
          <div>
            <label htmlFor="hasdonated" className='text-label'> Do you suffer from or have suffered from any of the followind diseases? </label>
            <div className='my-4 grid grid-cols-2 max-md:grid-cols-1 gap-1'>
              {diseases.map((disease, index) => {
                return (
                  <Checkbox label={disease} isChecked={diseaseList.includes(disease)} handleSelect={handleDiseaseSelect} key={disease}/>
                )
              })}
            </div>
          </div>
          <div>
            <label htmlFor="medicine" className='text-label'> Are you taking or have you taken any of these in the past 72 hours? </label>
            <div className='my-4 grid grid-cols-2 max-md:grid-cols-1 gap-1'>
              {medicines.map((medicine, index) => {
                return (
                  <Checkbox label={medicine} isChecked={medicineList.includes(medicine)} handleSelect={handleMedicineSelect} key={medicine}/>
                )
              })}
            </div>
          </div>
          <div className='md:col-span-2 flex flex-col gap-3 max-md:w-full mb-4'>
            <label htmlFor="comments" className='text-label'>Enter comments</label>
            <textarea name="comments" id="comments" rows={5} maxLength={2200} className='outline-none border-none p-2 bg-slate-100 rounded-md text-slate-600 font-medium text-sm w-full'></textarea>
          </div>
          <button className='btn-primary my-4 max-md:my-2 self-start'>Submit</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default RegisterForDonation