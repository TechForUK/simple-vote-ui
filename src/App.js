import React from 'react';
import axios from 'axios';

import RenderingController from './RenderingController';

import './App.css';

const server = 'http://127.0.0.1:4000';

function twoDigitFormat(number) {
  return (`0${number}`).slice(-2);
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'welcome',
      formData: {
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
        dateOfNameChange: '',
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
    };

    this.updateData = this.updateData.bind(this);
    this.submitData = this.submitData.bind(this);
    this.switchView = this.switchView.bind(this);
  }

  // For debugging purposes; remove this later
  componentDidUpdate() {
    console.log(this.state.formData);
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
    const { formData } = this.state;
    axios.post(`${server}/register`, { userData: { ...formData } }).then((response) => {
      console.log(response);
    }).catch((error) => {
      console.log(error);
    });
  }

  switchView(newView) {
    this.setState({ view: newView });
  }

  render() {
    const { updateData, submitData, switchView } = this;
    const { view, formData } = this.state;

    return (
      <div className="App">
        <div className="App-content">
          <RenderingController
            view={view}
            formData={formData}
            updateData={updateData}
            submitData={submitData}
            switchView={switchView}
          />
        </div>
        <div className="imprint">Promoted by Best for Britain, the campaign name of UK-EU OPEN POLICY LIMITED registered at International House, 24 Holborn Viaduct, London, EC1A 2BN. Best for Britain is registered with The Electoral Commission.</div>
      </div>
    );
  }
}

export default App;
