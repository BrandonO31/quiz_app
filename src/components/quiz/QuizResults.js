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
        <div>
          <h1>Quiz Results</h1>
          <p>Your Score: {score}</p>
          {/* Display other result-related information */}
          <Link to="/">Go back to Home</Link>
        </div>
      </Fragment>
    );
  };
export default QuizResults;


    

