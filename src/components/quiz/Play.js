import React , {Fragment , useState , useEffect} from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import quizImg from '../../assets/img/backgroundflags.jpg';
import { fetchData} from './api';

const Play = () => {

    const [selectedChoice, setSelectedChoice] = useState(null);

    const [quizData, setQuizData] = useState([]);

    const handleAnswerClick = (choiceIndex) => {
        setSelectedChoice(choiceIndex);
    }

    //Trivia questions

    useEffect(() => {
        // Fetch data and set it to the quizData state
        fetchData().then((response) => {
            console.log("Fetched data:", response); // Check the fetched data
            if (response && response.length > 0) {
                setQuizData(response.slice(0, 1));
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
                  <li
                    className={selectedChoice === index ? 'selected' : ''}
                    onClick={() => handleAnswerClick(index)}
                  >
                    {item.answer}
                  </li>
                ))}
                    </ul>
                </div>
                </div>
                <div className="submit-button-container">
                <li style={{ listStyle: 'none' }}><Link className="submit-button" to="/play/next">Submit</Link></li>
                </div>
            </section>
        </div>
    </Fragment>
    )

    }


   


export default Play;