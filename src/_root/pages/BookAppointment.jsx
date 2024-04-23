import React, { useEffect, useReducer, useState } from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useGetUserDetailsMutation } from '../../app/services/authApi';
import { useBookAppointmentMutation } from '../../app/services/appApi';

const initialState = {
  hos_name: '' , doc_name: '' , schedule_on: new Date() , firstname: '' , email: '' , phone: '' , comments: '' , time_of_day: ''
}

const reducer = (state, action) => {
  switch(action.type){
    case 'HOS_NAME':
      return {...state, hos_name: action.payload}
    case 'DOC_NAME':
      return {...state, doc_name: action.payload}
    case 'SCHEDULE':
      return {...state, schedule_on: action.payload}
    case 'FIRSTNAME':
      return {...state, firstname: action.payload}
    case 'EMAIL':
      return {...state, email: action.payload}
    case 'PHONE':
      return {...state, phone: action.payload}
    case 'COMMENTS':
      return {...state, comments: action.payload}
    case 'TIME_OF_DAY':
      return {...state, time_of_day: action.payload}
  }
}



const BookAppointment = () => {
  const [ state, dispatch ] = useReducer(reducer, initialState);
  const [getUserDetails, { data, isSuccess, isError, isLoading }] = useGetUserDetailsMutation();
  const [bookAppointment, { data: appointment, isSuccess: isBookSuccess, isError: isBookError, isLoading: isBookLoading }] = useBookAppointmentMutation();
  const { user } = useSelector(state => state.auth)

  async function getUser(){
    await getUserDetails(user)
  }

  useEffect(() => {
    if(!data)
      getUser();
    if(data){
      dispatch({type: 'FIRSTNAME', payload: data.firstname})
      dispatch({type: 'EMAIL', payload: data.email})
    }
  }, [isSuccess, data])


  const handleChange = (e) => {
    dispatch({type: 'TIME_OF_DAY', payload: e.target.value})
  }

  const handleDateChange = (newdate) => {
    dispatch({type: 'SCHEDULE', payload: newdate})
  }

  const handleSubmit = async (e) => {
    await bookAppointment(state)
    console.log(isBookSuccess)
    if(isBookSuccess){
      console.log(appointment)
    }
  }

  return (
    <div className='lg:mycontainer my-10 mx-auto'>
      <div className='flex card max-lg:mx-10 max-lg:justify-center'>
        <img src="./assets/images/book-appointment.svg" alt="book" className='w-[350px] p-10 mr-5 hidden lg:block'/>
        <form className='grid grid-cols-2 max-md:flex flex-col gap-x-[100px] gap-y-8 items-baseline my-5 max-md:px-10' onSubmit={(e) => e.preventDefault()}>
          <div className='w-[350px] max-sm:w-[250px]'>
            <h3 className='text-slate-500 font-medium text-md mb-5'>Contact Information</h3>
            <div className='flex flex-col'>
              <label htmlFor="name" className='text-sm text-slate-400 font-medium tracking-normal'>Name</label>
              <input type="text" id='name' className='outline-none border-none p-2 mb-1 bg-slate-100 rounded-md text-slate-600 font-medium text-sm' value={state.firstname} onChange={(e) => dispatch({type: 'FIRSTNAME', payload: e.target.value})}/>
            </div>
            <div className='flex flex-col'>
              <label htmlFor="email" className='text-sm text-slate-400 font-medium tracking-normal'>Email</label>
              <input type="text" id='email' className='outline-none border-none p-2 mb-1 bg-slate-100 rounded-md text-slate-600 font-medium text-sm' value={state.email} onChange={(e) => dispatch({type: 'EMAIL', payload: e.target.value})}/>
            </div>
            <div className='flex flex-col'>
              <label htmlFor="phone" className='text-sm text-slate-400 font-medium tracking-normal'>Phone</label>
              <input type="text" id='phone' className='outline-none border-none p-2 mb-1 bg-slate-100 rounded-md text-slate-600 font-medium text-sm' value={state.phone} onChange={(e) => dispatch({type: 'PHONE', payload: e.target.value})}/>
            </div>
          </div>
          <div className='flex flex-col justify-between'>
            <div className='flex flex-col gap-2 mb-5'>
              <h3 className='text-slate-500 font-medium text-md mb-3'>Best time to call you</h3>
              <label>
                <input type="radio" value="morning" checked={state.time_of_day==='morning'} onChange={handleChange}/>
                <span className='pl-2 text-sm font-medium text-slate-500 cursor-pointer'>Morning</span>
              </label>
              <label>
                <input type="radio" value="afternoon" checked={state.time_of_day==='afternoon'} onChange={handleChange} />
                <span className='pl-2 text-sm font-medium text-slate-500 cursor-pointer'>Afternoon</span>
              </label>
              <label>
                <input type="radio" value="evening" checked={state.time_of_day==='evening'} onChange={handleChange} />
                <span className='pl-2 text-sm font-medium text-slate-500 cursor-pointer'>Evening</span>
              </label>

            </div>
            <div>
              <h3 className='text-slate-500 font-medium text-md mb-3'>Select Suitable Date & Time</h3>
              
              <DatePicker selected={state.schedule_on} onChange={handleDateChange} 
              placeholderText='Enter Suitable Date'
              dateFormat='dd/MM/yyyy hh:mm'
              showTimeSelect
              timeIntervals={30}
              timeFormat='hh:mm'
              showYearDropdown
              className='outline-none border-none text-sm font-bold text-slate-600 p-2 bg-slate-100 rounded-md'
              />
            </div>
          </div>
          <div className='w-[350px] max-sm:w-[250px]'>
            <h3 className='text-slate-500 font-medium text-md mb-5'>Hospital Information</h3>
            <div className='flex flex-col'>
              <label htmlFor="name" className='text-sm text-slate-400 font-medium tracking-normal'>Hospital Name</label>
              <input type="text" id='hos_name' className='outline-none border-none p-2 mb-1 bg-slate-100 rounded-md text-slate-600 font-medium text-sm' value={state.hos_name} onChange={(e) => dispatch({type: 'HOS_NAME', payload: e.target.value})}/>
            </div>
            <div className='flex flex-col'>
              <label htmlFor="email" className='text-sm text-slate-400 font-medium tracking-normal'>Doctor Name</label>
              <input type="text" id='doc_name' className='outline-none border-none p-2 mb-1 bg-slate-100 rounded-md text-slate-600 font-medium text-sm' value={state.doc_name} onChange={(e) => dispatch({type: 'DOC_NAME', payload: e.target.value})}/>
            </div>
          </div>
          <div className='md:col-span-2 flex flex-col gap-3 max-md:w-full'>
            <label htmlFor="comments" className='text-slate-500 font-medium text-md'>Enter comments</label>
            <textarea name="comments" id="comments" rows={5} maxLength={2200} className='outline-none border-none p-2 mb-1 bg-slate-100 rounded-md text-slate-600 font-medium text-sm w-full' value={state.comments} onChange={(e) => dispatch({type: 'COMMENTS', payload: e.target.value})}></textarea>
          </div>
          <button className='btn-primary mb-5 w-[100px]' onClick={handleSubmit}>{isBookLoading ? `loading` : `Book`}</button>
        </form>
      </div>
    </div>
  )
}

export default BookAppointment