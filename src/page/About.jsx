import React from 'react'
import { MdOutlineAttachEmail } from 'react-icons/md';
import { FaPhoneFlip } from 'react-icons/fa6';
import { FaRegAddressBook } from 'react-icons/fa';

export default function About() {

  return (
    <>
      <div style={{fontFamily: 'Berkshire Swash', color: 'white'}} className='flex flex-col justify-center items-center w-[100%] bg-[#241a14] px-[40px] '>
        <div className='w-[60%] gap-3.5 justify-center flex flex-col items-center mb-[10%] mt-[60px]'>
          <h1 className='text-[40px]'>About Us</h1>
          <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, dolorum, minus, nam harum repellat blanditiis reiciendis esse nesciunt veniam voluptates suscipit quos delectus veritatis!</p>
        </div>
        <div className='w-[60%] h-[50vh] mb-5 slide-in'>
          <img className='overflow-hidden object-cover h-full w-full rounded' src="src/assets/shunya-koide-tFnDhOI4TGw-unsplash.jpg" alt="" />
        </div>
        <div className='w-[60%] gap-2 justify-center flex flex-col items-center' >
          <h1 className='text-[40px]'>Reach out to us Today</h1>
          <p>Whether you need support or want to learn more, we are here to assist You</p>
        </div>
        <div className='h-[40vh] w-full justify-center items-center flex gap-6'>
          <div className=' bg-[brown]/10 h-[18vh] w-[28%] gap-[15px] px-[70px] flex justify-center items-center slide-in'>
            <div className='p-4 rounded-full bg-white/10 backdrop-blur-lg'>
              <MdOutlineAttachEmail size={30} className=''/>
            </div>
            <div className=' items-center'>
              <h1 className='text-[28px]'>Email</h1>
              <p>harbdulsalamrasheed33@gmail.com</p>
            </div>
          </div>
          <div className=' bg-[brown]/10 h-[18vh] w-[28%] gap-[15px] px-[40px] flex  items-center slide-in'>
            <div className='p-4 rounded-full bg-white/10 backdrop-blur-lg'>
              <FaPhoneFlip size={30} className=''/>
            </div>
            <div className=' items-center'>
              <h1 className='text-[28px]'>Contact</h1>
              <p>+234 908 2704 424</p>
            </div>
          </div>
          <div className=' bg-[brown]/10 h-[18vh] w-[30%] gap-[15px] px-[40px] flex  items-center slide-in'>
            <div className='p-4 rounded-full bg-white/10 backdrop-blur-lg'>
              <FaRegAddressBook size={30} className=''/>
            </div>
            <div className=' items-center'>
              <h1 className='text-[28px]'>Address</h1>
              <p>N0 9, Market Street, Ebute Metta East Lagos, Nigeria.</p>
            </div>
          </div>
        </div>
        <div className='flex items-center p-6 gap-7 rounded-3xl bg-[brown]/10 mb-[70px] slide-in'>
          <div className='w-[70%] flex flex-col gap-6'>
            <h1 className='text-5xl text-center '>Our story</h1>
            <p className='text-[18px]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem praesentium ad numquam nisi illum pariatur eos ipsam, repellendus beatae officia obcaecati facere! Officiis at non voluptas expedita? Dolorem quod dolor, veritatis explicabo quis itaque alias laudantium et! Dolorum dolore eveniet recusandae at. Impedit sequi quidem architecto, ab, quis quo accusamus illo alias reiciendis id ducimus molestias adipisci aliquid. Qui velit magni quo sint dicta esse nam dolore quaerat aliquid repellendus blanditiis ratione laboriosam debitis temporibus, non veniam vero voluptas corrupti. Blanditiis pariatur voluptas distinctio esse neque minus perferendis reiciendis non laudantium quia numquam ad adipisci architecto, placeat, error quis aspernatur.</p>
          </div>
          <img className='h-[80vh] rounded-3xl w-[70%]' src="src/assets/micah-camper-sWZNUtc5rwM-unsplash.jpg" alt="" />
        </div>
      </div>
    </>
  )
}
