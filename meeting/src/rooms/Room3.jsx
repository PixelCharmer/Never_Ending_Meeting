import React, { useState, useEffect } from 'react';
import '../styles/Room3.scss';

import room3Bg from '../assets/backgrounds/room3_bg.png';
import yogurtRiddle from '../assets/game_elements/room3/yogurt_riddle.png';
import maxRiddle from '../assets/game_elements/room3/max_riddle.png';
import creamerRiddle from '../assets/game_elements/room3/creamer_riddle.png';
import microwaveRiddle from '../assets/game_elements/room3/microwave_riddle.png';

import { useNavigate } from 'react-router-dom';



const Room3 = () => {
    const [cluesFound, setCluesFound] = useState({
        yogurt: false,
        max: false,
        creamer: false,
        microwave: false,
    });

    const navigate = useNavigate();

    const [zoomedClue, setZoomedClue] = useState(null);

    const toggleZoom = (key) => {
        setCluesFound(prev => ({ ...prev, [key]: true }));
        setZoomedClue(prev => (prev === key ? null : key));
    };

    const clueImages = [
        { key: 'yogurt', src: yogurtRiddle, alt: 'Yogurt Riddle', className: 'yogurt' },
        { key: 'max', src: maxRiddle, alt: 'Max Riddle', className: 'max' },
        { key: 'creamer', src: creamerRiddle, alt: 'Creamer Riddle', className: 'creamer' },
        { key: 'microwave', src: microwaveRiddle, alt: 'Microwave Riddle', className: 'microwave' },
    ];

    const [puzzlesSolved, setPuzzlesSolved] = useState({
        riddleCode: localStorage.getItem('room3_code_solved') === 'true',
        coffee: localStorage.getItem('room3_coffee_solved') === 'true',
        riddles: false,
    });

    const allCluesFound = Object.values(cluesFound).every(Boolean);

    useEffect(() => {
        if (allCluesFound && !puzzlesSolved.riddles) {
            setPuzzlesSolved(prev => ({ ...prev, riddles: true }));
        }
    }, [allCluesFound]);

    const allSolved = Object.values(puzzlesSolved).every(Boolean);

    const handleWindowClick = () => {
        if (allSolved) {
            navigate('/room4intro'); // ✅ Route to Room 4 Intro
        }
    };



    return (
        <div className={`room3-container ${zoomedClue ? 'zooming' : ''}`}>
            <img src={room3Bg} alt="Break Room" className="room3-bg" />

            {clueImages.map(({ key, src, alt, className }) => (
                <img
                    key={key}
                    src={src}
                    alt={alt}
                    className={`clue-img ${className} ${zoomedClue === key ? 'zoomed' : ''}`}
                    title="Click to zoom"
                    onClick={() => toggleZoom(key)}
                />
            ))}

            <div
                className="puzzle-node"
                title="This note seems important..."
                onClick={() => navigate('/room3code')}
            />

            <div
                className="coffee-machine-node"
                title="Something's up with the coffee machine..."
                onClick={() => navigate('/room3coffee')}
            />

            <div
                className={`window-node ${allSolved ? 'unlocked' : 'locked'}`}
                title={
                    allSolved
                        ? 'The window creaks open. Time to move on...'
                        : 'It’s jammed shut. Something’s not done yet...'
                }
                onClick={handleWindowClick}
            />

        </div>


    );
};

export default Room3;
