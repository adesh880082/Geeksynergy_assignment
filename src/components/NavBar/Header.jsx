import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Header.css'

const Header = () => {

    const navigate = useNavigate();
    const [flag, setFlag] = useState(false);

  return (
    <div className='header-container'>
        <div className='logo' onClick={()=>navigate('/')}>Geeksynergy</div>
        <div>
          <div className='header-info' onClick={()=>setFlag((prev)=>!prev)}>Company Info</div>
          {
            flag ? (
              <div>
                <div className='box'></div>
                <div className='company-info'>
                <p>Company : <span>Geeksynergy Technologies Pvt. Ltd</span></p>
                <p>Address : <span>Sanjaynagar, Bengaluru-56</span></p>
                <p>Phone : <span>XXXXXXXX09</span></p>
                <p>Email : <span>XXXXXX@gmail.com</span></p>
                </div>
              </div>):(" ")
          }
        </div>
        <div className='auth'>
          <div onClick={()=> navigate('/login')} className='header-login'>Login</div>
          <div onClick={()=> navigate('/')} className='header-signup'>SignUp</div>
        </div>
    </div>
  )
}

export default Header