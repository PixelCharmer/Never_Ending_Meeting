import React, { useState } from 'react';
import '../styles/Room2.scss';
import { useNavigate } from 'react-router-dom';
import background from '../assets/backgrounds/room2_bg.png';
import slideGarbled from '../assets/game_elements/room2/presentation_slide_garbled.png';
import slideFixed from '../assets/game_elements/room2/boss_slide.png';
import rubberBand from '../assets/game_elements/room2/item_rubber_band.png';
import paperclip from '../assets/game_elements/room2/item_paperclip.png';
import laserPointer from '../assets/game_elements/room2/item_laser_pointer.png';

const Room2 = () => {
    const [slideSolved, setSlideSolved] = useState(false);
    const [slideClicked, setSlideClicked] = useState(false);
    const [input, setInput] = useState('');
    const [emojiPhase, setEmojiPhase] = useState(false);
    const [itemPhase, setItemPhase] = useState(false);
    const [ventUnlocked, setVentUnlocked] = useState(false);
    const [selectedItems, setSelectedItems] = useState([]);
    const [activeHintId, setActiveHintId] = useState(null);
    const [hintMessage, setHintMessage] = useState('');
    const [kpiQuestion, setKpiQuestion] = useState('');
    const [kpiCorrect, setKpiCorrect] = useState('');
    const [mathAnswer, setMathAnswer] = useState('');

    const correctSlide = 'MONTH TO MONTH REPEAT ORDERS';
    const correctEmoji = '🤠';
    const correctItems = ['paperclip', 'rubberband', 'laser'];

    const navigate = useNavigate();

    const handleSlideSubmit = () => {
        if (input.toUpperCase() === correctSlide) {
            setSlideSolved(true);
            setEmojiPhase(true);
        }
    };

    const handleEmojiGuess = (guess) => {
        if (guess === correctEmoji) {
            setItemPhase(true);
            setEmojiPhase(false); // No longer in emoji phase
            setKpiQuestion(''); // Clear any active KPI question
        } else {
            generateRandomKPI();
            setEmojiPhase(true); // Keep emoji phase active to allow re-try after KPI
        }
    };

    const generateRandomKPI = () => {
        const problems = [
            { q: "What’s 150% of 40?", a: "60" },
            { q: "What’s 25% of 80?", a: "20" },
            { q: "What’s 200% of 30?", a: "60" },
            { q: "What’s 10% of 250?", a: "25" },
            { q: "What’s 75% of 120?", a: "90" }
        ];
        const random = problems[Math.floor(Math.random() * problems.length)];
        setKpiQuestion(random.q);
        setKpiCorrect(random.a);
    };

    const handleMathCheck = () => {
        if (mathAnswer.trim() === kpiCorrect) {
            setKpiQuestion(''); // Clear the KPI question
            setMathAnswer(''); // Clear the math answer
            setEmojiPhase(true); // Allow retrying emoji
        } else {
            // Optionally, you can give a hint or just let them try again
            // For now, they just try the math again
        }
    };

    const handleItemSelect = (item) => {
        const newSelection = [...selectedItems, item];

        if (newSelection.length === 3) {
            const correctSequence = JSON.stringify(correctItems);
            const playerSequence = JSON.stringify(newSelection);

            if (playerSequence === correctSequence) {
                setVentUnlocked(true);
            }

            setSelectedItems([]); // Reset regardless
        } else {
            setSelectedItems(newSelection);
        }
    };




    const toggleHint = (id, message) => {
        if (activeHintId === id) {
            setActiveHintId(null);
            setHintMessage('');
        } else {
            setActiveHintId(id);
            setHintMessage(message);
        }
    };

    return (
        <div className="room2-container" style={{ backgroundImage: `url(${background})` }}>
            {!slideClicked && !slideSolved && (
                <img
                    src={slideGarbled}
                    alt="Garbled Slide Preview"
                    className="slide-image clickable"
                    onClick={() => setSlideClicked(true)}
                />
            )}

            {slideClicked && !slideSolved && (
                <div className="slide-puzzle">
                    <img src={slideGarbled} alt="Garbled Slide" className="slide-image" />
                    <div className="slide-input">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value.toUpperCase())}
                            placeholder="Enter Correct Slide Title"
                        />
                        <button onClick={handleSlideSubmit}>Submit</button>
                    </div>
                </div>
            )}

            {slideSolved && <img src={slideFixed} alt="Fixed Slide" className="slide-image" />}

            {emojiPhase && !kpiQuestion && ( 
                <div className="emoji-phase">
                    <p>Boss is waiting for your emoji reaction. Which one will get a laugh?</p>
                    <button onClick={() => handleEmojiGuess('🤹')}>🤹</button>
                    <button onClick={() => handleEmojiGuess('😶‍🌫️')}>😶‍🌫️</button>
                    <button onClick={() => handleEmojiGuess('🤖')}>🤖</button>
                    <button onClick={() => handleEmojiGuess('🤠')}>🤠</button>
                    <button onClick={() => handleEmojiGuess('🐲')}>🐲</button>
                    <button onClick={() => handleEmojiGuess('🐧')}>🐧</button>
                </div>
            )}

            {kpiQuestion && (
                <div className="kpi-question">
                    <p>Boss is mad! Solve: {kpiQuestion}</p>
                    <input
                        type="text"
                        value={mathAnswer}
                        onChange={(e) => setMathAnswer(e.target.value)}
                        placeholder="Enter answer"
                    />
                    <button onClick={handleMathCheck}>Check Answer</button>
                </div>
            )}


            {itemPhase && (
                <div className="item-selection">
                    <p>Select 3 items in order to make the boss look up. Follow the order of PRL:</p>
                    <img
                        src={paperclip}
                        alt="Paperclip"
                        className={`item-paperclip ${selectedItems.includes('paperclip') ? 'selected' : ''}`}
                        onClick={() => handleItemSelect('paperclip')}
                    />
                    <img
                        src={rubberBand}
                        alt="Rubber Band"
                        className={`item-rubberband ${selectedItems.includes('rubberband') ? 'selected' : ''}`}
                        onClick={() => handleItemSelect('rubberband')}
                    />
                    <img
                        src={laserPointer}
                        alt="Laser Pointer"
                        className={`item-laser ${selectedItems.includes('laser') ? 'selected' : ''}`}
                        onClick={() => handleItemSelect('laser')}
                    />
                </div>
            )}

            {ventUnlocked && <button className="vent-escape" onClick={() => navigate('/room3intro')}>Open Vent & Escape</button>}

            {hintMessage && <div className="hint-message">{hintMessage}</div>}

            {/* Hint Nodes */}
            <div className="hint-node node1" onClick={() => toggleHint('hint1', 'He loves the emoji that reminds him of the circus')}></div>
            <div className="hint-node node2" onClick={() => toggleHint('hint2', 'He’s a sucker for anything that makes his eyes water from laughter.')}></div>
            <div className="hint-node node3" onClick={() => toggleHint('hint3', 'Pretty sure 🐲 annoyed him during the last sync.')}></div>
            <div className="hint-node node4" onClick={() => toggleHint('hint4', 'Shine something up high so he wont see you crawl to the vent')}></div>
            <div className="hint-node node5" onClick={() => toggleHint('hint5', 'Try combining everyday objects. He’s easily distracted by lasers by techy stuff.')}></div>
        </div>
    );
};

export default Room2;
