import React, { useEffect, useState } from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";

const BookAppointment = () => {
  const [time, setTime] = useState('morning')
  const [date, setDate] = useState(new Date());

  const handleChange = (e) => {
    setTime(e.target.value)
    console.log(time)
  }

  useEffect(() => {
    console.log(date)
  }, [date])

  const handleDateChange = (newdate) => {
    setDate(newdate)
  }

  return (
    <div className='lg:mycontainer my-10 mx-auto'>
      <div className='flex card max-lg:mx-10 max-lg:justify-center'>
        <img src="./assets/images/book-appointment.svg" alt="book" className='w-[350px] p-10 mr-5 hidden lg:block'/>
        <form className='grid grid-cols-2 max-md:flex flex-col gap-x-[100px] gap-y-10 items-baseline my-5'>
          <div className='w-[350px] max-sm:w-[250px]'>
            <h3 className='text-slate-500 font-medium text-md mb-5'>Contact Information</h3>
            <div className='flex flex-col'>
              <label htmlFor="name" className='text-sm text-slate-400 font-medium tracking-normal'>Name</label>
              <input type="text" id='name' className='outline-none border-none p-2 mb-1 bg-slate-100 rounded-md text-slate-600 font-medium text-sm' />
            </div>
            <div className='flex flex-col'>
              <label htmlFor="email" className='text-sm text-slate-400 font-medium tracking-normal'>Email</label>
              <input type="text" id='email' className='outline-none border-none p-2 mb-1 bg-slate-100 rounded-md text-slate-600 font-medium text-sm' />
            </div>
            <div className='flex flex-col'>
              <label htmlFor="phone" className='text-sm text-slate-400 font-medium tracking-normal'>Phone</label>
              <input type="text" id='phone' className='outline-none border-none p-2 mb-1 bg-slate-100 rounded-md text-slate-600 font-medium text-sm' />
            </div>
          </div>
          <div className='flex flex-col justify-between'>
            <div className='flex flex-col gap-2 mb-5'>
              <h3 className='text-slate-500 font-medium text-md mb-3'>Best time to call you</h3>
              <label>
                <input type="radio" value="morning" checked={time==='morning'} onChange={handleChange}/>
                <span className='pl-2 text-sm font-medium text-slate-500 cursor-pointer'>Morning</span>
              </label>
              <label>
                <input type="radio" value="afternoon" checked={time==='afternoon'} onChange={handleChange} />
                <span className='pl-2 text-sm font-medium text-slate-500 cursor-pointer'>Afternoon</span>
              </label>
              <label>
                <input type="radio" value="evening" checked={time==='evening'} onChange={handleChange} />
                <span className='pl-2 text-sm font-medium text-slate-500 cursor-pointer'>Evening</span>
              </label>

            </div>
            <div>
              <h3 className='text-slate-500 font-medium text-md mb-3'>Select Suitable Date & Time</h3>
              
              <DatePicker selected={date} onChange={handleDateChange} 
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
          <div className='md:col-span-2 flex flex-col gap-3 max-md:w-full'>
            <label htmlFor="comments" className='text-slate-500 font-medium text-md'>Enter comments</label>
            <textarea name="comments" id="comments" rows={5} maxLength={2200} className='outline-none border-none p-2 mb-1 bg-slate-100 rounded-md text-slate-600 font-medium text-sm w-full'></textarea>
          </div>
          <button className='btn-primary mb-5 w-[100px]'>Book</button>
        </form>
      </div>
    </div>
  )
}

export default BookAppointment