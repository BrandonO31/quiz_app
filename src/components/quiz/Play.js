import React , {Fragment , useState , useEffect} from 'react';
import { Helmet } from 'react-helmet';
import { Link , useNavigate } from 'react-router-dom';
import quizImg from '../../assets/img/backgroundflags.jpg';
import { translateText } from './api';
import response from './triviaQuestions';
import QuizResults from './QuizResults';



console.log(response);

const Play = () => {

    const [selectedChoice, setSelectedChoice] = useState(null);

    const [quizData, setQuizData] = useState([]);

    let [currentQuizItem , setCurrentQuestion] = useState(0);

    let [quizOver , setQuizOver] = useState(false);

    const [score, setScore] = useState(0);

    let [translatedQuestion, setTranslatedQuestion] = useState(null);

    let [translatedChoices, setTranslatedChoices] = useState([]);

    const [userAnswers, setUserAnswers] = useState([])

    const [questionLanguageToggle, setQuestionLanguageToggle] = useState(false);
    //Spanish/ false (default) , English/true

    const [choiceLanguageToggle, setChoiceLanguageToggle] = useState(false);

    const navigate = useNavigate();



    let currentQuestionNumber = currentQuizItem + 1;

    

    const handleAnswerClick = (choiceIndex) => {
        setSelectedChoice(choiceIndex);
        
    }

    const handleQuestionLanguageToggle = () => {

      if (questionLanguageToggle === false) setQuestionLanguageToggle(true);
      else setQuestionLanguageToggle(false);
      
    }

    const handleChoiceLanguageToggle = () => {

      if (choiceLanguageToggle === false) setChoiceLanguageToggle(true);
      else setChoiceLanguageToggle(false);
    }

    const resetScore = () => {
      setScore(0);
    }
    
    const nextQuestion = () => {
      if (selectedChoice !== null) {
        let isCorrect = quizData[currentQuizItem].answer === selectedChoice;
        if (isCorrect) {
          setScore(score + 1);
        }
        setUserAnswers([...userAnswers, selectedChoice]);
      }
    
      let nextQuestionIndex = currentQuizItem + 1;
      if (nextQuestionIndex < quizData.length) {
        setCurrentQuestion(++currentQuizItem);
        setSelectedChoice(null);
        setChoiceLanguageToggle(false);
        setQuestionLanguageToggle(false);

      }
       else {  
        // code here will end the quiz 
        setQuizOver(true);
      }
    };
      
       
      
   

    useEffect(() => {
     
      const grabQuestions = (array) => {
        for (let i = array.length -1; i > 0; i--) {
          const j = Math.floor(Math.random()* (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
      }
    const grabbedQuestions = grabQuestions(response);

    const fetchedData = grabbedQuestions.slice(0,10);

    // const fetchedData = response.slice(0, 10); // for testing purposes

    
    
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
        let translationPromises = []; // To store translation promises

  answerChoices.forEach((choice) => {
    translationPromises.push(
      translateText(fetchedData[currentQuizItem][choice])
        .then((trans_response) => {
          if (trans_response.status === "success") {
            const translatedText = trans_response.data.translatedText;
            return { choice, translatedText };
          }
        })
        .catch((error) => {
          console.error(error);
        })
    );
  });

  // Waits for asynch translations to complete, needed to make sure that they are pushed in the correct order
  Promise.all(translationPromises)
    .then((translations) => {
      setTranslatedChoices(translations);
      console.log("Translations: ", translations);
    })
    .catch((error) => {
      console.error(error);
    });
}
    }, [currentQuizItem]);

// This handles props for results page, ensures that they are passed accurately
    useEffect(() => {
      if (quizOver && userAnswers.length >= quizData.length) {
        navigate('/play/results', {
          state: {
            score: score,
            userAnswers: userAnswers,
            quizData: quizData,
            
          },
        });
        resetScore();
      }
    }, [quizOver, userAnswers, quizData, navigate]);


    //Debugging
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
                <h1>Quiz in English y Español - <span class="question-number">Question # {currentQuestionNumber}</span></h1>
                <div className = "quiz-container">
                <img className="quiz-image" src={quizImg} alt="Quiz Image" /> {}
                
                {quizData.length > 0 && ( 
                    // this conditional statement is needed to ensure that quizData contains something before being used

                <div className="question-container">
                  <p>{questionLanguageToggle ? quizData[currentQuizItem].question : translatedQuestion}</p>
                </div>
                  )}

            <div className="answer-choices">
              {quizData.length > 0 && (
                <ul>
                  <li className={selectedChoice === 'A' ? 'selected' : ''}
                    onClick={() => handleAnswerClick('A')}>A: {choiceLanguageToggle ? quizData[currentQuizItem].A : translatedChoices[0]?.translatedText}</li>
                  <li className={selectedChoice === 'B' ? 'selected' : ''}
                    onClick={() => handleAnswerClick('B')}>B: {choiceLanguageToggle ? quizData[currentQuizItem].B : translatedChoices[1]?.translatedText }</li>
                  <li className={selectedChoice === 'C' ? 'selected' : ''}
                    onClick={() => handleAnswerClick('C')}>C: {choiceLanguageToggle ? quizData[currentQuizItem].C : translatedChoices[2]?.translatedText }</li>
                  <li className={selectedChoice === 'D' ? 'selected' : ''}
                    onClick={() => handleAnswerClick('D')}>D: {choiceLanguageToggle ? quizData[currentQuizItem].D : translatedChoices[3]?.translatedText }</li>
                </ul>
              )}
            </div>

                </div>

                           
            <div className="submit-button-container">
              {quizOver ? (
                <button className="results-button">
                  <Link
                    to="/play/results"
                   >
                    See Results
                  </Link>
                </button>
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


                <div className = "language-toggle-button-container">
                  <div>
                  <button className = "question-toggle-button" onClick={handleQuestionLanguageToggle}>


                    
                  {/* English Question: quizData[currentQuizItem].question
                      English Choices: quizData[currentQuizItem].A
                      Spanish Question: translatedQuestion
                      Spanish Choices: translatedChoices[0]?.translatedText
                       */}

                  Change Question Language</button> 
                  </div>
                    <div>
                  <button className = "choice-toggle-button" onClick={handleChoiceLanguageToggle}>
                  Change Answer Language</button>
                  </div>
                </div>

                

               
            </section>
        </div>
    </Fragment>
    )

    }


   

export default Play;