import React, { Fragment } from 'react';
import image_timer from './img/timer.png'
import image_fill_form from './img/fill_form.png'
import image_mail from './img/mail.png'
import image_tick from './img/tick.png'
import logo from './img/logo.png'
import './Welcome.css';

function Welcome({ switchView }) {
  return (
    <Fragment>
      <img src={logo} className="image-logo"/>
      <div className="welcome-row-1">
        <img src={image_timer} className="image-timer"/>
        <p className="primary-text">Register to vote in under 5 mins!</p>
        <p className="secondary-text">Less than the time it take to make a cup of tea</p>
      </div>
      <div>
        <p className="welcome-row-2-element">
          <img src={image_fill_form} className="image-row-2"/>
          <p className="secondary-text">Fill in your details</p>
        </p>
        <p className="welcome-row-2-element">
          <img src={image_tick} className="image-row-2"/>
          <p className="secondary-text">Check it’s all correct</p>
        </p>
        <p className="welcome-row-2-element">
          <img src={image_mail} className="image-row-2"/>
          <p className="secondary-text">We send it for you!</p>
        </p>
      </div>
      <p>
      No printing, no posting, no fuss!
      </p>
      <button type="button" onClick={() => switchView('typeOfVoter')}>Start Now ...</button>
    </Fragment>
  );
}

export default Welcome;
