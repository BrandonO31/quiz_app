import React, { COmponent , Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const QuizInstructions = () => (
    <Fragment> 
        <Helmet><title>Quiz Instructions - Quiz App</title></Helmet>
        <div className="instructions-container">
            <h1>Hello From Instructions Page</h1>
            <li style={{ listStyle: 'none' }}><Link className="play-button" to="/play/quiz">Start the Quiz!</Link></li>
        </div>
    </Fragment>
    
)

export default QuizInstructions;
