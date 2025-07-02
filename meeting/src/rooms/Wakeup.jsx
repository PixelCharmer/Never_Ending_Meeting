import React, { useEffect, useState } from 'react';
import '../styles/Wakeup.scss';
import bgImage from '../assets/backgrounds/room1_bg.png';

const Wakeup = () => {
    const [fade, setFade] = useState(true);
    const [showText, setShowText] = useState(true);
    const [showCredits, setShowCredits] = useState(false);

    useEffect(() => {
        const fadeTimer = setTimeout(() => setFade(false), 2000);       // Fade out black overlay
        const textTimer = setTimeout(() => setShowText(false), 6000);   // Hide wakeup text
        const creditsTimer = setTimeout(() => setShowCredits(true), 5000); // Show credits

        return () => {
            clearTimeout(fadeTimer);
            clearTimeout(textTimer);
            clearTimeout(creditsTimer);
        };
    }, []);

    return (
        <div className="wakeup-container">
            <img src={bgImage} alt="Room Background" className="wakeup-bg" />
            {fade && <div className="fade-overlay" />}

            {!fade && showText && (
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
                        <p>Code by Kari Alcoset</p>
                        <br />
                        <p>Thanks for playing!</p>
                        <p>💤</p>
                        <p className="log-time">
                            <a
                                href="https://forms.gle/uvPk9JVSndkmA14r5"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Click here to log your escape time ⏱️
                            </a>
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Wakeup;
