"use client"
import React from 'react'
import { useRef,useState } from 'react'
import Socials from '../ui/socials'
import Login from '../ui/login'
import Download from '../ui/download'


function footer() {
  const [showform, setshowform] = useState(false)
  return (
    <>
    <div className='bg-purple-400 w-full h-full flex flex-col items-center'>
       <span className="text-white mx-5 text-3xl font-bold block">&lt;PassGUARD/&gt;</span>
       <button className='text-white bg-black px-5 py-2 rounded-4xl font-bold my-3 cursor-pointer' onClick={()=>{
        setshowform(!showform)
       }} >Contact info</button>
       </div>
       
       {showform && <div className="flex-col flex md:flex-row items-center justify-between gap-2 my-2 h-fit w-full overflow-x-visible bg-purple-600 p-2">
        <div className="first">
          <Login/>
        </div>
        <Socials/>
        <div className="second">
<Download/>
        </div>
        </div>}
       </>
  )
}

export default footer
