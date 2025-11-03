import React, { useState } from 'react'
import { TbShoppingCartDollar } from 'react-icons/tb';
import { AiOutlineMail } from 'react-icons/ai';
import { FaAt } from 'react-icons/fa';
import { FaRegEye } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function Login() {
    const [login, setLogin] = useState('')
    const [email, setEmail] = useState('')
    const [password, setpassword] = useState('')


    if (!email ||!password) {
      toast.error('All field are required')
      return;
    }

    if (!emailCheck(email)){
      toast.error('Invalid Email Address')
      return;
    }

    if (!passwordCheck(password)){
      toast.error('password is too weak')
      return;
    }

    const emailCheck = (email)=>{
    let emailVery =/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    return emailVery.test(email)

  }

  const passwordCheck = (password)=>{
    let passwordVery =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    return passwordVery.test(password)

  }

  return (
    <>
      <div className='text-[white] h-full px-4 bg-[#33241e]'>
        <div className=' justify-center flex'style={{fontFamily: 'Ubuntu', color: 'white'}}>
          <div className='shadow w-[50%] bg-[brown]/10 backdrop-blur-lg font-bold rounded-2xl p-7 mt-[10%] '>
            <h1 className='text-center mb-17 animate-pulse tracking-[15px]' style={{fontFamily: 'Berkshire Swash', fontSize: 60}}>Login Page</h1>
            <h2 className=''>Welcome Back !</h2>
            <p className='text-[gray] text-[13px]'>We are happy to see you again</p>
            <div className='flex justify-center items-center mt-[40px] text-white flex-col gap-7'>
              <div className='border rounded-[38px] w-[60%] h-[7vh] flex  place-content-between'>
                <button className="px-9 py-2.5 rounded-3xl text-black hover:bg-white hover:text-[#241a14] transition duration-300" >Login</button>
                <Link to='/register'>
                  <button className="px-9 py-2.5 rounded-3xl text-black hover:bg-white hover:text-[#241a14] transition duration-300">Register</button>
                </Link>
              </div>
              <div className='border rounded-[38px] w-[60%] h-[7vh] flex items-center p-2 gap-7 place-content-between px-3'>
                <input className='w-[80%]' type="text" placeholder='Enter your email'/>
                <AiOutlineMail color='orangered' size={20}/>
              </div>
              <div className='border rounded-[38px] w-[60%] h-[7vh] flex items-center p-2 gap-7 place-content-between px-3'>
                <input className='w-[100%]' type="password" placeholder='Enter your password'/>
              </div>
              <button className="py-[10px] px-[40px] mt-[40px] border border-white w-[50%] text-black hover:bg-white hover:text-[#241a14] transition duration-300 rounded-2xl">Login</button>
            </div>
          </div>
          <img className='w-[50%] mt-[10%] rounded-2xl' src="src/assets/sir-simo-crUoLUUD0Ew-unsplash.jpg" alt="" />
        </div>
      </div>
    </>
  )
}
