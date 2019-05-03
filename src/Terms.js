import React from 'react';
import { Link } from 'react-router-dom';
import close from './img/close.png';

import './Terms.css';

function Terms() {
  return (
    <div className="TermsContainer">
      <Link to="/"><img alt="close" src={close} className="CloseButton" /></Link>
      <h1>Terms and Conditions</h1>
      <p>By using the GetVoting.org website ("the site") to simplify your registration to vote in the UK, you agree that you have read, understand and agree to the following terms of use. The site may be referred to as ‘app’, ‘application’, ‘service’, or ‘website’.</p>
      <br />
      <p>It is important that you understand this as the site fills in forms in a particular way which could result in you being ineligible or submitting a form with missing or incorrect information.</p>
      <br />
      <h3>Eligibility to use the site</h3>
      <p>You must be in one of the the following categories to be able to initiate the site registration process.</p>
      <p>UK (England or Wales), Ireland, Malta, Cyprus or Commonwealth Citizen, currently living in the UK</p>
      <p>EU Citizen (excluding UK, Ireland, Malta, Cyprus or Commonwealth countries)</p>
      <p>If you are not within these categories you must register manually using the Gov.UK website or forms available from your local authority electoral services office.</p>
      <br />
      <h3>Form Assumptions</h3>
      <p>In order to simplify the forms required to register to vote, this website re-uses data on multiple forms, if required, and, in some cases, removes the ability to select particular options. By using this website, you acknowledge the following:</p>
      <br />
      <h4>Register to vote if you're living in England or Wales Form</h4>
      <p>Section 1</p>
      <p>Email address is an optional field on the form, however this is required so that we can send you a copy of your completed forms.</p>
      <p>Telephone number is an optional field and will not be collected or submitted on the form.</p>
      <p>Section 4</p>
      <p>This is optional and can not be filled in using this form.</p>
      <p>Section 9</p>
      <p>This website will not allow you to check ‘By proxy (someone voting on your behalf)’ using this application.</p>
      <p>This website will automatically select ‘By post’ if you decide to register for a postal vote or will leave both boxes unchecked.</p>
      <p>Section 10 will automatically check to not include your name and address in the open register.</p>
      <p>Section 11 - Your signature and today’s date in agreement of the declaration will be used on multiple forms. The declaration will be shown before your forms are submitted.</p>
      <br />
      <h4>Application to vote by post</h4>
      <p>Section 1</p>
      <p>It is assumed that your address, where you are registered to vote, shall be the same as the one you have already provided in the process.</p>
      <p>Section 2</p>
      <p>This website will select ‘until further notice (permament postal vote) by default however you may choose how long you want a postal vote for.</p>
      <p>Section 4</p>
      <p>Your signature will be used on multiple forms.</p>
      <br />
      <h4>European Parliament voter registration form (UC1)</h4>
      <p>Section 2</p>
      <p>It is assumed that your address, where you are registered to vote, shall be the same as the one you have already provided in the process.</p>
      <p>It is assumed that if you have previously answered ‘Yes’ to ‘Do you live at another address’ that the field ‘Are you currently living at this address?’ will be pre-ticked as ‘Yes’, alternatively this will be ticked as ‘No’</p>
      <p>Section 3</p>
      <p>This will be automatically filled in based on the Date of Birth you have provided.</p>
      <p>Section 4</p>
      <p>This is a declaration and must be fully read, therefore this has been integrated into the form to collect the appropriate data from you when needed.</p>
      <p>If you previously answered ‘Yes’ to ‘Do you live at another address’ previously in the form then the field ‘The address in section 2 is different from my current address in the UK’ will be ticked as ‘Yes’. Alternatively, the field ‘My current address is as shown in section 2’ will be checked.</p>
      <p>Your signature will be used on multiple forms.</p>
      <h4>Other</h4>
      <p>Based on the postcode provided, your registration to vote will be sent to your local authority electoral services office by email, where possible.</p>
      <p>This service does not guarantee a successful registration to vote.</p>
      <p>You agree to the terms of use, <Link to="/privacyPolicy/">privacy policy</Link> and <Link to="/cookiePolicy/">cookies policy</Link> outlined on the website</p>
      <br />
      <h2>TERMS OF USE</h2>
      <p>1. Introduction</p>
      <p>The GetVoting.org Website is brought to you Best for Britain, the campaign name of UK-EU OPEN POLICY LIMITED  (“us”, “we” or “our”). Our registered office address is: 24 Holborn Viaduct, London, EC1A 2BN. Best for Britain is registered with The Electoral Commission. Registered office Suite 1, 3rd Floor, 11-12 St. James’s Square, London SW1Y 4LB, United Kingdom Companies House registration 08188502.</p>
      <p>Please read these Terms of Use (“Terms”) carefully. They set out the basis on which we are allowing you to access and use our website GetVoting.org (the “Website”) and the functionality available through our Website.</p>
      <p>In addition to these Terms, your use of the certain parts of the Website may be subject to other terms and conditions that will be notified to you from time to time.</p>
      <p>We want to provide you with an excellent user experience when you use the Website. If you have any questions or queries about the Website or these Terms we would be delighted to help. Please contact us by using the details at the end of these Terms.</p>
      <br />
      <p>2. Acceptance of our terms</p>
      <p>By using the Website, you accept and agree to be bound by these Terms. If you do not accept these Terms you must not use the Website.</p>
      <br />
      <p>3. Our right to amend these terms</p>
      <p>We reserve the right to change, modify, add to, or delete portions of these Terms at any time including to reflect changes affecting the Website, our technology, relevant laws and/or regulatory requirements.</p>
      <p>If we do change these Terms, we will post the changes on this page and will indicate the effective date at the top. We may also communicate changes to you by email (where we have this information).</p>
      <p>You are responsible for regularly reviewing these Terms so that you are aware of any changes. Your continued use of the Website after any such changes constitutes your acceptance of the new Terms. If you do not agree to (or cannot comply with) the Terms as amended, please do not use the Website.</p>
      <br />
      <p>4. Your access and use of the Website</p>
      <p>Access to the Website is permitted on a temporary basis and we reserve the right to withdraw or amend the Website without notice.</p>
      <p>You are responsible for making all arrangements necessary to access the Website. You are also responsible for ensuring that all persons accessing the Website through your internet connection are aware of these Terms.</p>
      <p>You must not:</p>
      <p>interfere with, or disrupt, the Website or any servers or networks connected to the Website, including by transmitting any worms, viruses, malware, spyware or any other code of a destructive, malicious or disruptive nature. You may not inject content or code or otherwise alter or interfere with the way any page of the Website is rendered or displayed in a user’s browser or device;</p>
      <p>access the Website via a means not authorised in writing in advance by us, including but not limited to, automated devices, scripts, bots, spiders, crawlers or scrapers (except for standard search engine technologies);</p>
      <p>attempt to restrict another user of the Website from using or enjoying the Website and you must not encourage or facilitate the breach of these Terms by others;</p>
      <p>use the Website for any illegal or unauthorised purpose; or</p>
      <p>change, modify, adapt or alter the Website or change, modify or alter another website so as to inaccurately imply an association with the Website or with us.</p>
      <br />
      <p>5. Availability of the Website</p>
      <p>You acknowledge that the Website is provided “AS IS” and we cannot guarantee that the Website will:</p>
      <p>stay the same (as we might change the Website or remove it altogether);</p>
      <p>be compatible with all or any hardware or software which you may use;</p>
      <p>be available all the time or at any specific time;</p>
      <p>be accurate, reliable or up-to-date; or</p>
      <p>be error-free or free of viruses, electronic bugs, Trojan horses or other harmful components and you must take your own precautions accordingly.</p>
      <p>You also acknowledge that we cannot guarantee the performance or security of the Website. In particular, we will not be responsible for any damage or loss you may suffer directly or indirectly as a result of any virus attack that can be traced to the Website to the fullest extent permissible by law.</p>
      <br />
      <p>6. Your privacy and cookies</p>
      <p>The privacy of your personal data is important to us. Please see our <Link to="/privacyPolicy/">Privacy Policy</Link>  and <Link to="/cookiePolicy/">Cookie Policy</Link>  for details of how we will process your personal data and how we use cookies and similar technologies.</p>
      <br />
      <p>7. Intellectual property in the Website and the Content</p>
      <p>The design of the Website, the content and all software contained within the Website are protected by copyright, trade marks, patents and other intellectual property rights and laws.</p>
      <p>Neither the design of the Website nor the content may be copied, recorded, reproduced, transmitted, stored, sold or distributed without our prior written consent except as otherwise permitted in these Terms.</p>
      <p>Further, you must not:</p>
      <p>remove the copyright or trade mark notice or other proprietary notice contained in the Website and/or content; or</p>
      <p>use any content in any manner that may infringe any of our rights or the rights of a third party.</p>
      <br />
      <p>8. Grant of Rights and Licences</p>
      <p>By entering your details to allow us to send your information to the relevant Local Authority to register to vote, register for a postal vote, or register as an EU citizen to vote you agree to our <Link to="/privacyPolicy/">Privacy Policy.</Link></p>
      <br />
      <p>9. Linking to our website</p>
      <p>We will permit you to link to the home page of the Website provided you comply with the following:</p>
      <p>you only do so in a way that is fair and legal and does not take advantage of or damage our reputation;</p>
      <p>you do not suggest any form of association, approval or endorsement by us unless we have otherwise permitted; and</p>
      <p>you do not link to any other page of the Website other than the home page.</p>
      <p>We reserve our right to withdraw our permission to link in section 10.1 and 10.2 at any time without notice.</p>
      <p>You may not frame or embed any page or part of a page of the Website or the content on any third party website without our prior written consent.</p>
      <br />
      <p>10. If you breach these terms</p>
      <p>If you do not follow, or we suspect you are not following, these Terms then we may take any/all of the following actions:</p>
      <p>issue a warning to you;</p>
      <p>ban you, either temporarily or permanently, from accessing the Website;</p>
      <p>take legal action against you; and/or</p>
      <p>disclose such information to law enforcement authorities as we reasonably feel is necessary.</p>
      <p>The responses described above at section 11.1 are not limited and we may take any other actions we reasonably deem appropriate.</p>
      <br />
      <p>11. Termination</p>
      <p>We have the right to terminate your access to the Website at any time, without notice, for any reason, including without limitation, breach of these Terms. We may also at any time, at our sole discretion, discontinue the Website or any part thereof without prior notice and you agree that we shall not be liable to you or any third party for any termination of your access to the Website.</p>
      <br />
      <p>12. Warranties, disclaimer and limitation on liability</p>
      <p>PLEASE READ THIS SECTION CAREFULLY AS IT SETS OUT IMPORTANT INFORMATION CONCERNING OUR LIABILITY TO YOU AND YOUR LIABILITY TO US:</p>
      <p>Warranties</p>
      <p>We will endeavour to provide the Website and publish content with reasonable skill and care and will use reasonable efforts to promptly remedy any fault of which we are aware.</p>
      <p>Other than as expressly set out in section 12.1, the Website is provided without any representation or endorsement made and without further warranty of any kind whether express or implied, including but not limited to the implied warranties of satisfactory quality, fitness for a particular purpose, non-infringement, compatibility, security and accuracy.</p>
      <p>We do not guarantee the delivery of voter registration forms using GetVoting.org. We reserve the right to moderate all applications and to decline to deliver applications without notice on any basis whatsoever including, but not limited to, content which infringes the privacy, publicity or personal rights of others or contains defamatory, obscene, threatening, abusive or hateful material or content which does not align with the campaign aims of GetVoting.org</p>
      <p>Third Party Content Disclaimer</p>
      <p>The Website may contain content, the intellectual property rights in which belong to a third party (“Third Party Content”).  We give no warranties, representations or undertakings in respect of any Third Party Content that are made available on the Website.  Further the views and advice contained in any Third Party Content are those of the relevant third party and not us.  Accordingly we do not take any responsibility for any views or advice contained in such Third Party Content.</p>
      <p>Our liability to you</p>
      <p>We will not be liable under these Terms for any loss or damage caused by us or any of our employees or agents in circumstances where:</p>
      <p>there has been no breach of a legal duty of care which is owed by us or any of our employees or agents; and/or</p>
      <p>the loss or damage is not a reasonably foreseeable result of any breach of these Terms.</p>
      <p>You agree you will have no claim against us, in respect of any decision to remove the Website or any decision to suspend or terminate your access to the Website.</p>
      <p>In the absence of any negligence or other breach of duty by us, the use by you of the Website is entirely at your risk.</p>
      <p>Your liability to us</p>
      <p>You will be responsible for all claims, liabilities, damages, costs and expenses suffered or incurred by us as a result of your breach of these Terms or default in the discharge of your obligations.</p>
      <p>Nothing in this section 13 shall have the effect of excluding or limiting our liability or your liability for fraud or for death or personal injury caused by our/your negligence (as applicable).</p>
      <br />
      <p>13. Links to third party websites</p>
      <p>The Website may include links to third party websites that are controlled and maintained by others. Any link to other websites is not an endorsement of such websites and you acknowledge and agree that we are not responsible for the content or availability of any such websites. We recommend you review those websites’ terms and conditions and privacy policies to ensure you are happy to use them.</p>
      <br />
      <p>14. Severance</p>
      <p>If any of these Terms should be found to be invalid, illegal or unenforceable for any reason by any court of competent jurisdiction then such term shall be removed and the remaining terms shall survive and remain in full force and effect and continue to be binding on and enforceable by both of us.</p>
      <br />
      <p>15. Third party rights</p>
      <p>A person who is not a party to these Terms has no rights under the Contracts (Rights of Third Parties) Act 1999 to enforce any of these Terms but this section does not affect a right or remedy of a third party which exists or is available apart from that Act.</p>
      <br />
      <p>16. Governing law</p>
      <p>These Terms and the use of the Website generally and any dispute or claim arising out of or in connection with them or their subject matter or formation (including non-contractual disputes or claims) will be governed by English law.</p>
      <p>Any dispute or claim arising out of or in connection with such contracts or their formation (including non-contractual disputes or claims) shall be subject to the non-exclusive jurisdiction of the courts of England.</p>
      <br />
      <p>17. Contact Us</p>
      <p>If you have any suggestions for improvements or additions that you would like to see on the Website, please:</p>
      <p>send an email to us</p>
      <p><a href="mailto:info@bestforbritain.org">info@bestforbritain.org</a></p>
      <br />
      <p>Should you have a more formal enquiry or complaint about the Website (including any content), you should contact our customer services team at info@bestforbritain.org and we will try to answer your enquiry or resolve any complaint as soon as possible.</p>
      <br />
      <p>Last Updated April 2019</p>
    </div>
  );
}

export default Terms;
