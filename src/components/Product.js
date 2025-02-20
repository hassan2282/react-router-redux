import React from 'react'

function Product({item}) {
  return (
    <div className='flex items-center justify-center flex-col w-[25%] h-60 rounded-md shadow-sm'>
        <div className='flex w-full h-auto rounded-md'>
            <img src={item.image}/>
        </div>
        <div className='flex flex-col items-start justify-center gap-2'>
            <h2>{item.title}</h2>
            <hr className='h-1 w-full'/>
            <div className='flex flex-row items-center justify-between'>
                <button className='p-3 px-5 '>افزودن به سبد خرید</button>
            </div>
        </div>
    </div>
  )
}

export default Product