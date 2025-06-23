import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Room4Intro.scss';

const Room4Intro = () => {
    const navigate = useNavigate();

    const handleBegin = () => {
        navigate('/room4');
    };

    return (
        <div className="room4intro">
            <div className="intro-box">
                <h1>The Parking Lot: Final Stretch</h1>
                <p>
                    You're finally in your car. The engine is off. The parking lot guard — Dave — looms nearby, arms crossed and eyes sharp.
                    Escaping unnoticed won't be easy. You'll need to start the car quietly, charm your way past Dave, and trigger a fake emergency call.
                </p>
                <p>
                    Can you pull it off without raising suspicion?
                </p>
                <button onClick={handleBegin}>Begin</button>
            </div>
        </div>
    );
};

export default Room4Intro;
