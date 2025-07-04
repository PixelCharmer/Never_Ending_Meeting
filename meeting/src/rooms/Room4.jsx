﻿import React, { useState } from 'react';
import '../styles/Room4.scss';
import CarStartPuzzle from './CarStartPuzzle';
import SchmoozeDave from './SchmoozeDave'; // Update path if needed

import room4Bg from '../assets/backgrounds/room4_bg.png';
import karaMussa from '../assets/game_elements/room4/Kara_Mussa.png';

const Room4 = () => {
    const [activePuzzle, setActivePuzzle] = useState(null);

    const openPuzzle = (puzzle) => setActivePuzzle(puzzle);
    const closePuzzle = () => setActivePuzzle(null);

    return (
        <div className="room4-container">
            <img src={room4Bg} alt="Room 4 Background" className="room4-bg" />



            <div className="click-zone dave-zone" onClick={() => openPuzzle('riddle')} />

            <img
                src={karaMussa}
                alt="Kara Mussa"
                className="kara-mussa"
            />

            {activePuzzle && (
                <div className="puzzle-overlay">
                    <div className="puzzle-box">
                        {activePuzzle === 'riddle' && (
                            <SchmoozeDave
                               onSuccess={closePuzzle}
                               onClose={closePuzzle}
                             />
                        )}
                        <button onClick={closePuzzle} className="close-button">Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Room4;
