import React from 'react'
import { TbShoppingCartDollar } from 'react-icons/tb';
import { FaXTwitter } from 'react-icons/fa6';
import { FaGithub } from 'react-icons/fa6';
import { FaFacebook } from 'react-icons/fa6';
import { SiWebmoney } from 'react-icons/si';

export default function Footer() {
  return (
    <>
      <div className='w-[100%] py-[30px] h-[35vh] rounded shadow bg-[#241a14] backdrop-blur-lg  '>
        <div>
          <div className='flex justify-center items-center'>
            <TbShoppingCartDollar size={25} color='orangered'/>
            <h1 style={{fontFamily: 'Berkshire Swash', fontSize: 25, color: 'white'}}>Rich<span style={{fontFamily: 'pacifico'}}>Store</span></h1>
          </div>
          <div className='flex gap-[60px] justify-center items-center text-[18px] mt-[40px] text-[white]' style={{fontFamily:'Cabin Variable '}}>
            <h1>Terms of Service</h1>
            <h1>Privacy Policy</h1>
            <h1>Security</h1>
            <h1>Site Map</h1>
          </div>
          <div className='mt-[70px] flex place-content-between px-[80px]'>
            <select name="" className='text-white' id="">
              <option value="">English</option>
              <option value="">French</option>
              <option value="">Spanish</option>
            </select>
            <div className='flex text-[#d3cdcd] text-[20px] gap-[20px]'>
              <FaXTwitter/>
              <FaGithub/>
              <FaFacebook/>
              <SiWebmoney/>
            </div>
            <h1 className='text-white'>@2020 Lorem ipsum dolor sit amet consectetur.</h1>
          </div>
        </div>
      </div>
    </>
  )
}
