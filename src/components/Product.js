import React from 'react'
import { Link } from 'react-router-dom'

function Product({item}) {
  return (
    <div className='flex items-center justify-center flex-col w-[25%] rounded-md shadow-sm border-2 p-3'>
      <Link to={`/product/${item.id}`} >
        <div className='flex w-full h-auto rounded-md items-center overflow-clip'>
            <img src={item.image} alt={item.title} className='hover:scale-125 duration-300 cursor-pointer'/>
        </div>
        <div className='flex flex-col items-start justify-center gap-3 w-full'>
            <h2 className='text-xl mt-3'>{item.title}</h2>
            <hr className='h-1 w-full'/>
            <div className='flex flex-row items-center justify-between w-full'>
                <button className='p-3 px-5 rounded-md bg-transparent hover:bg-[#97ff20] hover:text-zinc-950 duration-200 border-2
                 border-[#97ff20]'>افزودن به سبد خرید</button>
                <span>تومان {item.price}</span>
            </div>
        </div>
      </Link>
    </div>
  )
}

export default Product