import React, { useState } from 'react'
import { TbShoppingCartDollar } from 'react-icons/tb';
import { AiOutlineMail } from 'react-icons/ai';
import { FaAt } from 'react-icons/fa';
import { FaRegEye } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function () {
  const [register, setRegister] = useState('Register')
  return (
    <>
      <div className='text-[white] h-full px-4'>
        <div className='border border-white h-[100vh] justify-center mt-[] flex'style={{fontFamily: 'Ubuntu', color: 'black'}}>
          <div className='shadow w-[50%] bg-[white] font-bold rounded-2xl p-7 mt-[10%]'>
            <h2 className=''>Welcome Back !</h2>
            <p className='text-[gray] text-[13px]'>We are happy to see you again</p>
            <div className='flex justify-center items-center mt-[40px] flex-col gap-7'>
              <div className='border rounded-[38px] w-[60%] h-[7vh] flex  place-content-between'>
                <button className=' px-9 py-3 rounded-3xl  hover:bg-blue-500 hover:text-white transition duration-300' >Register</button>
                <Link to='/login'>
                  <button className= 'px-9 py-3 rounded-3xl hover:bg-blue-500 hover:text-white transition duration-300'  >Login</button>
                </Link>
              </div>
              <div className='border rounded-[38px] w-[60%] h-[7vh] flex items-center p-2 gap-7 place-content-between px-3'>
                <input className='w-[80%]' type="text" placeholder='Enter your email'/>
                <AiOutlineMail size={20}/>
              </div>
              <div className='border rounded-[38px] w-[60%] h-[7vh] flex items-center p-2 gap-7 place-content-between px-3'>
                <input className='w-[80%]' type="text" placeholder='Enter your username'/>
                <FaAt size={20}/>
              </div>
              <div className='border rounded-[38px] w-[60%] h-[7vh] flex items-center p-2 gap-7 place-content-between px-3'>
                <input className='w-[100%]' type="password" placeholder='Enter your password'/>
              </div>
              <div className='border rounded-[38px] w-[60%] h-[7vh] flex items-center p-2 gap-7 place-content-between px-3'>
                <input className='w-[100%] border-none' type="password" placeholder='Confirm password'/>
              </div>
            </div>
          </div>
            <img className='w-[50%] mt-[10%] rounded-2xl' src="src/assets/sir-simo-crUoLUUD0Ew-unsplash.jpg" alt="" />
        </div>
      </div>
    </>
  )
}
