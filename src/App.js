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
        postalVote: false,
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
          <p>
            This tool helps you complete and send applications to electoral registration officers and to make the process as quick and easy as possible.
            We cannot guarantee that applications will be accepted, nor can we accept responsibility for non-delivery of applications.
            We advise users to contact their electoral registration officer directly to confirm receipt of application and to confirm whether it has been accepted.
            You can find out more about registering to vote at
            {' '}
            <a href="https://www.gov.uk/register-to-vote">https://www.gov.uk/register-to-vote</a>
          </p>
          <p>
            Promoted by Best for Britain, the campaign name of UK-EU OPEN POLICY LIMITED
            registered at International House, 24 Holborn Viaduct, London, EC1A 2BN.
            Best for Britain is registered with The Electoral Commission.
          </p>
        </div>
      </div>
    );
  }
}

export default App;
