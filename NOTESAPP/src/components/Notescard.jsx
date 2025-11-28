import React, { useState } from 'react'

const Notescard = () => {
    const [activecont,setactive]=useState(null)
    const handleclick=(id)=>{
        setactive(id===activecont?null:id)
    }
  return (
      <div className="content">
        <div className={`card ${activecont===1 ? 'active' : ''}`}>
            <div className="cardtop"></div>
            <div className="notescontent"></div>
            <div className="notescontent"></div>
            <div className="notescontent"></div>
            <div className="notescontent"></div>
            <div className="cardbottom"><button className='cardbtn' onClick={()=>handleclick(1)}>Tap to unlock</button></div>
        </div>
        <div className={`card ${activecont===2 ? 'active' : ''}`}>
            <div className="cardtop"></div>
            <div className="notescontent"></div>
            <div className="notescontent"></div>
            <div className="notescontent"></div>
            <div className="notescontent"></div>
            <div className="cardbottom"><button className='cardbtn' onClick={()=>handleclick(2)}>Tap to unlock</button></div>
        </div>
        <div className={`card ${activecont===3 ? 'active' : ''}`}>
            <div className="cardtop"></div>
            <div className="notescontent"></div>
            <div className="notescontent"></div>
            <div className="notescontent"></div>
            <div className="notescontent"></div>
            <div className="cardbottom"><button className='cardbtn' onClick={()=>handleclick(3)}>Tap to unlock</button></div>
        </div>
      </div>
  )
}

export default Notescard
