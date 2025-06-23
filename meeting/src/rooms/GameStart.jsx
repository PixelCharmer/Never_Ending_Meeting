import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../styles/global.scss'; // Global styles
import '../styles/GameStart.scss'; // Custom styling for GameStart

import background from '../assets/backgrounds/gamestart_bg.png';

const GameStart = () => {
    const navigate = useNavigate();

    return (
        <div
            className="gamestart-container"
            style={{ backgroundImage: `url(${background})` }}
        >
            <motion.div
                className="gamestart-content"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2 }}
            >
                <h1 className="title">🧠 The Never-Ending Meeting</h1>
                <p className="intro">
                    Welcome, brave office drone. <br />
                    You were just trying to find the start time for your 27th Zoom call of the day… but something went wrong.
                </p>
                <p className="intro">
                    The clock ticks. The coffee's cold. And the meeting? It never ends.
                </p>
                <p className="objective">
                    🔍 Your goal: Escape this digital office nightmare by solving puzzles, surviving coworkers, and beating the clock.
                </p>

                <motion.button
                    className="start-button"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => navigate('/room1')}
                >
                    Begin the Madness
                </motion.button>
            </motion.div>
        </div>
    );
};

export default GameStart;
