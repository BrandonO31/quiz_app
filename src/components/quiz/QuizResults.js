import React , {Fragment , useState , useEffect} from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { score } from './Play';


const QuizResults = () => {
    return (
      <Fragment>
        <Helmet>
          <title>Quiz Results</title>
        </Helmet>
        <div id = 'results-container'>
          <h1>Quiz Results</h1>
          <p id = 'score'>Your Score: {score}</p>
          
          <div className = "home-button"> <Link to="/">Go back to Home</Link> </div>
       
        </div>
      </Fragment>
    );
  };
export default QuizResults;


    

