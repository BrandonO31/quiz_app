import React , {Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { Link , useLocation} from 'react-router-dom';



const QuizResults = () => {

  const location = useLocation();
  const { score , userAnswers, quizData } = location.state;

  if (typeof quizData !== 'undefined') console.log("Results Page - Quiz Data: " , quizData);
  if (typeof userAnswers !== 'undefined')  console.log('Results Page - User Answers:', userAnswers);
  
 // handles displaying each question and users corresponding answer
  const resultsOverview = quizData.map((quizItem, index) => (
    <div key={index} className="result-item">
      <h3>Question {index + 1}:</h3>
      <p>{quizItem.question}</p>
      <p>Correct Answer: {quizItem[quizItem.answer]}</p>
      <p>Your Answer: {quizItem[userAnswers[index]]}</p>
    </div>
  ));

  // resetScore(score);
    return (
      <Fragment>
        <Helmet>
          <title>Quiz Results</title>
        </Helmet>
        <div id = 'results-container'>
          <h1>Quiz Results</h1>
          <p id = 'score'>Your Score: {score}</p>
          
          <div className = "home-button"> <Link to="/">Go back to Home</Link> </div>

          <div className = 'results-overview'>
            <h2>Quiz Overview</h2>
            {resultsOverview}
          </div>
       
        </div>

        
      </Fragment>
    );
  };
export default QuizResults;


    

