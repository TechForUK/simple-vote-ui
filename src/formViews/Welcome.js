import React, { Fragment } from 'react';
import image_timer from './img/timer.png'
import logo from './img/logo.png'
import './Welcome.css';

function Welcome({ switchView }) {
  return (
    <Fragment>
      <img src={logo} className="image_logo"/>
      <div className="welcome-row-1">
        <img src={image_timer} className="image_timer"/>
        <p className="primary_text">Register to vote in under 5 mins!</p>
        <p className="secondary_text">Less than the time it take to make a cup of tea</p>
      </div>
      <p>
        Simple vote allows a streamilined voter registration.
        You just fill in a 3 minute form and we will handle the rest for you.
      </p>
      <button type="button" onClick={() => switchView('typeOfVoter')}>Start Now ...</button>
    </Fragment>
  );
}

export default Welcome;
