// import React, {useState} from "react";
// import { Link } from "react-router-dom";
// import { FaMobileAlt, FaLock } from 'react-icons/fa';

// const LoginForm = () => {

//   const [values, setValues] = useState({
//     email:'',
//     password:''
//   })

//    const handleInput=(event) => {
//           setValues(prev => ({...prev, [event.target.name]:[event.target.value]}))
//    }

//    const handleSubmit= (event) => {
//     event.preventDefault();
//     setValues(validation(values))
//    }

//    const [errors, setErrors] = useState({});

//   return ( 
//           <div className='wrapper'>
//       <form onSubmit={handleSubmit}>
//         <h1>Login</h1>

//         <div className='Input-Box'>
//           <input type='email' placeholder='Email' name="email" onChange={handleInput} required />
//           <FaMobileAlt className='icon' />
//         </div>

//         <div className='Input-Box'>
//           <input type='password' placeholder='Password' name="password" onChange={handleInput} required />
//           <FaLock className='icon' />
//         </div>

//         <div className="remember-forget">
//           <label><input type='checkbox' /> Remember Me</label>
//           <Link to='#'>Forget Password</Link> {/* Use Link from react-router-dom */}
//         </div>

//         <button type='submit' className='b1'>Login</button>

//         <div className='registration-link'>
//           <p>New Registration? <Link to="/register">Register Here</Link></p>
//         </div>
//       </form>
//     </div>
//    );
// }
 
// export default LoginForm;


import { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { z } from 'zod'; // Import z from zod
import '../login.css';
import { useLoginUserMutation } from "../../app/services/authApi";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../app/features/authSlice";
import { identityTransform } from "ol/proj";

const Login = () => {
  const { user } = useSelector(state => state.auth)

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessageText] = useState('')
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const [ loginUser, {data, isLoading, isSuccess, isError} ] = useLoginUserMutation();
  const dispatch = useDispatch();


  const schema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
  });

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = { username: email, email, password }
    try{
      await loginUser(newUser);
    }
    catch(e){
      console.log(e)
    }
  }

  useEffect(() => {
    if(isSuccess){
      console.log(data);
      localStorage.setItem('user', JSON.stringify(data.user))
      dispatch(setUser(data))
      navigate('/')
    }
    if(isError){
      console.log('failed to login')
    }
  }, [isSuccess, isError])

  return (
    <div className="login">
    <div className='wrapper'>
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>

        <div className='Input-Box'>
          <input type='email' placeholder='Username or Email' value={email} onChange={handleEmailChange} required />
          <img src="/assets/icons/call.svg" className="icon"/>
        </div>

        <div className='Input-Box'>
          <input type='password' placeholder='Password' value={password} onChange={handlePasswordChange} required />
          <img src="/assets/icons/password.svg" className="icon"/>
        </div>

        <div className="remember-forget">
          <label><input type='checkbox' /> Remember Me</label>
        </div>
        <div className="forget-password">
        <Link to='#' >Forget Password</Link> {/* Use Link from react-router-dom */}
        </div>

        <button type='submit' className='b1' disabled={isLoading}>{isLoading ? `loading...` : `Login`}</button>

        <div className='registration-link'>
          <p>New Registration? <Link to="/sign-up">Register Here</Link></p>
        </div>
      </form>
      
    </div>
    <img src="/assets/images/loginshow.svg" className="" width="500" height="600" alt="Diseases" />
    </div>
  )
}

export default Login;