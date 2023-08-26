import React , {Fragment , useState} from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import quizImg from '../../assets/img/backgroundflags.jpg';
import axios from 'axios';

const Play = () => {

    const [selectedChoice, setSelectedChoice] = useState(null);

    const handleChoiceClick = (choiceIndex) => {
        setSelectedChoice(choiceIndex);
    }

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
                    <p>Select the answer choice that fits the image</p>
                </div>
                <div className="answer-choices">
                    <ul>
                                <li className={selectedChoice === 0 ? 'selected' : ''} onClick={() => handleChoiceClick(0)}>Choice 1</li>
                                <li className={selectedChoice === 1 ? 'selected' : ''} onClick={() => handleChoiceClick(1)}>Choice 2</li>
                                <li className={selectedChoice === 2 ? 'selected' : ''} onClick={() => handleChoiceClick(2)}>Choice 3</li>
                                <li className={selectedChoice === 3 ? 'selected' : ''} onClick={() => handleChoiceClick(3)}>Choice 4</li>
                    </ul>
                </div>
                </div>
                <div className="next-button">
                    <Link to="/play/next">Next Question</Link>
                </div>
            </section>
        </div>
    </Fragment>
    )

    }


// const options = {
//   method: 'GET',
//   url: 'https://mlemapi.p.rapidapi.com/randommlem',
//   headers: {
//     'X-RapidAPI-Key': '5cbe992ba7msh863033afc478086p1287c7jsn7f6d12c41f9d',
//     'X-RapidAPI-Host': 'mlemapi.p.rapidapi.com'
//   }
// };

// async function fetchData() {
//   for (let i = 0; i < 10; i++) {
//     try {
//       const response = await axios.request(options);
//       console.log(`Response ${i + 1}:`, response.data);
//     } catch (error) {
//       console.error(`Error ${i + 1}:`, error);
//     }
//   }
// }

// fetchData();



export default Play;