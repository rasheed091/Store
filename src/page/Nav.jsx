import React from 'react'
import { TbShoppingCartDollar } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import { BsCart4 } from 'react-icons/bs';
import { useCartStore } from '../store/ricCart';


export default function Nav() {
    const Cart = useCartStore((state)=> state.carts)
    const totalCount = Cart.reduce((sum, item)=> sum + item.quantity, 0)
        
  return (
    <>
        <div className='flex items-center place-content-between shadow px-13 fixed z-1000 w-[100%] bg-auto'>
            <div className='flex justify-center items-center'>
                <TbShoppingCartDollar size={60} color='orangered'/>
                <h1 style={{fontFamily: 'Berkshire Swash', fontSize: 60, color: 'white'}}>Rich<span style={{fontFamily: 'pacifico'}}>Store</span></h1>
            </div>
            <ul className='flex gap-[20px] text-[20px]' style={{fontFamily: 'Public Sans Variable', color: 'white'}}>
                <Link to={'/'}>
                    <li>Home</li>
                </Link>
                <Link to={'/shop'}>
                    <li>Shop</li>
                </Link>
                <Link to='/register' >
                    <li>Register</li>
                </Link>
                    <li>Login</li>
                <Link to='/cart'>
                    <li><BsCart4 size={30}/>{totalCount > 0 && <span className='bg-[orangered] rounded-[120%] px-[8px] text-[15px] absolute top-1 animate-bounce'> {totalCount}</span>}</li>
        
                </Link>
            </ul>
        </div>
    </>
  )
}
