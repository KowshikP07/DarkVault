import React, { useState } from 'react'
import Folder from './Folder'
import Note from './Note'

const Notescard = ({file,category}) => {
    const [activecont,setactive]=useState(null)
    const [notesfolder,setnotes]=useState([{"index":1,"topic":"personal"},{"index":2,"topic":"professional"},{"index":3,"topic":"finance"}])
    const folder=notesfolder.map((no)=>{return(
        <div className={`card ${activecont===no.index ? 'active' : ''}`} key={no.index}>
            <div className="cardtop"><h1 className='cardtoph1'>{no.topic}</h1></div>
            <div className="notescontent"></div>
            <div className="notescontent"></div>
            <div className="notescontent"></div>
            <div className="notescontent"></div>
            <div className="cardbottom"><button className='cardbtn' onClick={()=>handleclick(no.index)}>Tap to unlock</button></div>
        </div>)
    })

    const handleclick=(id)=>{
        setactive(id===activecont?null:id)
    }
  return (
      <div className="content">
        <div className={`${category===false&&file===false?"notesfoldernone":"notesfolder"}`}> {category && !file ? <Folder /> : <Note />}</div>
        <div className="content1">
            {folder}
        </div>
      </div>
  )
}

export default Notescard
