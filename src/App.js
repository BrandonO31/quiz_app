import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/homepage';
import QuizInstructions from './components/quiz/QuizInstructions';
import Play from './components/quiz/Play';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/play/instructions" element={<QuizInstructions />} />
        <Route path="/play/quiz" element={<Play />} />
      </Routes>
    </Router>
  );
}

export default App;