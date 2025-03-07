"use client"
import React, { useState,useEffect } from "react";
import { useRef } from "react";
import "../App.css";
import eye from "../assets/eye.svg"
import heye from "../assets/offt.svg"
import copy from "../assets/copy.svg"
import edit from "../assets/edit.svg"
import del from "../assets/delete.svg"
import { v4 as uuidv4 } from 'uuid';


const manager = () => {
  const ref = useRef()
  const passref = useRef()
  const [form, setform] = useState({site : "",username : "",password : ""})
  const [passwordArray, setpasswordArray] = useState([])
  

useEffect(() => {
  let passwords = localStorage.getItem("passwords");
  if(passwords){
    setpasswordArray(JSON.parse(passwords));
  }
  setform({site:"",username:"",password:""})
}, [])

const copytext = (text) => {
  navigator.clipboard.writeText(text)
}

const handleEdit = (id) => {
  setform(passwordArray.filter(i=>i.id===id)[0])
  // localStorage.setItem("passwords",JSON.stringify(passwordArray.filter(item=>item.id!==id)))
  setpasswordArray(passwordArray.filter(item=>item.id!==id))
}
const handleDelete = (id) => {
  localStorage.setItem("passwords",JSON.stringify(passwordArray.filter(item=>item.id!==id)))
  setpasswordArray(passwordArray.filter(item=>item.id!==id))
  console.log([...passwordArray,form])
}


  const showpassword = () => {
    if(ref.current.src === eye){
      ref.current.src = heye
      passref.current.type = "text"
    }
    else{
      ref.current.src = eye
      passref.current.type = "password"
    }
   
  }

  const handlechange = (e) => {
    setform({...form,[e.target.name]:e.target.value})
  }
  

  const savepassword = () => {
    localStorage.setItem("passwords",JSON.stringify([...passwordArray,{...form,id :uuidv4()}]))
    setpasswordArray([...passwordArray,{...form,id :uuidv4()}])
    setform({site:"",username:"",password:""})
    // console.log([...passwordArray,form])

  }
  
  
  return (
    <div>
      <div className="text-black flex flex-col justify-center items-center py-10 px-0 gap-4 w-[100vw] my-0">
        <div className="title">
            <span className="text-green-700 mx-5 text-3xl font-bold block">&lt;PassGUARD/&gt;</span>
            Your own password and input manager</div>

       <div className="box flex flex-col gap-4 w-[96%] md:w-[80%] bg-purple-100 py-5 px-10 rounded-2xl">
       <input type="text" className="m-input px-5 py-1 w-[100%]" value={form.site} onChange={handlechange} placeholder="enter the website URL" name="site" />
       <div className="md:flex gap-1 relative">
       <input type="text" className="m-input px-5 py-1 w-full md:w-[80%]" value={form.username} onChange={handlechange} placeholder="enter the username" name="username" />
       <input type="password" ref={passref} className="m-input px-5 py-1 w-full md:w-[80%]" value={form.password} onChange={handlechange} placeholder="enter password" name="password" />
       <img src={eye} ref={ref} className="w-5 bottom-2 md:top-2 absolute end-2 cursor-pointer" alt="vis" srcSet="" onClick={showpassword} />
       </div>
       <button onClick={savepassword} className="button font-bold">Save</button>
       {/* ------------------------------------------------------------- */}

       {/* ------------------------------------------------------- */}
       </div>

       <div className="passwordlist flex flex-col items-center gap-2 ">
        <h1 className="text-2xl font-bold grad self-center">your passwords</h1>
        {passwordArray.length === 0 && <div>No passwords to show</div>}
        {passwordArray.length != 0 && 

        <table className="table-auto w-[96vw] md:w-[78vw] bg-purple-100 rounded-2xl overflow-hidden text-xs md:text-xl">
  <thead className="bg-purple-500 text-white">
    <tr>
      <th>Site</th>
      <th>Username</th>
      <th>Password</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
    {passwordArray.map((item,index)=>{
    return <tr key={index}>
      <td className="text-center md:w-[30%] py-1 border border-b-fuchsia-500 relative" ><a href={item.site} target="_blank"><span className="mx-6">{item.site}</span></a>
      <img src={copy} className="absolute top-1 w-6 cursor-pointer md:left-3" alt="" srcSet="" onClick={()=>copytext(item.site)} />
      </td>
      <td className="text-center w-[30%] py-1 border border-b-fuchsia-500 relative" >{item.username}
<img src={copy} className="absolute top-1 w-6 cursor-pointer md:left-3" alt="" srcSet=""  onClick={()=>copytext(item.username)}/>
      </td>
      <td className="text-center w-[30%] py-1 border border-b-fuchsia-500 relative" >{item.password}
<img src={copy} className="absolute top-1 w-6 cursor-pointer md:left-3" alt="" srcSet="" onClick={()=>copytext(item.password)} />
      </td>
      <td className="flex w-18 md:w-auto justify-between px-2 border border-b-fuchsia-500 py-1"> 
        <img src={edit} className="cursor-pointer"  onClick={()=>handleEdit(item.id)} alt="" />
        <img src={del} className="cursor-pointer" onClick={()=>handleDelete(item.id)} alt="" />
      </td> 
    </tr>
     })}

  </tbody>
</table>
}

       </div>
      </div>
    </div>
  );
};

export default manager;
