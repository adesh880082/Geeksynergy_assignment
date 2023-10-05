import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import './Login.css'
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';




const Login = () => {

    const [formData, setFormData] = useState({email: "", password: ""});

    const [showPassword, setShowPassword] = useState(true);

    const navigate = useNavigate();

    const onChangeHandler = (event) => {
        setFormData((prev)=> ({
            ...prev,
            [event.target.name] : event.target.value
        }))
    }

    function submitHandler (e){
        e.preventDefault();
        console.log("Form Data", formData);
        const data = JSON.parse(localStorage.getItem(formData.email));
        if(!data){
            return toast.error("Please signUp First");
        }
        else if(data.password !== formData.password){
            return toast.error("Wrong Password");
        }
        else{
            toast.success("Successfully Login")
            navigate("/movieapidetails");
        }
        // try{
        //     check in database
        //     toast.success
        //     navigate
        // }catch(error){
        //     toast.error("Login failed");
        // }
    }


  return (
    <div className='container'>
        <div className='heading'>Login form</div>
        <div className='form'>
        <form onSubmit={submitHandler}>
            <label className='label'>
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
            <label className='label'>
                <p>Password<sup style={{color: "red", fontSize: "18px"}}>*</sup></p>
                <div className='passwordField'>
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

            <div className='centerButton'><button className='button'>Login</button></div>
            <div className='lastButton'>
                <div style={{fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '10px'}}>If not signup yet then click on</div>
                <div>
                    <button className='button' onClick={()=> navigate("/")}>
                        Signup
                    </button>
                </div>
            </div>


        </form>
        </div>
    </div>
  )
}

export default Login