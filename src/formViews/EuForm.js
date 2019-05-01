import React, { Fragment } from 'react';
import classNames from 'classnames';

import './Form.css';

const requiredFields = [
  {
    field: 'firstName',
  },
  {
    field: 'surname',
  },
  {
    field: 'firstLineAddress',
  },
  {
    field: 'secondLineAddress',
  },
  {
    field: 'postcode',
  },
  {
    field: 'city',
  },
  {
    field: 'firstLineCurrentAddress',
    dependsOn: 'differentAddress',
    toBe: true,
  },
  {
    field: 'secondLineCurrentAddress',
    dependsOn: 'differentAddress',
    toBe: true,
  },
  {
    field: 'currentPostcode',
    dependsOn: 'differentAddress',
    toBe: true,
  },
  {
    field: 'currentCity',
    dependsOn: 'differentAddress',
    toBe: true,
  },
  {
    field: 'citizenOf',
  },
  {
    field: 'homeCountryConstituency',
    dependsOn: 'registeredAtHome',
    toBe: true,
  },
  {
    field: 'email',
  },
  {
    field: 'nationality',
  },
  {
    field: 'oldAddressFirstLineAddress',
    dependsOn: 'movedHouse',
    toBe: true,
  },
  {
    field: 'oldAddressSecondLineAddress',
    dependsOn: 'movedHouse',
    toBe: true,
  },
  {
    field: 'oldAddressPostcode',
    dependsOn: 'movedHouse',
    toBe: true,
  },
  {
    field: 'oldAddressCity',
    dependsOn: 'movedHouse',
    toBe: true,
  },
  {
    field: 'dateOfBirth',
  },
  {
    field: 'nin',
  },
  {
    field: 'previousName',
    dependsOn: 'changedName',
    toBe: true,
  },
  {
    field: 'dateOfNameChange',
    dependsOn: 'changedName',
    toBe: true,
  },
  {
    field: 'postalVoteElectionDate',
    dependsOn: 'postalVoteOption',
    toBe: 'specificElection',
  },
  {
    field: 'postalVoteFrom',
    dependsOn: 'postalVoteOption',
    toBe: 'timePeriod',
  },
  {
    field: 'postalVoteTo',
    dependsOn: 'postalVoteOption',
    toBe: 'timePeriod',
  },
];

class EuForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fieldsWithErrors: [],
    };

    this.validateForm = this.validateForm.bind(this);
    this.advance = this.advance.bind(this);
  }

  validateForm() {
    const { formData } = this.props;
    const errors = [];
    requiredFields.forEach((check) => {
      if (check.dependsOn && formData[check.dependsOn] === check.toBe && !formData[check.field]) {
        errors.push(check.field);
      } else if (!check.dependsOn && !formData[check.field]) {
        errors.push(check.field);
      }
    });
    this.setState({ fieldsWithErrors: errors });
    return errors;
  }

  advance() {
    if (!this.validateForm().length) {
      const { switchView } = this.props;
      switchView('signaturePage');
    }
  }

  render() {
    const { formData, updateData } = this.props;
    const { fieldsWithErrors } = this.state;
    return (
      <form className="Form">
        <label htmlFor="firstName">
          <span>First Name(s):</span>
          <input className={classNames({ Error: fieldsWithErrors.includes('firstName') })} id="firstName" name="firstName" type="text" value={formData.firstName} onChange={updateData} />
        </label>
        <label htmlFor="surname">
          <span>Surname:</span>
          <input className={classNames({ Error: fieldsWithErrors.includes('surname') })} id="surname" name="surname" type="text" value={formData.surname} onChange={updateData} />
        </label>
        <label htmlFor="firstLineAddress">
          <span>First line of address:</span>
          <input className={classNames({ Error: fieldsWithErrors.includes('firstLineAddress') })} id="firstLineAddress" name="firstLineAddress" type="text" value={formData.firstLineAddress} onChange={updateData} />
        </label>
        <label htmlFor="secondLineAddress">
          <span>Second line of address:</span>
          <input className={classNames({ Error: fieldsWithErrors.includes('secondLineAddress') })} id="secondLineAddress" name="secondLineAddress" type="text" value={formData.secondLineAddress} onChange={updateData} />
        </label>
        <label htmlFor="postcode">
          <span>Postcode:</span>
          <input className={classNames({ Error: fieldsWithErrors.includes('postcode') })} id="postcode" name="postcode" type="text" value={formData.postcode} onChange={updateData} />
        </label>
        <label htmlFor="city">
          <span>City/Town:</span>
          <input className={classNames({ Error: fieldsWithErrors.includes('city') })} id="city" name="city" type="text" value={formData.city} onChange={updateData} />
        </label>
        <label htmlFor="differentAddress" className="Label-SameLine">
          <input id="differentAddress" name="differentAddress" type="checkbox" checked={formData.differentAddress} onChange={updateData} />
          <span>I live at another address</span>
        </label>
        {formData.differentAddress ? (
          <Fragment>
            <label htmlFor="firstLineCurrentAddress">
              <span>First line of current address:</span>
              <input className={classNames({ Error: fieldsWithErrors.includes('firstLineCurrentAddress') })} id="firstLineCurrentAddress" name="firstLineCurrentAddress" type="text" value={formData.firstLineCurrentAddress} onChange={updateData} />
            </label>
            <label htmlFor="secondLineCurrentAddress">
              <span>Second line of current address:</span>
              <input className={classNames({ Error: fieldsWithErrors.includes('secondLineCurrentAddress') })} id="secondLineCurrentAddress" name="secondLineCurrentAddress" type="text" value={formData.secondLineCurrentAddress} onChange={updateData} />
            </label>
            <label htmlFor="currentPostcode">
              <span>Postcode of current address:</span>
              <input className={classNames({ Error: fieldsWithErrors.includes('currentPostcode') })} id="currentPostcode" name="currentPostcode" type="text" value={formData.currentPostcode} onChange={updateData} />
            </label>
            <label htmlFor="currentCity">
              <span>Current City/Town:</span>
              <input className={classNames({ Error: fieldsWithErrors.includes('currentCity') })} id="currentCity" name="currentCity" type="text" value={formData.currentCity} onChange={updateData} />
            </label>
          </Fragment>
        ) : null}
        <label htmlFor="citizenOf">
          <span>I am a citizen of:</span>
          <input className={classNames({ Error: fieldsWithErrors.includes('citizenOf') })} id="citizenOf" name="citizenOf" type="text" value={formData.citizenOf} onChange={updateData} />
        </label>
        <label htmlFor="registeredAtHome" className="Label-SameLine">
          <input id="registeredAtHome" name="registeredAtHome" type="checkbox" checked={formData.registeredAtHome} onChange={updateData} />
          <span>My name has been entered on a register of electors in my home country</span>
        </label>
        {formData.registeredAtHome ? (
          <Fragment>
            <label htmlFor="homeCountryConstituency">
              <span>
                Name of the locality or constituency where you
                were last registered, as far as you know
              </span>
              <input className={classNames({ Error: fieldsWithErrors.includes('homeCountryConstituency') })} id="homeCountryConstituency" name="homeCountryConstituency" type="text" value={formData.homeCountryConstituency} onChange={updateData} />
            </label>
          </Fragment>
        ) : null}
        <label htmlFor="email">
          <span>Email:</span>
          <input className={classNames({ Error: fieldsWithErrors.includes('email') })} id="email" name="email" type="text" value={formData.email} onChange={updateData} />
        </label>
        <label htmlFor="nationality">
          <span>Nationality (If you have more than one, include all):</span>
          <input className={classNames({ Error: fieldsWithErrors.includes('nationality') })} id="nationality" name="nationality" type="text" value={formData.nationality} onChange={updateData} />
        </label>
        <label htmlFor="movedHouse" className="Label-SameLine">
          <input id="movedHouse" name="movedHouse" type="checkbox" checked={formData.movedHouse} onChange={updateData} />
          <span>Have you moved house in the last 12 months?</span>
        </label>
        {formData.movedHouse ? (
          <Fragment>
            <label htmlFor="oldAddressFirstLineAddress">
              <span>First line of address:</span>
              <input className={classNames({ Error: fieldsWithErrors.includes('oldAddressFirstLineAddress') })} id="oldAddressFirstLineAddress" name="oldAddressFirstLineAddress" type="text" value={formData.oldAddressFirstLineAddress} onChange={updateData} />
            </label>
            <label htmlFor="oldAddressSecondLineAddress">
              <span>Second line of address:</span>
              <input className={classNames({ Error: fieldsWithErrors.includes('oldAddressSecondLineAddress') })} id="oldAddressSecondLineAddress" name="oldAddressSecondLineAddress" type="text" value={formData.oldAddressSecondLineAddress} onChange={updateData} />
            </label>
            <label htmlFor="oldAddressPostcode">
              <span>Postcode:</span>
              <input className={classNames({ Error: fieldsWithErrors.includes('oldAddressPostcode') })} id="oldAddressPostcode" name="oldAddressPostcode" type="text" value={formData.oldAddressPostcode} onChange={updateData} />
            </label>
            <label htmlFor="oldAddressCity">
              <span>City/Town:</span>
              <input className={classNames({ Error: fieldsWithErrors.includes('oldAddressCity') })} id="oldAddressCity" name="oldAddressCity" type="text" value={formData.oldAddressCity} onChange={updateData} />
            </label>
            <label htmlFor="registeredAsOverseasVoter" className="Label-SameLine">
              <input id="registeredAsOverseasVoter" name="registeredAsOverseasVoter" type="checkbox" checked={formData.registeredAsOverseasVoter} onChange={updateData} />
              <span>I was registered in the UK as an overseas voter</span>
            </label>
          </Fragment>
        ) : null}
        <label htmlFor="dateOfBirth">
          <span>Date of birth:</span>
          <input className={classNames({ Error: fieldsWithErrors.includes('dateOfBirth') })} id="dateOfBirth" name="dateOfBirth" type="date" value={formData.dateOfBirth} onChange={updateData} />
        </label>
        <label htmlFor="nin">
          <span>National insurance number:</span>
          <input className={classNames({ Error: fieldsWithErrors.includes('nin') })} id="nin" name="nin" type="text" value={formData.nin} onChange={updateData} />
        </label>
        <label htmlFor="changedName" className="Label-SameLine">
          <input id="changedName" name="changedName" type="checkbox" checked={formData.changedName} onChange={updateData} />
          <span>I have changed my name</span>
        </label>
        {formData.changedName ? (
          <Fragment>
            <label htmlFor="previousName">
              <span>Most recent previous name:</span>
              <input className={classNames({ Error: fieldsWithErrors.includes('previousName') })} id="previousName" name="previousName" type="text" value={formData.previousName} onChange={updateData} />
            </label>
            <label htmlFor="dateOfNameChange">
              <span>Date of name change:</span>
              <input className={classNames({ Error: fieldsWithErrors.includes('dateOfNameChange') })} id="dateOfNameChange" name="dateOfNameChange" type="date" value={formData.dateOfNameChange} onChange={updateData} />
            </label>
          </Fragment>
        ) : null}
        <label htmlFor="postalVote" className="Label-SameLine">
          <input id="postalVote" name="postalVote" type="checkbox" checked={formData.postalVote} onChange={updateData} />
          <span>I would like to vote by postal vote</span>
        </label>
        {formData.postalVote ? (
          <Fragment>
            <label htmlFor="indefintiely" className="Label-SameLine">
              <input id="indefintiely" name="postalVoteOption" type="radio" value="indefintiely" checked={formData.postalVoteOption === 'indefintiely'} onChange={updateData} />
              <span>Until further notice</span>
            </label>
            <label htmlFor="specificElection" className="Label-SameLine">
              <input id="specificElection" name="postalVoteOption" type="radio" value="specificElection" checked={formData.postalVoteOption === 'specificElection'} onChange={updateData} />
              <span>For elections to be held on a specific date</span>
            </label>
            <label htmlFor="timePeriod" className="Label-SameLine">
              <input id="timePeriod" name="postalVoteOption" type="radio" value="timePeriod" checked={formData.postalVoteOption === 'timePeriod'} onChange={updateData} />
              <span>For a period of time</span>
            </label>
            {formData.postalVoteOption === 'specificElection' ? (
              <label htmlFor="postalVoteElectionDate">
                <span>Elections on:</span>
                <input className={classNames({ Error: fieldsWithErrors.includes('postalVoteElectionDate') })} id="postalVoteElectionDate" name="postalVoteElectionDate" type="date" value={formData.postalVoteElectionDate} onChange={updateData} />
              </label>
            ) : null}
            {formData.postalVoteOption === 'timePeriod' ? (
              <Fragment>
                <label htmlFor="postalVoteFrom">
                  <span>From:</span>
                  <input className={classNames({ Error: fieldsWithErrors.includes('postalVoteFrom') })} id="postalVoteFrom" name="postalVoteFrom" type="date" value={formData.postalVoteFrom} onChange={updateData} />
                </label>
                <label htmlFor="postalVoteTo">
                  <span>To:</span>
                  <input className={classNames({ Error: fieldsWithErrors.includes('postalVoteTo') })} id="postalVoteTo" name="postalVoteTo" type="date" value={formData.postalVoteTo} onChange={updateData} />
                </label>
              </Fragment>
            ) : null}
          </Fragment>
        ) : null}
        <input type="button" value="Next" className="NextButton" onClick={this.advance} />
      </form>
    );
  }
}

export default EuForm;
