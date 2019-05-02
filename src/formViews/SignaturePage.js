import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import SignaturePad from 'react-signature-pad-wrapper';
import axios from 'axios';

import Spinner from '../Spinner';
import './SignaturePage.css';

const URL = 'https://wheredoivote.co.uk/api/beta/postcode';

function formatVale(value) {
  if (typeof value === 'string') {
    return value;
  }
  return value ? 'Yes' : 'No';
}

const hrfFields = {
  firstName: 'First name',
  surname: 'Surname',
  firstLineAddress: 'First line of address',
  secondLineAddress: 'Second line of address',
  postcode: 'Postcode',
  city: 'City',
  differentAddress: 'I live at another address',
  email: 'Email',
  nationality: 'Nationality',
  movedHouse: 'Moved house in the last 12 months',
  firstLineCurrentAddress: 'First line of current address',
  secondLineCurrentAddress: 'Second line of current address',
  currentPostcode: 'Current postcode',
  currentCity: 'Current city',
  citizenOf: 'Citizen of',
  oldAddressFirstLineAddress: 'First line of previous address',
  oldAddressSecondLineAddress: 'Second line of previous address',
  oldAddressPostcode: 'Previous address postcode',
  oldAddressCity: 'Previous address city',
  registeredAsOverseasVoter: 'Registered in the UK as an overseas voter',
  dateOfBirth: 'Date of birth',
  nin: 'National insurance number',
  changedName: 'Changed my name',
  previousName: 'Previous name',
  postalVote: 'I would like to vote by postal vote',
  currentDate: 'Current date',
  registeredAtHome: 'My name has been entered on a register of electors in my home country',
  homeCountryConstituency: 'Name of the locality or constituency where you were last registered',
  postalVoteOption: 'Postal vote option',
  postalVoteElectionDate: 'Postal vote for elections on date',
  postalVoteFrom: 'Postal vote from',
  postalVoteTo: 'Postal vote to',
};

class SignaturePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emptySignatureNotification: false,
      emptyElectoralOfficeNotification: false,
      electoralOffice: {
        loaded: false,
        error: false,
      },
    };

    this.signForm = this.signForm.bind(this);
    this.lookupElectoralOffice = this.lookupElectoralOffice.bind(this);
    this.resetSignature = this.resetSignature.bind(this);
  }

  componentDidMount() {
    this.lookupElectoralOffice();
  }

  resetSignature() {
    if (!this.signaturePad.isEmpty()) {
      this.signaturePad.clear();
    }
  }

  async signForm(event) {
    const { updateData, submitData, electoralOfficeEmail } = this.props;
    if (this.signaturePad.isEmpty()) {
      event.preventDefault();
      event.stopPropagation();
      this.setState({ emptySignatureNotification: true });
    } else if (!electoralOfficeEmail.length) {
      event.preventDefault();
      event.stopPropagation();
      this.setState({ emptyElectoralOfficeNotification: true });
    } else {
      await updateData({ target: { value: this.signaturePad.toDataURL(), name: 'signature' } });
      submitData();
    }
  }

  async lookupElectoralOffice() {
    const { formData, setElectoralOfficeEmail } = this.props;
    const { postcode } = formData;
    try {
      const response = await axios.get(`${URL}/${postcode}.json`);
      await setElectoralOfficeEmail(response.data.council.email);
      this.setState({
        electoralOffice: {
          loaded: true,
          error: false,
        },
      });
    } catch (e) {
      this.setState({
        electoralOffice: {
          loaded: true,
          error: true,
        },
      });
    }
  }

  render() {
    const { signForm, resetSignature } = this;
    const { formData, electoralOfficeEmail, setElectoralOfficeEmail } = this.props;
    const {
      emptyElectoralOfficeNotification,
      emptySignatureNotification,
      electoralOffice,
    } = this.state;
    return (
      <Fragment>
        <h1>You are submitting:</h1>
        <ul className="RevisedUserDetails">
          {
            Object.keys(formData)
              .filter(key => (formData[key].length || /differentAddress|movedHouse|registeredAsOverseasVoter|postalVote$/.test(key))
                && !(!formData.postalVote && key === 'postalVoteOption')
                && key !== 'userType'
                && key !== 'signature')
              .map(key => (
                <li key={key}>
                  <b>
                    {hrfFields[key]}
                    :&nbsp;
                  </b>
                  {formatVale(formData[key])}
                </li>
              ))
          }
        </ul>
        <h2>Please sign:</h2>
        <div className="SignaturePad">
          <SignaturePad redrawOnResize ref={(ref) => { this.signaturePad = ref; }} />
        </div>
        <button type="button" className="SignaturePadReset" onClick={resetSignature}>Clear signature</button>
        {emptySignatureNotification ? (
          <h3 className="Notification">You need to sign the form before you can proceed.</h3>
        ) : null}
        <div className="ElectoralOffice">
          {!electoralOffice.loaded ? (
            <Spinner />
          ) : null}
          {electoralOffice.loaded && !electoralOffice.error ? (
            <h2>
              We will send your documents to your local electoral office email:
              {' '}
              {electoralOfficeEmail}
            </h2>
          ) : null}
          {electoralOffice.error ? (
            <Fragment>
              <h2>
                There was a problem getting your local electoral office email.
                Please have a look here and input it manually below.
              </h2>
              <label htmlFor="electoralOfficeEmail">
                Electoral office email:
                <input id="electoralOfficeEmail" type="email" value={electoralOfficeEmail} onChange={e => setElectoralOfficeEmail(e.target.value)} />
              </label>
            </Fragment>
          ) : null}
        </div>
        {emptyElectoralOfficeNotification ? (
          <h3 className="Notification">
            You need to supply a valid electoral office email address before you can proceed.
          </h3>
        ) : null}
        <Link
          className="Button"
          to="/thankYou/"
          onClick={signForm}
        >
          Sign
        </Link>
      </Fragment>
    );
  }
}

export default SignaturePage;
