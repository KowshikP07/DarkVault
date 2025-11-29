import React, { useState } from 'react'

const Notescard = () => {
    const [activecont,setactive]=useState(null)
    const [notesfolder,setnotes]=useState([{"index":1,"topic":"personal"},{"index":2,"topic":"professional"},{"index":3,"topic":"finance"}])
    const folder=notesfolder.map((no)=>{return(
        <div className={`card ${activecont===no.index ? 'active' : ''}`} key={no.index}>
            <div className="cardtop">{no.topic}</div>
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
        <div className="notesfolder"><div className="creatingfolder"></div>
        <div className="creatingnotes"></div></div>
        <div className="content1"></div>
        {folder}
      </div>
  )
}

export default Notescard
