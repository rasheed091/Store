import React, { useState } from 'react'
import { useCartStore } from '../store/ricCart'
import { TbTruckDelivery } from 'react-icons/tb';
import { BsFillBoxSeamFill } from 'react-icons/bs';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import { PayPalButtons } from '@paypal/react-paypal-js';
import { FaArrowLeftLong } from 'react-icons/fa6';

export default function Procceed() {
    const {carts, clearQuantity} = useCartStore()
    const totalCount = carts.reduce((sum, item)=> sum + item.quantity, 0)

    const shopNav = useNavigate()

    // Form Authentication
    const [email, setEmail] = useState('')
    const [street, setStreet] = useState('')
    const [city, setCity] = useState('')
    const [phone, setPhone] = useState('')
    const [name, setName] = useState('')
    const [payMethod, setPaymethod] = useState('card')

        
    // The function 
    function setRegister(e) {
       
         if (!email || !street || !city || !phone || !name) {
            console.log('All feilds are required');
            toast.error('All feilds are required')
            return;
        }

        if (! emailCheck(email)) {
            toast.error('Invalid Email address')
            console.log('Invalid Email address');
            return;
            
            
        }

        if (payMethod !== 'paypal') {
            toast.success(`
                ${totalCount} order placed successfully
                Thnaks for Shopping with us
                `)

            clearQuantity()
            shopNav('/')
        }

        // toast.success('Order Placed Successfully')
        
        setCity('')
        setEmail('')
        setName('')
        setPhone('')
        setStreet('')

    }

        if (carts.length == 0) {
        return(
            <div style={{fontFamily: 'Berkshire Swash',}} className='flex flex-col justify-center items-center h-[100vh] bg-[#241a14] '>
                <div className='rounded p-[20px] shadow justify-center flex flex-col items-center mt-[20%] mb-[13%] bg-[brown]/10 slide-in'>
                    <img className=' w-[fit] h-[50vh]' src= 'src/assets/emptyCart.jpg' alt="" />
                    <h1 className='font-bold text-[30px] mt-5 text-center text-white'>Your cart is empty</h1>
                    <button className='flex gap-5 border border-white mt-4 rounded-2xl px-3 py-1 hover:bg-white hover:text-[#241a14] transition duration-300'>
                        <FaArrowLeftLong size={25} color='white'/>
                        <Link to='/shop'>
                            <h1 className='text-[17px font-bold'>Back to Shop</h1>
                        </Link>
                    </button>
                </div>
            </div>
        )
    }

    const emailCheck =(email)=>{
        let emailVery = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        return emailVery.test(email)
    }

  return (
    <>
        
        <div className='border flex justify-center gap-7 p-[30px] bg-[#241a14]'style={{fontFamily:'roboto',color: 'white'}}>
            <div className='w-[50%] shadow justify-center px-[25px] rounded-3xl p-6 mt-[10%] bg-[brown]/10'>
                <div className='flex gap-[20%] mb-7'>
                    <div className='flex gap-3 p-5 rounded-2xl text-black hover:bg-white hover:text-[#241a14] transition duration-300'>
                        <input type="radio" />
                        <div className='flex justify-center gap-1 '>
                           <TbTruckDelivery size={20}/> 
                           <h1>Delivery</h1>
                        </div>
                    </div>
                    <div className='flex gap-3 p-5 rounded-2xl text-black hover:bg-white hover:text-[#241a14] transition duration-300'>
                        <input type="radio" />
                        <div className='flex justify-center gap-1 '>
                           <BsFillBoxSeamFill size={20}/> 
                           <h1>Pick-Up</h1>
                        </div>
                    </div>
                </div>
                <form action="" className='flex flex-col'>
                    <p className='text-[20px] font-extrabold' >Shipping Information</p>
                    <input type="text" onChange={((e)=>setEmail(e.target.value))} value={email} className='border h-[7vh] px-2.5 rounded ' placeholder='Email Address'/><br/>
                    <input type="text" onChange={((e)=>setStreet(e.target.value))} value={street} className='border h-[7vh] px-2.5 rounded ' placeholder='Street Address'/><br/>
                    <input type="text" onChange={((e)=>setCity(e.target.value))} value={city} className='border h-[7vh] px-2.5 rounded ' placeholder='City'/><br/>
                    <input type="number" onChange={((e)=>setPhone(e.target.value))} value={phone} className='border h-[7vh] px-2.5 rounded ' placeholder='Phone Number'/><br/>
                    <input type="text" onChange={((e)=>setName(e.target.value))} value={name} className='border h-[7vh] px-2.5  rounded ' placeholder='Full Name'/><br/>
                </form>
                <div>
                    <h2 className='text-[20px] font-extrabold'>Payment Method</h2>
                    <div className='flex gap-2'>
                        <input onChange={(e)=> setPaymethod(e.target.value)} value= 'card' checked={payMethod=='card'} type="radio" name='pay' className='text-blue-400'  />
                        <h1>Credit/Debit Card</h1>
                    </div>
                    <div className='flex gap-2'>
                        <input type="radio" name='pay' className='text-blue-400' onChange={(e)=>setPaymethod(e.target.value)} value='paypal' />
                        <h1>PayPal</h1>
                    </div>
                    <div className='flex gap-2'>
                        <input onChange={(e)=> setPaymethod(e.target.value)} value='cash' checked={payMethod == 'card'} type="radio" name='pay' className='text-blue-400' />
                        <h1>Cash on Delivery</h1>
                    </div>

                </div>
            </div>
            <div className='shadow rounded-2xl p-4 bg-[brown]/10 mt-[10%]'>
                <div className='mb-[30px]'>
                    <h1 className='font-bold text-2xl'>Review Your Cart</h1>
                </div>
                <div>
                    {
                        carts.map((checkCart)=>(
                            <div className=''> 
                                <div className='flex gap-[30px] border-y border-y-[gray] py-6'>
                                    <img className='w-[30%] bg-[#c0c0c0] h-[18vh] p-4' src={checkCart.image} alt="" />
                                    <div className=''>
                                        <h1 className='font-bold my-3'>{checkCart.title}</h1>
                                        <p className='font-bold text-[red]'>$ {checkCart.price}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }

                </div>
                <div className=' mt-[30px] h-[30vh] border-b border-b-[gray]'>
                    <div className='shadow flex place-content-between py-2 px-5 font-bold mb-7'>
                        <h1>Discount Code</h1>
                        <p className='text-blue-500'>Apply</p>
                    </div>
                    <div>
                        <div className='flex place-content-between'>
                            <h1>Sub-Total</h1>
                            <p>$ 0.00</p>
                        </div>
                        <div className='flex place-content-between'>
                            <h1>Shipping</h1>
                            <p>$ 0.00</p>
                        </div>
                        <div className='flex place-content-between'>
                            <h1>Discount</h1>
                            <p>$ 0.00</p>
                        </div>
                        <div className='flex place-content-between mt-6'>
                            <h1 className='font-extrabold'>Total</h1>
                            <p>$ 0.00</p>
                        </div>
                    </div>

                </div>

                { payMethod == 'paypal'
                 ? <PayPalButtons 
                    CreateOrder = {(data,actions) => {
                        return actions.order.create({
                            purchase_units: [
                                {
                                    amount: {
                                        value: totalCount,
                                    },
                                },
                            ],
                        });
                    }}
                 />
                :      <div className=' flex justify-center items-center mt-[50px]'>
                 <button className='w-[80%] font-bold py-[10px] px-[30px] rounded text-black hover:bg-white hover:text-[#241a14] transition duration-300' onClick={setRegister}>Pay Now</button>
                </div> }
                 
            </div>
        </div>
    </>
  )
}

