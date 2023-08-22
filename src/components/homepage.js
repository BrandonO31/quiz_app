import React , {Fragment} from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';



const Home = () =>  (

    <Fragment> 
        <Helmet><title>Quiz App - Home</title></Helmet>
        <div id="home">
            <section>
                <div>
                    <span className="mdi mdi-book-open-variant mdi-48px"></span>
                </div>
                <h1>Quiz App</h1>
                <div className="play-button-container">
                    <ul>
                        <li><Link to="/play/instructions">Play</Link></li>
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