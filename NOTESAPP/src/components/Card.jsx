import React, { useState } from 'react';

const Card = ({ ke, topic, notes }) => {
    const [activecont, setactive] = useState(null);
    const [displaynotes, setdisplay] = useState(null);

    const handleclick = (ke) => {
        setactive(ke === activecont ? null : ke)
    };
    const handleshow = (i) => {
        setdisplay(i === displaynotes ? null : key)
    }
    return (
        <div className={`card ${activecont === ke ? 'active' : ''}`} key={ke}>

            <div className="cardtop">
                <h1 className="cardtoph1">{topic}</h1>
            </div>
            {
                notes.map((n, i) => (
                    <div className="notescontent" key={i} onClick={()=>handleshow(i)}>
                        <p className='notestext'>{n.text}</p>
                    </div>
                ))
            }
            <div className="cardbottom">
                <button className="cardbtn" onClick={() => handleclick(ke)}>
                    Tap to unlock
                </button>
            </div>
            {displaynotes !== null && ( <div className="showing"> <div className="showbox"> <p>{notes[displaynotes].text}</p> <button className="closebtn" onClick={() => setdisplay(null)}>X</button> </div> </div> )}
        </div>
    );
};

export default Card;
