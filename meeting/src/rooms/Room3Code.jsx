import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Room3Code.scss';

const CORRECT_CODE = '9824';

const Room3Code = () => {
    const [input, setInput] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleClick = (digit) => {
        if (input.length < 4) {
            setInput(prev => prev + digit);
        }
    };

    const handleClear = () => {
        setInput('');
        setMessage('');
    };

    const handleSubmit = () => {
        if (input === CORRECT_CODE) {
            setMessage('✅ Correct! Click Coffee Put To Brew.');
            localStorage.setItem('room3_code_solved', 'true'); // for Room3Code.jsx
            setTimeout(() => navigate('/room3'), 1800); // delay return
        } else {
            setMessage('❌ Incorrect. Try again.');
            setInput('');
        }
    };

    return (
        <div className="code-room-container">
            <h2>Enter the 4-Digit Code</h2>
            <div className="display">{input || '----'}</div>

            <div className="keypad">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map(num => (
                    <button key={num} onClick={() => handleClick(num.toString())}>{num}</button>
                ))}
            </div>

            <div className="buttons">
                <button onClick={handleSubmit}>Enter</button>
                <button onClick={handleClear}>Clear</button>
            </div>

            <p className="message">{message}</p>
        </div>
    );
};

export default Room3Code;
