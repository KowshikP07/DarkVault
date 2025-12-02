import React, { useState } from 'react'

const Folder = () => {
  const [folder,setfolder]=useState(null);
  function handlechange(){
    console.log("handling changes")
  }
  return (
    <div className='creatingfolder'>
      <div className="notetop"><div className="notescir"></div><input name="title" className="notetitle" type='text' placeholder='Enter the Category' onChange={handlechange}/></div>
    </div>
  )
}

export default Folder
