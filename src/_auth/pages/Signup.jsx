import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import '../signup.css';
import { useSignupUserMutation } from "../../app/services/authApi";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../app/features/authSlice";

const Signup = () => {
  const [showModal, setShowModal] = useState(false);
  const [firstname, setFName] = useState('');
  const [lastname, setLName] = useState('');
  const [Number, setNumber] = useState('');
  const [age, setAge] = useState('');
  const [email, setemail] = useState('');
  const [dob, setdob] = useState(new Date());
  const [bloodGroup, setBloodGroup] = useState('');
  const [Address, setAddress] = useState('');
  const [Code, setCode] = useState('425201');
  const [password, setpassword] = useState('');
  const [cpassword, setCpassword] = useState('');
  const [errors, setErrors] = useState({});
  const [messageColor, setMessageColor] = useState('');
  const [messageText, setMessageText] = useState('');

  const [signupUser, { data, isError, isSuccess, isLoading }] = useSignupUserMutation();
  const dispatch = useDispatch();

  const navigate = useNavigate();


  const handleFirstNameChange = (e) => {
    setFName(e.target.value);
  }

  const handleLastNameChange = (e) => {
    setLName(e.target.value);
  }

  const handleMobileChange = (e) => {
    setNumber(e.target.value);
  }

  const handleAge = (e) => {
    setAge(e.target.value);
  }

  const handleEmailChange = (e) => {
    setemail(e.target.value);
  }

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  }

  const handleCodeChange = (e) => {
    setCode(e.target.value);
  }
  const handleBloodGroupChange = (e) => {
    setBloodGroup(e.target.value);
  };


  const handlePasswordChange = (e) => {
    const enteredPassword = e.target.value;
    setpassword(enteredPassword);
  };
  
  const handleCPasswordChange = (e) => {
    const enteredCPassword = e.target.value;
    setCpassword(enteredCPassword);
    if (password === enteredCPassword) {
      setMessageColor('green');
      setMessageText('Passwords match!');
    } else {
      setMessageColor('red');
      setMessageText("Passwords don't match");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const newUser = { username: firstname+lastname, email, password, firstname, lastname, dob }
      await signupUser(newUser)
    }
    catch(e){
      console.log(e);
    }
  };

  useEffect(() => {
    if(isSuccess){
      console.log(data);
      localStorage.setItem('user', JSON.stringify(data.user))
      dispatch(setUser(data))
    }
    if(isError){
      console.log('failed to sign up')
    }
  }, [isSuccess, isError])
  

  
  const closeModal = () => {
    setShowModal(false);
  }
  
  
  return (
    <div className="signup">
    <div className='wrapper'>
    <form onSubmit={handleSubmit}>
      <h1>Signup</h1>

      <div className='Input-Box'>
        <input
            type='text'
            id='firstname'
            placeholder='First Name'
            value={firstname}
            onChange={handleFirstNameChange}
            required
        />
        <input
            type='text'
            id='lastname'
            placeholder='Last Name'
            value={lastname}
            onChange={handleLastNameChange}
            required
        />
      </div>

        <div className='Input-Box'>
          <input type='tel' placeholder='Mobile Number ' value={Number} onChange={handleMobileChange} required />
          <input type='age' placeholder='Age' value={age} onChange={handleAge} required />
          <div>
          </div>
         </div>
         <div className='Input-Box'>
          <input type='email' placeholder='Email' value={email} onChange={handleEmailChange} required />
        </div>
      <div className='Input-Box'>
        <DatePicker className="Date"
          selected={dob}
          onChange={date => setdob(date)}
          placeholderText='Date of Birth'
          dateFormat='dd/MM/yyyy'
          showYearDropdown
          scrollableYearDropdown
          yearDropdownItemNumber={70}
          popperPlacement="bottom"
        />

      <select className="dropdown" value={bloodGroup} onChange={handleBloodGroupChange}>
        <option value="">Select Blood Group</option>
        <option value="A+">A+</option>
        <option value="A-">A-</option>
        <option value="B+">B+</option>
        <option value="B-">B-</option>
        <option value="AB+">AB+</option>
        <option value="AB-">AB-</option>
        <option value="O+">O+</option>
        <option value="O-">O-</option>
      </select> 
    
      </div>
  


        <div className='Input-Box'>
          <input type='text' placeholder='Residents Address' value={Address} onChange={handleAddressChange} required />
        </div>
        <div className='Input-Box'>
          <input type='password' placeholder='Password' value={password} onChange={handlePasswordChange} required />
          <input type='password' placeholder='Confirm-Password' value={cpassword} onChange={handleCPasswordChange} required />
        </div>
       
        {Object.keys(errors).map((key) => (
        <p key={key} className="error-message">{errors[key]}</p>
      ))}
      {/* Display message text */}
      <p id="Message" style={{ color: messageColor }}>{messageText}</p>
      {/* Modal for password mismatch */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <p className="error-message">Passwords do not match</p>
          </div>
        </div>
      )}
      <button type='submit' className='b1' disabled={isLoading}>{isLoading? `loading` : 'Sign Up'}</button>
      {/* Registration link */}
      <div className='registration-link'>
        <p>Already have an account? <Link to="/sign-in">Login Here</Link></p>
      </div>
    </form>
   
  </div>
  <img src="/assets/images/signupshow.svg" className="" width="500" height="600" alt="Diseases" />
  </div>
  );

      };
    

export default Signup;