import React from 'react';
import { Link } from 'react-router-dom';
import close from './img/close.png';
import './Terms.css';

function FAQ() {
  return (
    <div className="TermsContainer">
      <Link to="/"><img alt="close" src={close} className="CloseButton" /></Link>
      <h1>Frequently asked questions</h1>
      <ol>
        <li>
          <p className="faq_question">It&apos;s very hard to select the DOB year on Android</p>
          <p className="faq_answer">You can tap the year at the top of the date picker on android to scroll back by year.</p>
        </li>
      </ol>
    </div>
  );
}

export default FAQ;
