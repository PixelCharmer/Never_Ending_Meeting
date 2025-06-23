import React, { useState } from 'react';
import '../styles/CarStartPuzzle.scss';

const CarStartPuzzle = ({ onSuccess, onClose }) => {
    const [input, setInput] = useState('');
    const [error, setError] = useState(false);

    const CORRECT_CODE = '1280'; // Replace with dynamic logic if needed

    const handleChange = (e) => {
        const val = e.target.value;
        if (/^\d{0,4}$/.test(val)) {
            setInput(val);
            setError(false);
        }
    };

    const handleSubmit = () => {
        if (input === CORRECT_CODE) {
            onSuccess();
        } else {
            setError(true);
        }
    };

    const handleReset = () => {
        setInput('');
        setError(false);
    };

    return (
        <div className="car-puzzle">
            <h2>Follow the ID card math</h2>
            <input
                type="text"
                maxLength="4"
                value={input}
                onChange={handleChange}
                className={error ? 'error' : ''}
                placeholder="4-digit code"
            />
            {error && <p className="error-msg">Incorrect code. Try again.</p>}
            <div className="button-row">
                <button onClick={handleSubmit}>Submit</button>
                <button onClick={handleReset}>Reset</button>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default CarStartPuzzle;
