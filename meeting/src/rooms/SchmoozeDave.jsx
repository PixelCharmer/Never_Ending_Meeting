import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/SchmoozeDave.scss';

const SchmoozeDave = () => {
    const [step, setStep] = useState(0);
    const [error, setError] = useState(false);
    const navigate = useNavigate();

const questions = [
    {
        text: "Would you rather host a vegan potluck or a backyard BBQ with steaks?",
        options: ["Vegan potluck", "Backyard BBQ with steaks"],
        answer: "Backyard BBQ with steaks"
    },
    {
        text: "Would you rather text someone or talk face-to-face?",
        options: ["Talk face-to-face", "Text"],
        answer: "Talk face-to-face"
    },
    {
        text: "Would you rather listen to today's Top 40 or blast classic '80s rock?",
        options: ["'80s rock", "Top 40",],
        answer: "'80s rock"
    },
    {
        text: "Would you rather own a smart robot dog or an old mutt with a limp?",
        options: ["Smart robot dog", "Old mutt with a limp"],
        answer: "Old mutt with a limp"
    },
    {
        text: "Would you rather laugh at a dad joke or groan and walk away?",
        options: ["Groan and walk away", "Laugh at a dad joke"],
        answer: "Laugh at a dad joke"
    },
    {
        text: "Would you rather eat pineapple on pizza or go hungry?",
        options: ["Go hungry", "Eat pineapple on pizza"],
        answer: "Go hungry"
    }
];

    const handleSelect = (choice) => {
        if (choice === questions[step].answer) {
            setError(false);
            if (step === questions.length - 1) {
                navigate('/wakeup');
            } else {
                setStep(step + 1);
            }
        } else {
            setError(true);
        }
    };

    const handleReset = () => {
        setStep(0);
        setError(false);
    };

    return (
        <div className="dave-puzzle">
            <h2>Schmooze Dave</h2>
            <p className="question">{questions[step].text}</p>

            <div className="options">
                {questions[step].options.map((opt, i) => (
                    <button key={i} onClick={() => handleSelect(opt)}>
                        {opt}
                    </button>
                ))}
            </div>

            {error && <p className="error-msg">Dave frowns. Try again.</p>}

            <div className="button-row">
                <button onClick={handleReset}>Reset</button>
            </div>
        </div>
    );
};

export default SchmoozeDave;