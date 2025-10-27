import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { BsFillStarFill } from 'react-icons/bs';
import { FaPlus } from 'react-icons/fa';
import { FaMinus } from 'react-icons/fa';
import { AiFillDelete } from 'react-icons/ai';
import { TbTruckDelivery } from 'react-icons/tb';
import { RiCalendarScheduleFill } from 'react-icons/ri';

import { useCartStore } from '../store/ricCart';
import { TbGardenCartFilled } from 'react-icons/tb';
import { BsCart4 } from 'react-icons/bs';

export default function Single() {
    const [single, setSingle] = useState({
        title: '',
        price: '',
        description: '',
        category: '',
        image: '',
    })

    const [count, setCount] = useState(0)

    const addToCart = useCartStore((state)=> state.addToCart)
    const Cart = useCartStore((state)=> state.carts)
    const totalCount = Cart.reduce((sum, item)=> sum + item.quantity, 0)



    const URL = 'https://fakestoreapi.com/products'
    const {id} = useParams()

    const Singles = async(id)=>{
        try {
            const resp = await axios.get(`${URL}/${id}`) 
            setSingle(resp.data)
            console.log(resp.data);
            
        } catch (error) {
            console.log('Error fetching data',error);
            
        }
    }

    useEffect(() => {
        Singles(id)
    }, [id])


  return (
    <>
    <div className=' h-[100vh] bg-[#33241e]'>
        <div className='h-[80vh]  flex justify-center p-[40px]' style={{fontFamily: 'Public Sans Variable'}}>
            <div className='w-[30%] flex justify-center items-center p-[30px] '>
                <img className='shadow p-[70px] bg-[#e7e6e6] rounded-2xl ' src={single.image} alt="" />
            </div>
            
            <div className='w-[50%] p-3.5'>
                <div className='mb-[20px] flex flex-col border-b border-[#d1d1d1] pb-[20px] gap-3 w-[60%]'>
                    <h2 className='text-[20px] font-bold '>{single.title}</h2>
                    <h1>{single.description}</h1>
                    <div className='flex '>
                        <BsFillStarFill color='green'/>
                        <BsFillStarFill color='green'/>
                        <BsFillStarFill color='green'/>
                        <BsFillStarFill color='green'/>
                        <BsFillStarFill color='green'/>
                    </div>
                </div>
                <div className='items-center w-[60%]'>
                    <h1 className=' pb-[10px] flex items-center text-[25px] font-bold '>${single.price}</h1>
                    <div className='flex gap-7'>
                        <div className='rounded-4xl h-[15%] w-[20%] bg-[#d8d6d6] mb-[20px] p-2 justify-center items-center flex gap-4 relative'>
                            <FaMinus onClick={()=>setCount(count-1)} size={18}/>
                            <p className=''>{count}</p>
                            <FaPlus onClick={()=>setCount(count+1)} size={18}/>
                        </div>
                        <AiFillDelete className='h-[25%]' size={30} color='red'/>
                    </div>
                    <div className='flex items-center gap-[10px] border-[#d1d1d1] pb-7 border-b text-[10px]'>
                        <button className='font-bold w-[20%] bg-green-600 rounded-[20px] h-[10%] p-2'>Buy Now</button>
                        <button onClick={()=> addToCart(single)} className='font-bold w-[20%] text-[green] border rounded-[20px] h-[10%] p-2' >Add to Cart</button>
                    </div>
                    <div className=' h-[17vh] border border-[#cecece] w-[100%] p-[18px] mt-5 mb-[50px]'>
                        <div className='flex gap-4 mb-4 border-b pb-3 border-b-[#c5c3c3]'>
                            <TbTruckDelivery size={25} color='orangered'/>
                            <div className='text-[10px]'>
                                <p className='font-bold'>Free Delivery</p>
                                <h2 className='underline'>Enter your postal code for delivery availability</h2>
                            </div>
                        </div>
                        <div  className='flex gap-4 mb-[20%]'>
                            <RiCalendarScheduleFill size={20} color='orangered'/>
                            <div className='text-[10px]'>
                                <h1 className='font-bold'>Return Delivery</h1>
                                <p>Free 30Days delivery Returns. <span className='underline'>Details</span> </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
    </>
  )
}
