// src/rooms/Room2Intro.jsx
import React from 'react';
import '../styles/Room2Intro.scss';
import room2IntroBg from '../assets/backgrounds/room2intro_bg.png';
import { useNavigate } from 'react-router-dom';

const Room2Intro = () => {
  const navigate = useNavigate();

  return (
    <div className="room2intro-container" style={{ backgroundImage: `url(${room2IntroBg})` }}>
      <div className="intro-overlay">
        <p>You're in a virtual meeting, camera on. Faces peer back as your boss drones on. Prepare to outwit and escape.</p>
        <button onClick={() => navigate('/room2')}>Enter Meeting</button>
      </div>
    </div>
  );
};

export default Room2Intro;
