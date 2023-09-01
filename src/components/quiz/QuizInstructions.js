import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import quizTemplateImg from '../../assets/img/quiztemplate.jpg'


const QuizInstructions = () => (
    <Fragment> 
        <Helmet><title>Quiz Instructions - Quiz App</title></Helmet>
        <div id="instructions">
            <section>
            
            <h1>Please read the instructions before continuing</h1>
            <div className="instructions-list">
                <ul>
                    <li>Read the question carefully</li>
                    <li>Select the answer choice you believe is correct</li>
                    <li>If your choice is correct, then you will move on to the next question</li>
                    <li>If your choice is incorrect, you will be able to guess again</li>


                </ul>
                

            </div>
            

            <img className ="quiz-template"src={quizTemplateImg} alt="Quiz Template Image" />
            
            <li style={{ listStyle: 'none' }}><Link className="quiz-start-button" to="/play/quiz">Start the Quiz!</Link></li>
            </section>
        </div>
    </Fragment>
    
)

export default QuizInstructions;
