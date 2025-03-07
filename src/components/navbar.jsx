"use client"
import React from 'react'
import github from '../assets/github.svg'
import Googleplaybutton from '../ui/googleplaybutton'
import Logobtn from '../ui/logobtn'

function navbar() {
  return (
    <nav className='bg-purple-300 h-20 w-full flex items-center justify-between px-10'>
      <div className="logo flex items-center font-extrabold font-mono"><Logobtn value="PassGUARD"/></div>
<div className="flex gap-5">
<Googleplaybutton />
<img className='w-10 md:w-15 cursor-pointer' src={github} alt="" srcSet="" />
</div>
    </nav>
  )
}

export default navbar
