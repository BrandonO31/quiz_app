import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import quizTemplateImg from '../../assets/img/quiz_english.png'
import languageToggleImage from '../../assets/img/language_toggle.png'


const QuizInstructions = () => (
    <Fragment> 
        <Helmet><title>Quiz Instructions - Quiz App</title></Helmet>
        <div id="instructions">
            <section>
            
            <h1>Please read the instructions before continuing</h1>

            <div className="instructions-list">
                <ul >
                    <li>Read the question carefully</li>
                    <li>Select the answer choice you believe is correct</li>
                    <li>If your choice is correct, then you will move on to the next question</li>
                    <li>If your choice is incorrect, you will not be able to guess again</li>
                </ul>
                <div className="quiz-template-container">
                 <img className ="quiz-template"src={quizTemplateImg} alt="Quiz Template Image" />
                </div>
            </div>
           
            <div className="instructions-list">
                <ul>
                    <li>You will have the ability to translate between English and Spanish for each question and it's answer choices by clicking the corresponding button</li>
                    <li style={{fontWeight: "bold"}}>These buttons can be used as often as you'd like. Have fun!</li>
                </ul>
            </div>
            <img className ="language-toggle-image"src={languageToggleImage} alt="Quiz Template Image" />

            <div className="quiz-start-button-container">
                    <ul style={{ listStyle: 'none'}}>
                        <li><Link className="quiz-start-button" to="/play/quiz">Start the Quiz!</Link></li>
                    </ul>
                </div>

          
            </section>
        </div>
    </Fragment>
    
)

export default QuizInstructions;
