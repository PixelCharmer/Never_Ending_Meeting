// Room1Solitaire.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Solitaire.scss';

import solitaireBg from '../assets/game_elements/room1/solitaire_screen.png';
import card2S from '../assets/game_elements/room1/cards/card_2spade.png';
import card4C from '../assets/game_elements/room1/cards/card_4clover.png';
import card6D from '../assets/game_elements/room1/cards/card_6diamond.png';
import card8C from '../assets/game_elements/room1/cards/card_8clover.png';
import card10D from '../assets/game_elements/room1/cards/card_10diamond.png';
import cardKH from '../assets/game_elements/room1/cards/card_kheart.png';

const correctOrder = [card2S, card4C, card8C, card6D, card10D, cardKH];

const Room1Solitaire = () => {
    const navigate = useNavigate();

    const [cards, setCards] = useState(shuffle([...correctOrder]));
    const [selectedIndex, setSelectedIndex] = useState(null);
    const [message, setMessage] = useState('');

    function shuffle(array) {
        let shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }

    const handleCardClick = (index) => {
        if (selectedIndex === null) {
            setSelectedIndex(index);
        } else {
            const newCards = [...cards];
            [newCards[selectedIndex], newCards[index]] = [newCards[index], newCards[selectedIndex]];
            setCards(newCards);
            setSelectedIndex(null);
        }
    };

    const handleSubmit = () => {
        const isCorrect = cards.every((card, index) => card === correctOrder[index]);
        if (isCorrect) {
            setMessage('Enough distraction - go set the time according to Steves time zone');
            setTimeout(() => navigate('/room1'), 1500);
        } else {
            setMessage('Wrong order. Try again!');
        }
    };

    return (
        <div className="solitaire-container">
            <div className="solitaire-wrapper">
                {cards.map((card, index) => (
                    <img
                        key={index}
                        src={card}
                        className={`card-img card-slot-${index} ${selectedIndex === index ? 'selected' : ''}`}
                        onClick={() => handleCardClick(index)}
                        alt={`Card ${index}`}
                    />
                ))}
                <button className="submit-btn" onClick={handleSubmit}>Submit</button>
                {message && <div className="message-display">{message}</div>}
            </div>
        </div>

    );
};

export default Room1Solitaire;
