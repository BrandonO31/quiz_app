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
                        <li><Link className="play-button" to="/play/instructions">Play</Link></li>
                    </ul>
                </div>
                <div className="desc-container">
                    <p>This is where the instructions will be written</p>
                </div>
                
                    
      

                
            </section>
            
        </div>
    </Fragment>
        
     
 
    )


export default Home;