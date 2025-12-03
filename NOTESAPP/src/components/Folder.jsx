import React, { useState } from 'react'

const Folder = ({onaddfolder}) => {
  const [folder,setfolder]=useState({"category":""});
  function handlechange(e){
    const {name,value}=e.target;
    setfolder(prev=>({
       ...prev,[name]:value
    }));
    console.log("handling changes")
  }
  function handlesubmit(e){
    e.preventDefault();
    console.log("form submited")
    onaddfolder(folder);
    setfolder(prev=>({...prev,category:""}))
  }
  return (
    <div className='creatingfolder'>
      <form onSubmit={handlesubmit} className='folderform'>
      <div className="notetop1"><div className="notescir"></div><input name="category" className="notetitle" value={folder.category} type='text' placeholder='Enter the Category' onChange={handlechange}/></div>
      <button type='submit' className='notesubmit'>Save!</button>
      </form>
    </div>
  )
}

export default Folder
