import React , {Fragment , useState , useEffect} from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import quizImg from '../../assets/img/backgroundflags.jpg';
import { translateText } from './api';
import response from './triviaQuestions';

let score = 0;

console.log(response);

const Play = () => {

    const [selectedChoice, setSelectedChoice] = useState(null);

    // add # of tries 

    const [quizData, setQuizData] = useState([]);

    let [currentQuizItem , setCurrentQuestion] = useState(0);

    let [quizOver , setQuizOver] = useState(false);

    let [translatedQuestion, setTranslatedQuestion] = useState(null);

    let [translatedChoices, setTranslatedChoices] = useState([]);

    

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
          if (currentQuizItem + 1 >= quizData.length) {
              setQuizOver(true);

          }
        }
      };
      
       
      
    //Trivia questions

    useEffect(() => {
     
      const fetchedData = response.slice(0, 1);
    
    
      setQuizData(fetchedData);
    
      // Question translation
      if (fetchedData.length > 0) {
        translateText(fetchedData[currentQuizItem].question)
          .then((trans_response) => {
            
            if (trans_response.status === "success") {
              setTranslatedQuestion(trans_response.data.translatedText);
              console.log(translatedQuestion);
            }
          })
          .catch((error) => {
            console.error(error);
            setTranslatedQuestion('Translation error');
          });
      }
    
      // Answer Choice translation
      if (fetchedData.length > 0) {
        let answerChoices = ['A', 'B', 'C', 'D']; 
        let translations = [];
    
        answerChoices.forEach((choice) => {
          translateText(fetchedData[currentQuizItem][choice])
            .then((trans_response) => {
              if (trans_response.status === "success") {
                const translatedText = trans_response.data.translatedText;
                translations.push({ choice, translatedText });
                if (translations.length === answerChoices.length) {
                  setTranslatedChoices(translations);
                }
              }
            })
            .catch((error) => {
              console.error(error);
            });
        });
      }
    }, []);



    //Debugging

    //**Note: For question and answer choice translations, it might be necessary to include if (quizData.length > 0) in order to ensure that all processes are carried out only once the quizData is fetched */
    console.log("API Data: ", quizData); 
    if (typeof trans_response !== 'undefined') console.log("Translated Question: " , translatedQuestion);
   if (typeof trans_response !== 'undefined') console.log("Translated Choices: "  , translatedChoices);
   // End of Debugging

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
                  <p>{translatedQuestion}</p>
                </div>
                  )}

            <div className="answer-choices">
              {quizData.length > 0 && (
                <ul>
                  <li className={selectedChoice === 'A' ? 'selected' : ''}
                    onClick={() => handleAnswerClick('A')}>A: {translatedChoices[0]?.translatedText}</li>
                  <li className={selectedChoice === 'B' ? 'selected' : ''}
                    onClick={() => handleAnswerClick('B')}>B: {translatedChoices[1]?.translatedText}</li>
                  <li className={selectedChoice === 'C' ? 'selected' : ''}
                    onClick={() => handleAnswerClick('C')}>C: {translatedChoices[2]?.translatedText}</li>
                  <li className={selectedChoice === 'D' ? 'selected' : ''}
                    onClick={() => handleAnswerClick('D')}>D: {translatedChoices[3]?.translatedText}</li>
                </ul>
              )}
            </div>

                </div>

                <div className="submit-button-container">
                 {quizOver ? ( // checks if quiz is over in order to change buttons functionality
                  <Link to="/play/results">See Results</Link> 
                  ) : ( <button className="submit-button"onClick={nextQuestion} disabled={selectedChoice === null}>Next Question</button>
               )}
                </div>

                <div className = "language-toggle-button-container">
                  <button className = "language-toggle-button">


                    
                  {/* English Question: quizData[currentQuizItem].question
                      English Choices: quizData[currentQuizItem].A
                      Spanish Question: translatedQuestion
                      Spanish Choices: translatedChoices[0]?.translatedText
                       */}

                  </button>

                </div>
            </section>
        </div>
    </Fragment>
    )

    }


   

export { score };
export default Play;