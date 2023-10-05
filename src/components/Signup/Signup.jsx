import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import './Signup.css'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Signup = () => {

    const [formData, setFormData] = useState({name: "", number: "", email: "", password: "", confirmPassword: "", profession: ""});

    const [showPassword, setShowPassword] = useState(true);
    const [showConfirmPassword, setShowConfirmPassword] = useState(true);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const onChangeHandler = (event) => {
        setFormData((prev)=> ({
            ...prev,
            [event.target.name] : event.target.value
        }))
    }

    function submitHandler (e){
        e.preventDefault();
        console.log("form Data :- ", formData);
        setLoading(true);
        try{
            if(formData.password !== formData.confirmPassword){
                toast.error("Your password and confirm password is not matching");
            }
            else{
                localStorage.setItem(`${formData.email}`, JSON.stringify(formData));
                toast.success("SignUp Successfully")
                navigate('/login')
            }
        }catch(error){
            toast.error("Something went wrong");
        }
        setLoading(false);
    }

  return (
    <div className='signup-margin'>

        <div className='signup-container'>
        <div className='signup-heading'>Signup form</div>
        <div className='signup-form'>
        <form onSubmit={submitHandler}>

            <label className='signup-label'>
                <p>Name<sup style={{color: "red", fontSize: "18px"}}>*</sup></p>
                <input
                    required
                    type='text'
                    name="name"
                    placeholder='Enter Your Full Name'
                    value={formData.name}
                    onChange={onChangeHandler}
                    className=''
                />
            </label>

            <label className='signup-label'>
                <p>Profession<sup style={{color: "red", fontSize: "18px"}}>*</sup></p>
                <select
                  name='profession'
                  value={formData.profession}
                  onChange={onChangeHandler}
                  required
                >
                    <option disabled={true} value="">--Select Your Profession--</option>
                    <option value="Web-Developer">Web-Developer</option>
                    <option value="Network-Engineer">Network-Engineer</option>
                    <option value="DataBase-Engineer">DataBase-Engineer</option>
                    <option value="Digital-Marketer">Digital-Marketer</option>
                </select>
            </label>

            <label className='signup-label'>
                <p>Phone Number<sup style={{color: "red", fontSize: "18px"}}>*</sup></p>
                <input
                    required
                    type='number'
                    name="number"
                    placeholder='Enter Your Mobile/Phone number '
                    value={formData.number}
                    onChange={onChangeHandler}
                    className=''
                />
            </label>

            <label className='signup-label'>
                <p>Email id<sup style={{color: "red", fontSize: "18px"}}>*</sup></p>
                <input
                    required
                    type='text'
                    name="email"
                    placeholder='Enter Your Registered email-id'
                    value={formData.email}
                    onChange={onChangeHandler}
                    className=''
                />
            </label>

            <label className='signup-label'>
                <p>Password<sup style={{color: "red", fontSize: "18px"}}>*</sup></p>
                <div className='signup-passwordField'>
                <input
                    required
                    type={showPassword ? "password" : "text"}
                    name="password"
                    placeholder='Enter Your Password'
                    value={formData.password}
                    onChange={onChangeHandler}
                    className=''
                />
                <span onClick={()=>setShowPassword((prev)=> !prev)}>
                    { showPassword ?
                        (<AiOutlineEyeInvisible fontSize={24} fill='#000000' />) : (<AiOutlineEye fontSize={24} fill='#000000'/>)
                    }
                </span>
                </div>
            </label>

            <label className='signup-label'>
                <p>Confirm Password<sup style={{color: "red", fontSize: "18px"}}>*</sup></p>
                <div className='signup-passwordField'>
                <input
                    required
                    type={showConfirmPassword ? "password" : "text"}
                    name="confirmPassword"
                    placeholder='Enter Your confirm password'
                    value={formData.confirmPassword}
                    onChange={onChangeHandler}
                    className=''
                />
                <span onClick={()=>setShowConfirmPassword((prev)=> !prev)}>
                    { showConfirmPassword ?
                        (<AiOutlineEyeInvisible fontSize={24} fill='#000000' />) : (<AiOutlineEye fontSize={24} fill='#000000'/>)
                    }
                </span>
                </div>
            </label>


                <div className='signup-centerButton'><button className='signup-button'>Signup</button></div>
                <div className='signup-lastButton'>
                    <div style={{fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '10px'}} disabled={loading}>If already signup then click on below button for Login</div>
                    <div><button className='signup-button' onClick={()=> navigate("/login")} disabled={loading}>Login</button></div>
                </div>


        </form>
        </div>
    </div>

    </div>
  )
}

export default Signup