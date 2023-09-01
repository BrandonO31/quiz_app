import React , {Fragment , useState , useEffect} from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import quizImg from '../../assets/img/backgroundflags.jpg';
import { fetchData} from './api';

let score = 0;

const Play = () => {

    const [selectedChoice, setSelectedChoice] = useState(null);

    // add # of tries 

    const [quizData, setQuizData] = useState([]);

    let [currentQuizItem , setCurrentQuestion] = useState(0);

    let [quizOver , setQuizOver] = useState(false);

    const handleAnswerClick = (choiceIndex) => {
        setSelectedChoice(choiceIndex);
        
    }

    const nextQuestion = () => {
        
        if (selectedChoice !== null) {
          let isCorrect = quizData[currentQuizItem].answer === selectedChoice;
          if (isCorrect) {
            ++score;
            
            
          }
        }
      
        let nextQuestionIndex = currentQuizItem + 1;
        if (nextQuestionIndex < quizData.length) { // if there are questions remaining
          setCurrentQuestion(++currentQuizItem);
          setSelectedChoice(null); // needed to reset the selected choice
        } else {
          // code here will end the quiz by bringing up a results page
          if (++currentQuizItem >= quizData.length) {
              setQuizOver(true);

          }
        }
      };
      
       
      
    //Trivia questions

    useEffect(() => {
        fetchData().then((response) => {
            
            if (response && response.length > 0) {
                setQuizData(response.slice(0, 3)); // consider adding variables within the slice method to allow user to choose # of q's
            }
        });
    }, []);



    console.log("API Data: ", quizData); 
    if (quizData.length > 0) console.log("Answer: " , quizData[currentQuizItem].answer);
   
    return (
    <Fragment>
        <Helmet><title>Quiz in progress ...</title></Helmet>
        <div id="quiz-page">
        <section>
                <div style={{ textAlign: 'center' }}>
                    
                </div>
                <h1>Topic of Quiz</h1>
                <div className = "quiz-container">
                <img className="quiz-image" src={quizImg} alt="Quiz Image" /> {}
                
                {quizData.length > 0 && ( 
                    // this conditional statement is needed to ensure that quizData contains something before being used

                <div className="question-container">
                  <p>{quizData[currentQuizItem].question}</p>
                </div>
                  )}

                <div className="answer-choices">
                    {quizData.length > 0 && (
                <ul>
                <li className={selectedChoice === 'A' ? 'selected' : ''}
                onClick={() => handleAnswerClick('A')}>A: { quizData[currentQuizItem].A}</li>
                <li className={selectedChoice === 'B' ? 'selected' : ''}
                onClick={() => handleAnswerClick('B')}>B: {quizData[currentQuizItem].B}</li>
                <li className={selectedChoice === 'C' ? 'selected' : ''}
                onClick={() => handleAnswerClick('C')}>C: {quizData[currentQuizItem].C}</li>
                <li className={selectedChoice === 'D' ? 'selected' : ''}
                onClick={() => handleAnswerClick('D')}>D: {quizData[currentQuizItem].D}</li>
                 </ul>
                 )}
                </div>

                </div>

                <div className="submit-button-container">
                 {quizOver ? ( // checks if quiz is over in order to change buttons functionality
                  <Link to="/play/results">See Results</Link>
                  ) : (
                <button
                 className="submit-button"
                 onClick={nextQuestion}
                  disabled={selectedChoice === null}
                >
                 Next Question
                </button>
               )}
                </div>
            </section>
        </div>
    </Fragment>
    )

    }


   

export { score };
export default Play;