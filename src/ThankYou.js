import React, { Fragment } from 'react';
import imageFacebook from './img/Facebook.png'
import imageTwitter from './img/Twitter.png'
import imageReddit from './img/Reddit.png'
import imageLinkedIn from './img/LinkedIn.png'
import imageWordpress from './img/Wordpress.png'
import imageEmail from './img/Email.png'
import imageB4bLogo from './img/b4b-new-white-logo.svg'

import './Thankyou.css';

function ThankYou() {
  return (
    <Fragment>
      <h1>Thank you!</h1>
      <p>Thank you for submitting your application to register to vote.</p>
      <p>Sharing is caring ... Can you help get someone else enrolled to vote?</p>
      <ul className="share-buttons">
        <li><a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fsimple.getvoting.org&quote=Get%20Voting%20-%20Register%20to%20vote%20in%20the%20UK%20to%20make%20sure%20you%20can%20vote!%20%23ThisTimeImVoting%20It%20takes%20five%20minutes%20online%20and%20you%20don%E2%80%99t%20need%20a%20printer!%20Make%20sure%20your%20voice%20is%20heard." title="Share on Facebook" target="_blank" rel="noopener noreferrer"><img alt="Share on Facebook" src={imageFacebook} /></a></li>
        <li><a href="https://twitter.com/intent/tweet?source=https%3A%2F%2Fsimple.getvoting.org&text=Get%20Voting%20-%20Register%20to%20vote%20in%20the%20UK%20to%20make%20sure%20you%20can%20vote!%20%23ThisTimeImVoting%20It%20takes%20five%20minutes%20online%20and%20you%20don%E2%80%99t%20need%20a%20printer!%20Make%20sure%20your%20voice%20is%20heard.:%20https%3A%2F%2Fsimple.getvoting.org" target="_blank" title="Tweet" rel="noopener noreferrer"><img alt="Tweet" src={imageTwitter} /></a></li>
        <li><a href="http://www.reddit.com/submit?url=https%3A%2F%2Fsimple.getvoting.org&title=Get%20Voting%20-%20Register%20to%20vote%20in%20the%20UK%20to%20make%20sure%20you%20can%20vote!%20%23ThisTimeImVoting%20It%20takes%20five%20minutes%20online%20and%20you%20don%E2%80%99t%20need%20a%20printer!%20Make%20sure%20your%20voice%20is%20heard." target="_blank" title="Submit to Reddit" rel="noopener noreferrer"><img alt="Submit to Reddit" src={imageReddit} /></a></li>
        <li><a href="http://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fsimple.getvoting.org&title=Get%20Voting%20-%20Register%20to%20vote%20in%20the%20UK%20to%20make%20sure%20you%20can%20vote!%20%23ThisTimeImVoting%20It%20takes%20five%20minutes%20online%20and%20you%20don%E2%80%99t%20need%20a%20printer!%20Make%20sure%20your%20voice%20is%20heard.&summary=&source=https%3A%2F%2Fsimple.getvoting.org" target="_blank" title="Share on LinkedIn" rel="noopener noreferrer"><img alt="Share on LinkedIn" src={imageLinkedIn} /></a></li>
        <li><a href="http://wordpress.com/press-this.php?u=https%3A%2F%2Fsimple.getvoting.org&quote=Get%20Voting%20-%20Register%20to%20vote%20in%20the%20UK%20to%20make%20sure%20you%20can%20vote!%20%23ThisTimeImVoting%20It%20takes%20five%20minutes%20online%20and%20you%20don%E2%80%99t%20need%20a%20printer!%20Make%20sure%20your%20voice%20is%20heard.&s=" target="_blank" title="Publish on WordPress" rel="noopener noreferrer"><img alt="Publish on WordPress" src={imageWordpress} /></a></li>
        <li><a href="mailto:?subject=Get%20Voting%20-%20Register%20to%20vote%20in%20the%20UK%20to%20make%20sure%20you%20can%20vote!%20%23ThisTimeImVoting%20It%20takes%20five%20minutes%20online%20and%20you%20don%E2%80%99t%20need%20a%20printer!%20Make%20sure%20your%20voice%20is%20heard.&body=:%20https%3A%2F%2Fsimple.getvoting.org" target="_blank" title="Send email" rel="noopener noreferrer"><img alt="Send email" src={imageEmail} /></a></li>
      </ul>
      <p><a href="https://www.bestforbritain.org/" alt="Go To Best for britain"><img className="b4bLogo" src={imageB4bLogo} alt="logo" /></a></p>
      
    </Fragment>
  );
}

export default ThankYou;
