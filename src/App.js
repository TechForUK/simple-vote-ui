import React from 'react';
import axios from 'axios';

import RenderingController from './RenderingController';

import './App.css';

const server = 'https://europe-west1-simple-vote-api-239117.cloudfunctions.net/fillAndSignForms';

function twoDigitFormat(number) {
  return (`0${number}`).slice(-2);
}


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        userType: '',
        firstName: '',
        surname: '',
        firstLineAddress: '',
        secondLineAddress: '',
        postcode: '',
        city: '',
        differentAddress: false,
        email: '',
        nationality: '',
        movedHouse: false,
        firstLineCurrentAddress: '',
        secondLineCurrentAddress: '',
        currentPostcode: '',
        currentCity: '',
        citizenOf: '',
        oldAddressFirstLineAddress: '',
        oldAddressSecondLineAddress: '',
        oldAddressPostcode: '',
        oldAddressCity: '',
        registeredAsOverseasVoter: false,
        dateOfBirth: '',
        nin: '',
        changedName: '',
        previousName: '',
        postalVote: true,
        currentDate: (() => {
          const currentDate = new Date();
          return `${currentDate.getFullYear()}-${twoDigitFormat(currentDate.getMonth() + 1)}-${twoDigitFormat(currentDate.getDate())}`;
        })(),
        registeredAtHome: false,
        homeCountryConstituency: '',
        postalVoteOption: 'indefintiely',
        postalVoteElectionDate: '',
        postalVoteFrom: '',
        postalVoteTo: '',
        signature: '',
      },
      electoralOfficeEmail: '',
      cookieNoticeDimsissed: localStorage.getItem('agreedToCookies') || false,
    };

    this.updateData = this.updateData.bind(this);
    this.submitData = this.submitData.bind(this);
    this.setElectoralOfficeEmail = this.setElectoralOfficeEmail.bind(this);
  }

  setElectoralOfficeEmail(email) {
    return this.setState({ electoralOfficeEmail: email });
  }

  updateData(event) {
    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;
    const { formData } = this.state;

    return this.setState({
      formData: {
        ...formData,
        [name]: value,
      },
    });
  }

  submitData() {
    const { formData, electoralOfficeEmail } = this.state;
    axios.post(`${server}/register`, { userData: { ...formData }, electoralOfficeEmail }).then((response) => {
      console.log(response);
    }).catch((error) => {
      console.log(error);
    });
  }

  render() {
    const { setElectoralOfficeEmail, updateData, submitData } = this;
    const {
      view,
      formData,
      electoralOfficeEmail,
      cookieNoticeDimsissed,
    } = this.state;

    return (
      <div className="App">
        <div className="App-content">
          <RenderingController
            view={view}
            formData={formData}
            setElectoralOfficeEmail={setElectoralOfficeEmail}
            electoralOfficeEmail={electoralOfficeEmail}
            updateData={updateData}
            submitData={submitData}
          />
        </div>
        <div className="imprint">
          Promoted by Best for Britain, the campaign name of UK-EU OPEN POLICY LIMITED
          registered at International House, 24 Holborn Viaduct, London, EC1A 2BN.
          Best for Britain is registered with The Electoral Commission.
          <br />
          <a href="https://democracyclub.org.uk/" className="imprint" target="_blank" rel="noopener noreferrer">Postcode lookup data provided by Democracy Club</a>
        </div>
        {!cookieNoticeDimsissed ? (
          <div className="CookieConsent">
            <p>
              This website uses cookies to ensure you get the best experience on our website.
              {' '}
              <a href="/cookiePolicy/">Learn more</a>
            </p>
            <button
              type="button"
              onClick={() => {
                this.setState({ cookieNoticeDimsissed: true });
                localStorage.setItem('agreedToCookies', true);
              }}
            >
              I agree
            </button>
          </div>
        ) : null}
      </div>
    );
  }
}

export default App;
