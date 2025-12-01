import React, { useState } from 'react'
const Note = () => {
  const [usercontent,setcontent]=useState({"title":"","text":""})
  function handlechange(e){
    // const {}
  }
  return (
    <div className='creatingfiles'>
      <div className="notesmain">
        <div className="notetop"><div className="notescir"></div><input value={usercontent.title} className="notetitle" type='text' placeholder='Enter the Category' onChange={handlechange}/></div>
        <div className="notestcontentuser"><textarea className='textarea' placeholder='Enter the notes...'/></div>
      </div>
    </div>
  )
}

export default Note
