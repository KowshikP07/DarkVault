import React, { useState } from 'react';

const Card = ({ ke, topic, notes }) => {
    const [activecont, setactive] = useState(false);

    const handleclick = () => {
        setactive(prev => !prev);
    };

    return (
        <div className={`card ${activecont ? 'active' : ''}`}>

            <div className="cardtop">
                <h1 className="cardtoph1">{topic}</h1>
            </div>
{
                notes.map((n, i) => (
                    <div className="notescontent" key={i}>
                        <p className='notestext'>{n.text}</p>
                    </div>
                ))
            }
            <div className="cardbottom">
                <button className="cardbtn" onClick={handleclick}>
                    Tap to unlock
                </button>
            </div>

        </div>
    );
};

export default Card;
