import React, { useState } from 'react'
import { TbShoppingCartDollar } from 'react-icons/tb';
import { useCartStore } from '../store/ricCart';
import { FaPlus } from 'react-icons/fa';
import { FaMinus } from 'react-icons/fa';
import { IoTrash } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { BsCart4 } from 'react-icons/bs';
export default function Cart() {
    
    const {carts , increaseQuantity, decreaseQuantity, clearQuantity, removeQuantity } = useCartStore()
    // const [count, setCount] = useState(0)
    const total = carts.reduce((sum, item)=> sum + item.price * item.quantity, 0)

    

    if (carts.length == 0) {
        return(
            <div className='flex flex-col justify-center border items-center h-[100vh]'>
                <div className='rounded p-[20px] shadow'>
                    <img className=' w-[fit] h-[70vh]' src= 'src/assets/emptyCart.jpg' alt="" />
                    <h1 className='font-bold text-[30px] mt-5 text-center'>Your cart is empty</h1>
                </div>
            </div>
        )
    }

    return (
        <>
            <div className=' h-full border border-amber-600'>
                <div>
                    <div className='flex items-center shadow'>
                        <TbShoppingCartDollar size={60} color='orangered'/>
                        <h1 style={{fontFamily: 'Berkshire Swash', fontSize: 60, color: 'black'}}>Rich<span style={{fontFamily: 'pacifico'}} >Store</span></h1>
                        <div>
                    <ul className='flex gap-[20px] text-[20px]' style={{fontFamily: 'Public Sans Variable'}}>
                        <Link to={'/'}>
                            <li>Home</li>
                        </Link>
                        <Link to='/register' >
                            <li>Register</li>
                        </Link>
                        <li>Login</li>
                    </ul>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center place-content-between'>
                {/* left content */}
                    <div>
                        <div className='flex border border-[red] bg-gray-600'>
                        
                    
                            {
                                carts.map((eachcart)=>(
                                    
                                    <div className='border border-[yellow]' style={{fontFamily: 'poppins',}}>
                                        <div className=' bg-white' >
                                            <div className='px-4'>
                                                <div className='flex items-center place-content-between font-extrabold my-2'>
                                                    <p className='ml-[90px]'>Product</p>
                                                    <p className='ml-[28%]'>Quality</p>
                                                    <p className='mr-[11%]'>Price</p>
                                                </div>
                                                <div className='flex shadow p-2 items-center place-content-between rounded'>
                                                    <div className='flex items-center w-[45%] h-[15vh] gap-3'>
                                                        <div className='w-[20%] bg-gray-200 p-5 rounded-[10px] '>
                                                            <img src={eachcart.image} alt="" />
                                                        </div>
                                                        <div>
                                                            <p className='font-bold'>{eachcart.title}</p>
                                                            <p>{eachcart.category}</p>
                                                        </div>
                                                    </div>
                                                    <div className='flex justify-center rounded-[20px] bg-[#ececec] items-center w-[10%] gap-3 p-1 '>
                                                        <FaMinus onClick={()=>decreaseQuantity(eachcart.id)}/>
                                                        <p className='border-x border-x-[gray] px-3'>{eachcart.quantity}</p>
                                                        <FaPlus onClick={()=>increaseQuantity(eachcart.id)}/>
                                                    </div>
                                                    <div className='flex items-center justify-center gap-[54px]'>
                                                        <h1 className='font-bold'>{eachcart.price}</h1>
                                                        <IoTrash onClick={()=>removeQuantity(eachcart.id)}  size={27} color='orangered'/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    
                                    </div>
                                ))
                            }

                        </div>
                        <div className='border border-amber-400 h-[10vh] gap-[20%] flex p-7 items-center'>
                            <Link to={'/proo'}>
                                <p className='border rounded ' >Procced to CheckOut</p>
                            </Link>
                            <p onClick={()=>clearQuantity()}>Remove Cart</p>
                        </div>
                    </div>
                    
                    {/* right content */}
                    <div className='w-[30%] ml-4'>
                            <div className='bg-white w-[80%] rounded shadow p-2 mb-4'>
                                <h1 className='border-b border-b-[gray] font-bold py-3 mb-2'>Coupon Code</h1>
                                <input className='bg-[#d1d0d0] p-3 w-[100%] rounded' type="text" placeholder='Enter Your Coupon Code' />
                                <button className='my-5 bg-[white] p-3 w-[100%] border-[blue] border rounded'>Apply Your Coupon</button>
                            </div>
                            <div className='bg-white w-[80%] rounded shadow p-2 mb-4'>
                                <h1 className='border-b border-b-[gray] font-bold py- mb-[20px]'>Order Summary</h1>
                                <div className='flex place-content-between'>
                                    <h1>Discount</h1>
                                    <p>$00.00</p>
                                </div>
                                <div className='flex place-content-between gap-10'>
                                    <h1>Delivery</h1>
                                    <p>$00.00</p>
                                </div>
                                <div className='flex place-content-between'>
                                    <h1>Tax</h1>
                                    <p>$00.00</p>
                                </div>
                                <div className='flex place-content-between'>
                                    <h1>Total</h1>
                                    <p>{total}</p>
                                </div>
                        </div>
                        <div className='bg-white w-[80%] rounded shadow p-2'>
                            <h1 className='border-b border-b-[gray] font-bold py-3 mb-7'>Coupon Code</h1>
                            <input className='bg-[#d1d0d0] p-3 w-[100%] rounded' type="text" placeholder='Enter Your Coupon Code' />
                            <button className='my-5 bg-[white] p-3 w-[100%] border-[blue] border rounded'>Apply Your Coupon</button>
                        </div>

                        <div></div>
                    </div>
                </div>
            </div>
        </>
    )
}
