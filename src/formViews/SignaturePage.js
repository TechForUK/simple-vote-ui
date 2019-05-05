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
  currentDate: 'Current date',
  registeredAtHome: 'My name has been entered on a register of electors in my home country',
  homeCountryConstituency: 'Name of the locality or constituency where you were last registered',
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
    window.scrollTo(0, 0);
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
              .filter(key => (formData[key].length || /differentAddress|movedHouse|registeredAsOverseasVoter/.test(key))
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
        <div className="Declaration">
          <h4>Declaration:</h4>
          <p>
            To the best of my knowledge, the information in this form is true.
            I understand that the information I have given on this form will be
            used on the electoral register. I understand that if I do not make an
            application for registration when required to do so I could face a fine
            of £80. I understand that it is an offence knowingly to provide false
            information in this form and if convicted I may be imprisoned for up to
            six months and/or face an unlimited fine.
          </p>
        </div>
        <div className="SignaturePad">
          <SignaturePad redrawOnResize ref={(ref) => { this.signaturePad = ref; }} />
        </div>
        <button type="button" className="SignaturePadReset" onClick={resetSignature}>Clear signature</button>
        <p className="signature-disclaimer">
          It is
          {' '}
          <b>vital</b>
          {' '}
          that the signature you give matches your signature when written by hand.
        </p>
        <div className="ElectoralOffice">
          {!electoralOffice.loaded ? (
            <Spinner />
          ) : null}
          {electoralOffice.loaded && !electoralOffice.error ? (
            <h3>
              We will send your documents to your local electoral office email:
              {' '}
              {electoralOfficeEmail}
            </h3>
          ) : null}
          {electoralOffice.error ? (
            <Fragment>
              <h2>
                There was a problem getting your local electoral office email.
                Please have a look
                {' '}
                <a
                  href="https://www.gov.uk/get-on-electoral-register"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  here
                </a>
                {' '}
                and input it manually below.
              </h2>
              <label htmlFor="electoralOfficeEmail">
                Electoral office email:
                <input id="electoralOfficeEmail" type="email" value={electoralOfficeEmail} onChange={e => setElectoralOfficeEmail(e.target.value)} />
              </label>
            </Fragment>
          ) : null}
        </div>
        {emptyElectoralOfficeNotification ? (
          <h4 className="Notification">
            You need to supply a valid electoral office email address before you can proceed.
          </h4>
        ) : null}
        {emptySignatureNotification ? (
          <h4 className="Notification">You need to sign the form before you can proceed.</h4>
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
