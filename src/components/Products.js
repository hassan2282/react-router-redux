import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Products() {

const [data, setData] = useState('')

  useEffect(()=>{
    axios.get('https://679ba4c233d3168463249e52.mockapi.io/api/v1/products')
    .then(res => setData(res.data))
  },[])

  return (
    <div className='flex flex-row justify-around w-screen h-auto'>
        {
            data &&
            data.map((item) => {
              <Product item={item}/>
            })
        }
    </div>
  )
}

export default Products