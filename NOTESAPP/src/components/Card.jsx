import React, { useState } from 'react';

const Card = ({ ke, topic, notes,setdisplay }) => {
    const [activecont, setactive] = useState(null);

    const handleclick = (ke) => {   
        setactive(ke === activecont ? null : ke)
    };
    const handleshow=(realIndex)=>{
        setdisplay({topic:topic, ind:realIndex})
        console.log(realIndex)
    }
    return (
        <div className={`card ${activecont === ke ? 'active' : ''}`} key={ke}>

            <div className="cardtop">
                <h1 className="cardtoph1">{topic}</h1>
            </div>
            {
                notes.map((n, i) => (
                    <div className="notescontent" key={i} onClick={()=>handleshow(n.realIndex)}>
                        <p className='notestext'>{n.text}</p>
                    </div>
                ))
            }
            <div className="cardbottom">
                <button className="cardbtn" onClick={() => handleclick(ke)}>
                    Tap to unlock
                </button>
            </div></div>
    );
};

export default Card;
