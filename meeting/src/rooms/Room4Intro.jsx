import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Room4Intro.scss';

import room4IntroBg from '../assets/backgrounds/room4intro_bg.png';
import entryPad from '../assets/game_elements/room4/entry_pad.png';
import karaMussa from '../assets/game_elements/room4/kara_mussa.png';

const Room4Intro = () => {
    const navigate = useNavigate();

    const handlePadClick = () => {
        navigate('/room4'); // Assuming this leads to the interactive room puzzle
    };

    return (
        <div className="room4intro-container">
            <img src={room4IntroBg} alt="Room 4 Intro Background" className="room4intro-bg" />

            <img
                src={entryPad}
                alt="Entry Pad"
                className="entry-pad"
                onClick={handlePadClick}
            />

            <img
                src={karaMussa}
                alt="Kara Mussa"
                className="kara-mussa"
            />
        </div>
    );
};

export default Room4Intro;
