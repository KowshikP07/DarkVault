import React, { useState } from 'react'
const Note = ({onaddNote}) => {
  const [usercontent,setcontent]=useState({"topic":"","text":""})

  function handlechange(e){
    // const {}
    const {name,value}=e.target;
    setcontent(prev=>{
      return {...prev,[name]:value};
    })
  }
  function handlesubmit(e){
    e.preventDefault();
    console.log(usercontent.topic+" "+usercontent.topic);
    onaddNote(usercontent);
    setcontent({topic:"",text:""});
  }
  return (
    <div className='creatingfiles'>
      <div className="notesmain"><form onSubmit={handlesubmit}>
        <div className="notetop"><div className="notescir"></div><input name="topic" value={usercontent.topic} className="notetitle" type='text' placeholder='Enter the Category' onChange={handlechange}/></div>
        <div className="notestcontentuser"><textarea name="text" value={usercontent.text} type="text" className='textarea' placeholder='Enter the notes...' onChange={handlechange}/></div>
        <button type="submit" className='notesubmit'>Save!</button></form>
      </div>
    </div>
  )
}

export default Note
