import React, { useEffect, useState } from 'react';
import '../styles/Wakeup.scss';
import bgImage from '../assets/backgrounds/room1_bg.png';

const Wakeup = () => {
    const [fade, setFade] = useState(true);
    const [showCredits, setShowCredits] = useState(false);

    useEffect(() => {
        const fadeTimer = setTimeout(() => setFade(false), 2000);
        const creditsTimer = setTimeout(() => setShowCredits(true), 7000);
        return () => {
            clearTimeout(fadeTimer);
            clearTimeout(creditsTimer);
        };
    }, []);

    return (
        <div className="wakeup-container">
            <img src={bgImage} alt="Room Background" className="wakeup-bg" />
            {fade && <div className="fade-overlay" />}

            {!fade && !showCredits && (
                <div className="wakeup-text">
                    <h1>Your eyes slowly open</h1>
                    <p>Then your screen lights back up.</p>
                    <p>The boss is still droning on</p>
                    <p><strong>You fell asleep... the meeting never ended.</strong></p>
                </div>
            )}

            {showCredits && (
                <div className="credits-container">
                    <div className="credits-scroll">
                        <h2>The Never Ending Meeting</h2>
                        <p>Storyline by Laura Leach</p>
                        <p>Code by Kari & ChatGPT</p>
                        <br />
                        <p>Thanks for playing!</p>
                        <p>💤</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Wakeup;
