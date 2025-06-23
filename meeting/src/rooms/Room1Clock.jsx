import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Room1.scss';

const Room1Clock = () => {
    const [digits, setDigits] = useState([0, 0, 0, 0]);
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleArrowClick = (index, direction) => {
        setDigits((prev) => {
            const updated = [...prev];
            updated[index] = (updated[index] + (direction === 'up' ? 1 : 9)) % 10;
            return updated;
        });
    };

    const checkTime = () => {
        const correct = [1, 4, 3, 0];
        const matched = digits.every((num, i) => num === correct[i]);
        if (matched) {
            setMessage('✅ Time set correctly. Starting the meeting...');
            setTimeout(() => navigate('/room2intro'), 1500); // Delay for effect
        } else {
            setMessage('❌ Try again.');
        }
    };

    return (
        <div className="clock-puzzle">
            <h2>Set the Meeting Time in 24 Hour Format</h2>

            <div className="digit-container">
                {digits.map((digit, index) => (
                    <div key={index} className="digit-box">
                        <button onClick={() => handleArrowClick(index, 'up')} className="arrow">▲</button>
                        <div className="digit">{digit}</div>
                        <button onClick={() => handleArrowClick(index, 'down')} className="arrow">▼</button>
                    </div>
                ))}
            </div>

            <div style={{ display: 'flex', gap: '1rem' }}>
                <button className="submit-button" onClick={checkTime}>Set Time</button>
                <button className="back-button" onClick={() => navigate('/room1')}>← Back to Desk</button>
            </div>

            {message && <div className="clock-message">{message}</div>}
        </div>
    );
};

export default Room1Clock;
