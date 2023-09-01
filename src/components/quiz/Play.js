import React , {Fragment , useState , useEffect} from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import quizImg from '../../assets/img/backgroundflags.jpg';
import { fetchData} from './api';

const Play = () => {

    const [selectedChoice, setSelectedChoice] = useState(null);

    const [quizData, setQuizData] = useState([]);

    let [currentQuizItem , setCurrentQuestion] = useState(0);

    const [score , setScore] = useState(0);

    const handleAnswerClick = (choiceIndex) => {
        setSelectedChoice(choiceIndex);
        
    }

    const nextQuestion = () => {
        
        if (selectedChoice !== null) {
          const isCorrect = quizData[currentQuizItem].answer === selectedChoice;
          if (isCorrect) {
            setScore(score + 1);
          }
        }
      
        let nextQuestionIndex = currentQuizItem + 1;
        if (nextQuestionIndex < quizData.length) { // if there are questions remaining
          setCurrentQuestion(++currentQuizItem);
          setSelectedChoice(null); // needed to reset the selected choice
        } else {
          // code here will end the quiz by bringing up a results page
        }
      };
      

    //Trivia questions

    useEffect(() => {
        fetchData().then((response) => {
            
            if (response && response.length > 0) {
                setQuizData(response.slice(0, 4)); // consider adding variables within the slice method to allow user to choose # of q's
            }
        });
    }, []);



    console.log("API Data  Outside of useEffect(): ", quizData[0]); 
   
    return (
    <Fragment>
        <Helmet><title>Quiz in progress ...</title></Helmet>
        <div id="quiz-page">
        <section>
                <div style={{ textAlign: 'center' }}>
                    
                </div>
                <h1>Topic of Quiz</h1>
                <div className = "quiz-container">
                <img className="quiz-image" src={quizImg} alt="Quiz Image" /> {/* Replace with actual image path */}
                
                {quizData.length > 0 && ( 
                    // this conditional statement is needed to ensure that quizData contains something before being used
                 <div className="question-container">
                <p>{quizData[currentQuizItem].question}</p>
                 </div>
                )}
                <div className="answer-choices">
                    {quizData.length > 0 && (
                <ul>
                <li className={selectedChoice === 1 ? 'selected' : ''}
                onClick={() => handleAnswerClick(1)}>A: { quizData[currentQuizItem].A}</li>
                <li className={selectedChoice === 2 ? 'selected' : ''}
                onClick={() => handleAnswerClick(2)}>B: {quizData[currentQuizItem].B}</li>
                <li className={selectedChoice === 3 ? 'selected' : ''}
                onClick={() => handleAnswerClick(3)}>C: {quizData[currentQuizItem].C}</li>
                <li className={selectedChoice === 4 ? 'selected' : ''}
                onClick={() => handleAnswerClick(4)}>D: {quizData[currentQuizItem].D}</li>
                 </ul>
                 )}
                </div>

                </div>
                <div className="submit-button-container">
                    <button
                    className="submit-button"
                    onClick={nextQuestion}
                    disabled={selectedChoice === null}
                    >
                    Next Question
                    </button>
                </div>
            </section>
        </div>
    </Fragment>
    )

    }


   


export default Play;