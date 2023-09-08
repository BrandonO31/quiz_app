import React , {Fragment} from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';



const Home = () =>  (

    <Fragment> 
        <Helmet><title>Quiz App - Home</title></Helmet>
        <div id="home">
            <section>
            <div style={{textAlign: 'center' }}>
                    <span className="mdi mdi-book-open-variant  book"></span>
                </div>
                <h1>Quizás Quizzes</h1>
                <div className="play-button-container">
                    <ul>
                        <li style={{ listStyle: 'none' }}><Link className="play-button" to="/play/instructions">Play</Link></li>
                    </ul>
                </div>
                {/* Possible Login/Register buttons go here */}
                <div className="desc-container">
                    <p> Welcome to Quizas Quizzes - Your Bilingual Quiz Adventure! </p>

                   <p> Expand your Trivia and Espanol knowledge with a quiz app designed to improve your general knowledge. </p>
                    <ul>
                        <li>🌟 Bilingual Experience: Immerse yourself in questions presented in Spanish while having the flexibility to translate them back and forth to English. It's not just a quiz; it's a language-learning journey.</li>
                        <li>🧠 Educational & Entertaining: Test your knowledge and have fun at the same time. Whether you're a language enthusiast or just looking for a stimulating quiz, we've got you covered.</li>
                        <li>🏆 Varied Topics: Enjoy a wide array of trivia topics.</li>
                        <li>🕑 Quick & Easy: Access quizzes anytime, anywhere, right from our homepage. No need to search; it's all at your fingertips.</li>
                    </ul>
                   
                </div>
                
                    
      

                
            </section>
            
        </div>
    </Fragment>
        
     
 
    )


export default Home;