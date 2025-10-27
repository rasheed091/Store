import React from 'react'
import { HiOutlineBuildingStorefront } from 'react-icons/hi2';
import { HiBuildingStorefront } from 'react-icons/hi2';
import "@fontsource/poppins";

import { FaShoppingBag } from 'react-icons/fa';
import { TbShoppingCartDollar } from 'react-icons/tb';
import { Link } from 'react-router-dom';


export default function LandingPage() {
  return (
    <>
      <div className='bg-[url(assets/Print.jpg)] h-[100vh] bg-cover bg-center bg-no-repeat items-center justify-center '>
        <div className='bg-[#0000007c] h-full flex flex-col '>
          <div className='flex flex-col justify-center items-center text-white ml-[20%] w-[60%] mb-[45px] mt-[18%] '>
            <h1 className='tracking-[5px] text-center' style={{fontFamily: 'Staatliches', fontSize: 15}}>Casual & Everyday</h1>
              <p className=' ' style={{fontFamily: 'Berkshire Swash', fontSize: 60}}>Effortlessly blend comfort  </p>
                <p style={{fontFamily: 'Berkshire Swash', fontSize: 60}}>&  style!</p>
                <p style={{fontFamily: 'Berkshire Swash', fontSize: 65}}></p>
                <h3 style={{fontFamily: 'Josefin Sans Variable', fontSize: 15}}>Effortlessly blend comfort and style with our Casual & Everyday collection, featuring cozy sweaters,</h3>
                <h3 style={{fontFamily: 'Josefin Sans Variable', fontSize: 15}}>versatile denim, laid-back tees, and relaxed-fit joggers for your everyday adventures</h3>
          </div>
          <Link to='/shop' >
            <button className=' w-[20%] ml-[40%] p-4 border text-white hover:bg-white hover:text-black transition-colors duration-300'  style={{fontFamily: 'Staatliches', fontSize: 15,}} >view collection </button>
          </Link>
        </div>
      </div>
    </>
  )

}
