import React from 'react'

function Product({item}) {
  return (
    <div className='flex items-center justify-center flex-col w-[25%] rounded-md shadow-sm border-2 p-3'>
        <div className='flex w-full h-auto rounded-md items-center overflow-clip'>
            <img src={item.image} className='hover:scale-125 duration-300 cursor-pointer'/>
        </div>
        <div className='flex flex-col items-start justify-center gap-3 w-full'>
            <h2 className='text-xl'>{item.title}</h2>
            <hr className='h-1 w-full'/>
            <div className='flex flex-row items-center justify-between w-full'>
                <button className='p-3 px-5 rounded-md bg-transparent border-2 border-[#97ff20]'>افزودن به سبد خرید</button>
                <span>{item.price}</span>
            </div>
        </div>
    </div>
  )
}

export default Product