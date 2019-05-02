import React from 'react';
import { Link } from 'react-router-dom';
import close from './img/close.png';

import './Terms.css';

function Cookies() {
  return (
    <div className="TermsContainer">
      <Link to="/"><img alt="close" src={close} className="CloseButton" /></Link>
      <h1>Cookies policy</h1>
      <p>1. Introduction</p>
      <p>This Cookie Policy (“Policy “) is intended to inform you about how Best for Britain, the campaign name of UK-EU OPEN POLICY LIMITED  (“us, “we”, “our”) uses a technology called “cookies” and web server logs. This Policy is intended to assist you in making informed decisions when using our website - GetVoting.org - and our services (“GetVoting.org service”). Please take a minute to read and understand this cookie policy.</p>
      <br />
      <p>This cookie policy should also be read in conjunction with our <Link to="/privacyPolicy/">Privacy Policy</Link> and our website <Link to="/termsAndConditions/">Terms of Use</Link>.</p>
      <br />
      <p>2. What are cookies and what do they do?</p>
      <p>A cookie is a very small text document, which often includes an anonymous unique identifier. When you visit a website, a computer asks your computer for permission to store this file in a part of your hard drive specifically designated for cookies.</p>
      <p>Information gathered through cookies may include the date and time of the visits made to a website, the pages viewed and the time spent at a website.</p>
      <p>For further details on cookies, please visit All About Cookies where you can find comprehensive information on cookies and similar technologies.</p>
      <br />
      <p>3. Consent to the use of cookies</p>
      <p>By continuing to use the GetVoting.org Service, you are deemed to consent to our use of the cookies described in this cookie policy.  If you do not consent to us using cookies then please read the next section of this cookie policy entitled “Blocking our Use of Cookies”.</p>
      <br />
      <p>4. Blocking our use of cookies</p>
      <p>You can block our use of cookies by activating the settings in your browser. Please visit All About Cookies where you can find comprehensive information on cookie management and blocking for a wide variety of browsers.</p>
      <br />
      <p>5. How we use cookies</p>
      <p>Analytics</p>
      <p>We use “analytics” cookies which, in conjunction with our web server’s log files, allow us to calculate the aggregate number of people visiting our Website and which parts of our Website are most popular. This helps us gather feedback so that we can improve our Website and better serve our users. We do not generally store any personal information that you provide to us in a cookie.</p>
      <p>Social Media</p>
      <p>We use cookies to personalise your interaction with social media, such as Twitter and Facebook.  Such cookies recognise users of those social media sites when you view social media content on our Website.  They also allow you to quickly share content across social media, through the use of simple ‘sharing’ buttons.</p>
      <p>Most of our cookies expire within a few days, although some may persist for longer periods of time.</p>
      <p>You can find more information about the individual cookies we use and the purposes for which they are used in the table below</p>
      <br />
      <p>Cookie Type</p>
      <p>Purpose</p>
      <p>Google Analytics</p>
      <p>To understand how the site to guide improvements and offer targeted search results.</p>
      <p>Facebook Custom Audience</p>
      <p>This allows us to advertise to you on Facebook.</p>
      <p>Twitter Advertising</p>
      <p>This allows us to advertise to you on Twitter.</p>
      <br />
      <p>Last Updated April 2019</p>
    </div>
  );
}

export default Cookies;
