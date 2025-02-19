import React from 'react'
import App from '../App'
import NavBar from './NavBar'
import { Links } from 'react-router-dom'

function Content() {
  return (
    <div className='w-screen min-h-screen bg-indigo-50 relative flex flex-col'>
      <NavBar />
    </div>
  )
}

export default Content