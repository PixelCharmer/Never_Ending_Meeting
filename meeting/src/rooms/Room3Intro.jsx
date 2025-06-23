// Room3Intro.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Room3Intro.scss';

import room3Bg from '../assets/backgrounds/room3intro_bg.png'; // Replace with actual image path if different

const Room3Intro = () => {
    const navigate = useNavigate();

    const handleContinue = () => {
        navigate('/room3');
    };

    return (
        <div className="room3-intro" style={{ backgroundImage: `url(${room3Bg})` }}>
            <div className="intro-overlay">
                <p>
                    You tumble out into the break room. The coffee machine sputters to life. A sticky note war rages on the fridge.
                    But you're not alone - Darla the Snitch lurks just beyond the door!
                </p>
                <p>
                    You'll need to either craft the perfect cup of coffee to distract her so you can escape out the window.
                </p>
                <button onClick={handleContinue}>Get your brew on</button>
            </div>
        </div>
    );
};

export default Room3Intro;
