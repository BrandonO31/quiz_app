import React , {Fragment , useState , useEffect} from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import quizImg from '../../assets/img/backgroundflags.jpg';
import { fetchData} from './api';

const Play = () => {

    const [selectedChoice, setSelectedChoice] = useState(null);

    const [quizData, setQuizData] = useState([]);

    const [currentQuestion , setCurrentQuestion] = useState(0);

    const [score , setScore] = useState(0);

    const handleAnswerClick = (choiceIndex) => {
        setSelectedChoice(choiceIndex);
        
    }

    const nextQuestion = () => {
        if (selectedChoice !== null) {
            const isCorrect = quizData[currentQuestion].correct === selectedChoice;
            if (isCorrect) {
                setScore(score + 1);
            }
        }

        const nextQuestionIndex = currentQuestion + 1;
        if (nextQuestionIndex < quizData.length) { //if there's questions remaining
            setCurrentQuestion(nextQuestionIndex);
            setSelectedChoice(null); // needed in order to reset the choice currently selected
        }
        else {
            // code here will end the quiz by bringing up a results page
        }
    }

    //Trivia questions

    useEffect(() => {
        fetchData().then((response) => {
            console.log("API Data:", response); 
            if (response && response.length > 0) {
                setQuizData(response.slice(0, 4)); // consider adding variables within the slice method to allow user to choose # of q's
            }
        });
    }, []);


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
                
                <div className="question-container">
                 {quizData.map((item, index) => (
                 <p>{item.question}</p>
                    ))}
                </div>
                <div className="answer-choices">
                    <ul>
                    {quizData.map((item, index) => (
                        <div>
                  <li
                    className={selectedChoice === index ? 'selected' : ''}
                    onClick={() => handleAnswerClick(index)}
                  >
                    {item.A}
                  </li>
                  <li
                  className={selectedChoice === index ? 'selected' : ''}
                  onClick={() => handleAnswerClick(index)}
                >
                  {item.B}
                </li>
                <li
                    className={selectedChoice === index ? 'selected' : ''}
                    onClick={() => handleAnswerClick(index)}
                  >
                    {item.C}
                  </li>
                  <li
                    className={selectedChoice === index ? 'selected' : ''}
                    onClick={() => handleAnswerClick(index)}
                  >
                    {item.D}
                  </li>
                </div>
                ))}
                    </ul>
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