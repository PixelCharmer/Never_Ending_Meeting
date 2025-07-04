﻿import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Room1.scss';

import roomBg from '../assets/backgrounds/room1_bg.png';
import solitaireScreen from '../assets/game_elements/room1/game_screen.png';
import sticky1 from '../assets/game_elements/room1/sticky_note_hint1.png';
import sticky2 from '../assets/game_elements/room1/sticky_note_hint2.png';
import clock from '../assets/game_elements/room1/digital_clock.png';
import stapler from '../assets/game_elements/room1/desk_item_stapler.png';
import calendar from '../assets/game_elements/room1/desk_calendar.png';

const Room1Desk = () => {
    const navigate = useNavigate();

    const [clicked, setClicked] = useState({
        sticky1: false,
        sticky2: false,
        stapler: false,
        calendar: false
    });
    const [selectedClue, setSelectedClue] = useState('');

    const [clockUnlocked, setClockUnlocked] = useState(false);

    useEffect(() => {
        const storedClicks = JSON.parse(localStorage.getItem('room1-clicks'));
        const solitaireDone = localStorage.getItem('solitaire-complete') === 'true';

        if (storedClicks) setClicked(storedClicks);

        const allCluesClicked = storedClicks && Object.values(storedClicks).every(Boolean);
        if (allCluesClicked && solitaireDone) {
            setClockUnlocked(true);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('room1-clicks', JSON.stringify(clicked));
        const allCluesClicked = Object.values(clicked).every(Boolean);
        const solitaireDone = localStorage.getItem('solitaire-complete') === 'true';
        if (allCluesClicked && solitaireDone) {
            setClockUnlocked(true);
        }
    }, [clicked]);

    const handleClueClick = (key, message) => {
        setClicked((prev) => ({ ...prev, [key]: true }));
        setSelectedClue(message);
    };

    const closeClue = () => {
        setSelectedClue('');
    };

    const handleClockClick = () => {
        if (clockUnlocked) {
            navigate('/room1clock');
        } else {
            alert('Finish all clues and the Solitaire game before unlocking the clock!');
        }
    };

    return (
        <div className="room1-bg" style={{ backgroundImage: `url(${roomBg})` }}>
            {selectedClue && (
                <div className="clue-overlay" onClick={closeClue}>
                    <div className="clue-message">{selectedClue}</div>
                </div>
            )}

            <img
                src={solitaireScreen}
                alt="Solitaire"
                className="clue-img solitaire"
                onClick={() => navigate('/room1solitaire')}
            />

            <img
                src={sticky1}
                alt="Sticky Note Hint 1"
                className={`clue-img sticky1 ${clicked.sticky1 ? 'dimmed' : ''}`}
                onClick={() => handleClueClick('sticky1', 'Red before black, kings don’t go first')}
            />

            <img
                src={sticky2}
                alt="Sticky Note Hint 2"
                className={`clue-img sticky2 ${clicked.sticky2 ? 'dimmed' : ''}`}
                onClick={() => handleClueClick('sticky2', 'Steve insists the MST time is only 45 minutes ahead')}
            />

            <img
                src={clock}
                alt="Digital Clock"
                className="clue-img clock"
                onClick={handleClockClick}
            />

            <img
                src={stapler}
                alt="Desk Stapler"
                className={`clue-img stapler ${clicked.stapler ? 'dimmed' : ''}`}
                onClick={() => handleClueClick('stapler', 'The stapler is jammed. Classic.')}
            />

            <img
                src={calendar}
                alt="Desk Calendar"
                className={`clue-img calendar ${clicked.calendar ? 'dimmed' : ''}`}
                onClick={() => handleClueClick('calendar', 'Why do my calendar e-vites never appear on my desk calendar....ugh')}
            />
        </div>
    );
};

export default Room1Desk;
