import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Room3Coffee.scss';

import coffeeOrderClue from '../assets/game_elements/room3/coffee_order.png';

const correctOrder = {
    roast: 'Medium',
    sugar: 3,
    creamer: 'Hazelnut',
};

const Room3Coffee = () => {
    const [roast, setRoast] = useState('');
    const [sugar, setSugar] = useState(0);
    const [creamer, setCreamer] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = () => {
        if (
            roast === correctOrder.roast &&
            sugar === correctOrder.sugar &&
            creamer === correctOrder.creamer
        ) {
            setMessage('✅ Perfect match! Darla is distracted...');
            localStorage.setItem('room3_coffee_solved', 'true');
            setTimeout(() => navigate('/room3'), 1500);
        } else {
            setMessage('❌ Nope. That’s not how Darla takes it. Try again.');
        }
    };

    const incrementSugar = () => {
        if (sugar < 5) setSugar(sugar + 1);
    };

    const decrementSugar = () => {
        if (sugar > 0) setSugar(sugar - 1);
    };

    return (
        <div className="coffee-puzzle-layout">
            <div className="clue-panel">
                <img src={coffeeOrderClue} alt="Coffee Clues" />
            </div>

            <div className="coffee-controls">
                <h2>Create Darla’s Coffee</h2>

                <div className="section">
                    <label>☕ Roast:</label>
                    <div className="options">
                        {['Light', 'Medium', 'Dark', 'Espresso', 'Decaf'].map((r) => (
                            <button
                                key={r}
                                className={roast === r ? 'selected' : ''}
                                onClick={() => setRoast(r)}
                            >
                                {r}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="section">
                    <label>🍬 Sugar: {sugar}</label>
                    <div className="sugar-controls">
                        <button onClick={decrementSugar}>−</button>
                        <button onClick={incrementSugar}>+</button>
                    </div>
                </div>

                <div className="section">
                    <label>🥛 Creamer:</label>
                    <div className="options">
                        {['None', 'Vanilla', 'Hazelnut', 'Almond', 'Oat Milk'].map((c) => (
                            <button
                                key={c}
                                className={creamer === c ? 'selected' : ''}
                                onClick={() => setCreamer(c)}
                            >
                                {c}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="submit-area">
                    <div className="button-row">
                        <button className="reset-btn" onClick={handleSubmit}>Brew It</button>
                    </div>
                </div>
                <p className="feedback">{message}</p>
            </div>
        </div>
    );
};

export default Room3Coffee;
