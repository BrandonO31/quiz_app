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
                    <p>This will be a short description about the quiz. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
                </div>
                
                    
      

                
            </section>
            
        </div>
    </Fragment>
        
     
 
    )


export default Home;