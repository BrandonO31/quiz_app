import React , {Fragment} from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const Play = () => (
    <Fragment>
        <Helmet><title>Quiz in progress ...</title></Helmet>
        <div id="quiz-page">
            <section>
                <div style={{textAlign: 'center'}}>
                   Placeholder
                </div>
                <h1>Topic of Quiz</h1>
                <div className="question-container">
                    <p>What is 1 + 1?</p>
                </div>
            </section>
        </div>
    </Fragment>

)



export default Play;