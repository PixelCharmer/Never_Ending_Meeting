import React from 'react';
import { Routes, Route } from 'react-router-dom';
import GameStart from './rooms/GameStart';
import Room1Desk from './rooms/Room1Desk';
import Room1Solitaire from './rooms/Room1Solitaire';
import Room1Clock from './rooms/Room1Clock';
import Room2Intro from './rooms/Room2Intro';
import Room2 from './rooms/Room2';
import Room3intro from './rooms/Room3Intro';   
import Room3 from './rooms/Room3';
import Room3Code from './rooms/Room3Code';
import Room3Coffee from './rooms/Room3Coffee';
import Room4Intro from './rooms/Room4Intro';
import Room4 from './rooms/Room4';
import CarStartPuzzle from './rooms/CarStartPuzzle';
import SchmoozeDave from './rooms/SchmoozeDave'; // Update path if needed
import Wakeup from "./rooms/Wakeup";

const App = () => {
    return (
        <div className="app-container">
            <Routes>
                <Route path="/" element={<GameStart />} />
                <Route path="/room1" element={<Room1Desk />} />
                <Route path="/room1solitaire" element={<Room1Solitaire />} />
                <Route path="/room1clock" element={<Room1Clock />} />
                <Route path="/room2intro" element={<Room2Intro />} />  
                <Route path="/room2" element={<Room2 />} /> 
                <Route path="/room3intro" element={<Room3intro />} />  
                <Route path="/room3" element={<Room3 />} />
                <Route path="/room3code" element={<Room3Code />} />
                <Route path="/room3coffee" element={<Room3Coffee />} />
                <Route path="/room4intro" element={<Room4Intro />} />
                <Route path="/room4" element={<Room4 />} />
                <Route path="/carstartpuzzle" element={<CarStartPuzzle />} />
                <Route path="/schmoozedave" element={<SchmoozeDave />} />
                <Route path="/wakeup" element={<Wakeup />} />   
            </Routes>
        </div>
    );
};

export default App;
