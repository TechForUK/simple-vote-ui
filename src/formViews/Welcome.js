import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import imageTimer from './img/timer.png';
import imageFillForm from './img/fill_form.png';
import imageTick from './img/tick.png';
import imageMail from './img/mail.png';
import logo from './img/logo.png';
import './Welcome.css';

function Welcome() {
  return (
    <Fragment>
      <img alt="logo" src={logo} className="image-logo" />
      <div className="welcome-row-1">
        <img alt="timer" src={imageTimer} className="image-timer" />
        <p className="primary-text">Sign up to vote in under 5 mins!</p>
        <p className="secondary-text">No printing, no posting, no fuss!</p>
      </div>
      <Link className="Button" to="/typeOfVoter/">Start Now</Link>
      <div className="welcome-row-2">
        <p className="welcome-row-2-element">
          <img alt="filled out form" src={imageFillForm} className="image-row-2" />
          <span className="secondary-text">Fill in your details</span>
        </p>
        <p className="welcome-row-2-element">
          <img alt="checked box" src={imageTick} className="image-row-2" />
          <span className="secondary-text">Check it’s all correct</span>
        </p>
        <p className="welcome-row-2-element">
          <img alt="envelope" src={imageMail} className="image-row-2" />
          <span className="secondary-text">We send it for you!</span>
        </p>
      </div>
      <p>
        By using this app you agree to our
        {' '}
        <a href="/termsAndConditions/">Terms and Conditions</a>
        . We will not collect any of the data you provide, you can have a look at our
        {' '}
        <a href="/privacyPolicy/">Privacy policy</a>
        .
      </p>
    </Fragment>
  );
}

export default Welcome;
