import axios from 'axios'
import React, { useEffect, useState } from 'react';
import { FaArrowCircleRight } from 'react-icons/fa';
import { FaArrowCircleLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';


export default function shop() {
  const [allProduct, setAllproduct] = useState([]);
  const [Filter, setFilter] = useState("All");
  const [Sorts, setSorts] = useState('default');
  const [current, setCurrent] = useState(1);

  const itemPerPage = 6;

  const getProduct = async ()=>{
    try {
      const resp = await axios.get('https://fakestoreapi.com/products')
      setAllproduct(resp.data)
      console.log(resp.data);

    } catch (error) {
      console.log('Error fetching data', error);
      
    }
  }
  useEffect(() => {
    getProduct()
  }, [])

  
  var fillterCat = [...allProduct]
  
  if (Filter !== 'All') {
    fillterCat = fillterCat.filter((Pros)=>Pros.category.toLowerCase()==Filter.toLowerCase())
  }
  
  fillterCat.sort((a,b)=>{
    if (Sorts === 'low') {
      return a.price - b.price
    } else if (Sorts === 'high') {
      return b.price - a.price
    } else {
      return [...allProduct]
    }
  })
  const lastPage = current * itemPerPage
  const firstPage = lastPage - itemPerPage
  const currentProduct = fillterCat.slice(firstPage, lastPage)
  const totalpage = fillterCat.length / itemPerPage

  return (
    <>
      <div className='bg-[#33241e] '>
        <div className='flex justify-center items-center '>
          <h1 className='my-[48px] animate-pulse' style={{fontFamily:'pacifico', fontSize: 40, color:'white'}}>Our Product</h1>
        </div>
        <div className='gap-3.5 items-center place-content-between flex px-7 '>
          <div className='flex gap-[20px] items-center'>
            <FaSearch size={25} color='white'/>
            <input className=' w-3xl h-9 shadow text-[20px] capitalize p-3 bg-[#d6d5d5] rounded-2xl' type="text" placeholder='search by name, title, categories' />
          </div>
          <div className='flex gap-2'>
            <FaArrowCircleLeft onClick={()=>setCurrent((prev)=>prev > 1 ? prev -1 : prev)} size={30} color='white'/>
            <FaArrowCircleRight onClick={()=> setCurrent((next)=> next < totalpage ? next +1 : next)} size={30} color='white'/>
          </div>
        </div>
        <div className='w-full h-[10vh] shadow items-center flex p-6 place-content-between text-white'>
          <div className='flex gap-3.5'>
            <h1 >Filter:-</h1>
            <h2 className={`rounded-4xl  px-4 text-white ${Filter == 'All'? 'bg-blue-500' :'bg-[#241a14]' }`}  onClick={()=>setFilter('All')}>All</h2>
            <h2 className={`rounded-4xl px-4 text-white ${Filter == "Men's Clothing" ? 'bg-amber-800' : 'bg-[#241a14]'}`} onClick={()=>setFilter("Men's Clothing")}>Men's Clothing</h2>
            <h2 className='rounded-4xl bg-[#241a14] px-4 text-white'onClick={()=>setFilter("jewelery")}>Jewelery</h2>
            <h2 className='rounded-4xl bg-[#241a14] px-4 text-white'onClick={()=>setFilter("electronics")}>Electronics</h2>
            <h2 className='rounded-4xl bg-[#241a14] px-4 text-white'onClick={()=>setFilter("Women's Clothing")}>Women's Clothing</h2>
          </div>
          <select onChange={(e)=>setSorts(e.target.value)} value={Sorts} name="" id="">
            <option value="default">Default</option>
            <option value="high">Highest Price</option>
            <option value="low">Lowest Price</option>
          </select>
        </div>
        <div className=' flex p-4 justify-center flex-wrap gap-[40px] max-w-[2500px] mx-auto'>
            {
              currentProduct.map((eachProduct)=>(
                <div className='shadow  w-[30%] bg-white/10 backdrop-blur-lg text-[white] h-[fit] p-[40px] justify-center' style={{fontFamily:'League Spartan Variable'}}>
                  <Link to={`/Single/ ${eachProduct.id}`}>
                  <div className='mb-5 flex justify-center items-center'>
                    <img className='w-[40%]' src={eachProduct.image} alt="" />
                  </div>
                  <div>
                    <h1 className='font-extrabold text-[18px]'>{eachProduct.title}</h1>
                  </div>
                  <div>
                    <h2 className='bg-black h-[20%] rounded w-[26%] p-2 font-bold text-white'> $ {eachProduct.price}</h2>
                  </div>
                  <div>
                    <h3 className='my-7'>{eachProduct.category}</h3>
                  </div>
                  <div>
                    <p>{eachProduct.description}</p>
                  </div>
                  </Link>
                </div>
              ))
            }
        </div>
      </div>
    </>
  )
}

