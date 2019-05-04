import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import ModalForms from '../ModalForms';
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
        <p className="primary-text">Sign up to vote</p>
        <p className="primary-subtext">in 5 minutes</p>
        <div className="bullets">
          <ul className="bullets-list">
            <li className="bullets-listitem"><span>UK & EU Citizens</span></li>
            <li className="bullets-listitem"><ModalForms /></li>
            <li className="bullets-listitem"><span>Guideline compliant</span></li>
          </ul>
        </div>
      </div>
      <Link className="Button welcome" to="/typeOfVoter/">Start Now</Link>
      <div className="welcome-row-2">
        <p className="welcome-row-2-element">
          <img alt="filled out form" src={imageFillForm} className="image-row-2" />
          <span className="secondary-text">Enter your details</span>
        </p>
        <p className="welcome-row-2-element">
          <img alt="checked box" src={imageTick} className="image-row-2" />
          <span className="secondary-text">Check and Sign</span>
        </p>
        <p className="welcome-row-2-element">
          <img alt="envelope" src={imageMail} className="image-row-2" />
          <span className="secondary-text">We send it for you!</span>
        </p>
      </div>
      <p className="welcome-disclaimer">
        By using this app you agree to our
        {' '}
        <Link to="/termsAndConditions/">Terms and Conditions</Link>
        . We will not collect any of the data you provide, you can have a look at our
        {' '}
        <Link to="/privacyPolicy/">Privacy policy</Link>
        .
      </p>
    </Fragment>
  );
}

export default Welcome;
