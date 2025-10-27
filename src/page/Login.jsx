import React, { useState } from 'react'
import { TbShoppingCartDollar } from 'react-icons/tb';
import { AiOutlineMail } from 'react-icons/ai';
import { FaAt } from 'react-icons/fa';
import { FaRegEye } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Login() {
    const [login, setLogin] = useState('Login')
  return (
    <>
        <div className='text-[white] h-full px-4 bg-[#33241e]'>
            <div className=' h-[100vh] justify-center mt-[] flex'style={{fontFamily: 'Ubuntu', color: 'black'}}>
                <div className='shadow w-[50%] bg-white/10 backdrop-blur-lg font-bold rounded-2xl p-7 mt-[10%]'>
                    <h1 className='text-center mb-17 animate-pulse tracking-[15px]' style={{fontFamily: 'Berkshire Swash', fontSize: 60}}>Login Page</h1>
                    <h2 className=''>Welcome Back !</h2>
                    <p className='text-[gray] text-[13px]'>We are happy to see you again</p>
                    <div className='flex justify-center items-center mt-[40px] flex-col gap-7'>
                    <div className='border rounded-[38px] w-[60%] h-[7vh] flex  place-content-between px-1'>
                        <button className=' bg-gray-500 px-9 py-3 rounded-3xl hover:bg-blue-500 hover:text-white transition duration-300' >Login</button>
                        <Link to='/register'>
                        <button className= 'bg-gray-500 px-9 py-3 rounded-3xl hover:bg-blue-500 hover:text-white transition duration-300'>Register</button>
                        </Link>
                    </div>
                      <div className='border rounded-[38px] w-[60%] h-[7vh] flex items-center p-2 gap-7 place-content-between px-3'>
                        <input className='w-[80%]' type="text" placeholder='Enter your email'/>
                        <AiOutlineMail size={20}/>
                      </div>
                      <div className='border rounded-[38px] w-[60%] h-[7vh] flex items-center p-2 gap-7 place-content-between px-3'>
                        <input className='w-[100%]' type="password" placeholder='Enter your password'/>
                      </div>
                    </div>
                  </div>
                    <img className='w-[50%] mt-[10%] rounded-2xl' src="src/assets/sir-simo-crUoLUUD0Ew-unsplash.jpg" alt="" />
                </div>
              </div>
    </>
  )
}
