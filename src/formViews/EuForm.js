import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom';

import './Form.css';

function EuForm({ history, formData, updateData }) {
  return (
    <form
      className="Form"
      action=""
      method="post"
      onSubmit={(e) => {
        e.preventDefault();
        history.push('/signaturePage/');
      }}
    >
      <label htmlFor="firstName">
        <span>First Name(s):</span>
        <input id="firstName" name="firstName" required type="text" maxLength="50" autoComplete="given-name" value={formData.firstName} onChange={updateData} />
      </label>
      <label htmlFor="surname">
        <span>Surname:</span>
        <input id="surname" name="surname" required type="text" maxLength="50" autoComplete="family-name" value={formData.surname} onChange={updateData} />
      </label>
      <label htmlFor="firstLineAddress">
        <span>First line of address:</span>
        <input id="firstLineAddress" name="firstLineAddress" required type="text" maxLength="50" autoComplete="section-registration address-line1" value={formData.firstLineAddress} onChange={updateData} />
      </label>
      <label htmlFor="secondLineAddress">
        <span>Second line of address:</span>
        <input id="secondLineAddress" name="secondLineAddress" type="text" maxLength="50" autoComplete="section-registration address-line2" value={formData.secondLineAddress} onChange={updateData} />
      </label>
      <label htmlFor="postcode">
        <span>Postcode:</span>
        <input id="postcode" name="postcode" required type="text" maxLength="10" autoComplete="section-registration postal-code" value={formData.postcode} onChange={updateData} />
      </label>
      <label htmlFor="city">
        <span>City/Town:</span>
        <input id="city" name="city" required type="text" maxLength="25" autoComplete="section-registration address-level2" value={formData.city} onChange={updateData} />
      </label>
      <label htmlFor="differentAddress" className="Label-SameLine">
        <input id="differentAddress" name="differentAddress" type="checkbox" checked={formData.differentAddress} onChange={updateData} />
        <span>I live at another address</span>
      </label>
      {formData.differentAddress ? (
        <Fragment>
          <label htmlFor="firstLineCurrentAddress" className="IndentedSection">
            <span>First line of current address:</span>
            <input id="firstLineCurrentAddress" name="firstLineCurrentAddress" required={formData.differentAddress} type="text" maxLength="50" autoComplete="section-current address-line1" value={formData.firstLineCurrentAddress} onChange={updateData} />
          </label>
          <label htmlFor="secondLineCurrentAddress" className="IndentedSection">
            <span>Second line of current address:</span>
            <input id="secondLineCurrentAddress" name="secondLineCurrentAddress" type="text" maxLength="50" autoComplete="section-current address-line2" value={formData.secondLineCurrentAddress} onChange={updateData} />
          </label>
          <label htmlFor="currentPostcode" className="IndentedSection">
            <span>Postcode of current address:</span>
            <input id="currentPostcode" name="currentPostcode" required={formData.differentAddress} type="text" maxLength="10" autoComplete="section-current postal-code" value={formData.currentPostcode} onChange={updateData} />
          </label>
          <label htmlFor="currentCity" className="IndentedSection">
            <span>Current City/Town:</span>
            <input id="currentCity" name="currentCity" required={formData.differentAddress} type="text" maxLength="25" autoComplete="section-current address-level2" value={formData.currentCity} onChange={updateData} />
          </label>
        </Fragment>
      ) : null}
      <label htmlFor="citizenOf">
        <span>I am a citizen of:</span>
        <input id="citizenOf" name="citizenOf" required type="text" maxLength="50" value={formData.citizenOf} onChange={updateData} />
      </label>
      <label htmlFor="registeredAtHome" className="Label-SameLine">
        <input id="registeredAtHome" name="registeredAtHome" type="checkbox" checked={formData.registeredAtHome} onChange={updateData} />
        <span>My name has been entered on a register of electors in my home country</span>
      </label>
      {formData.registeredAtHome ? (
        <Fragment>
          <label htmlFor="homeCountryConstituency" className="IndentedSection">
            <span>
              Name of the locality or constituency where you
              were last registered, as far as you know
            </span>
            <input id="homeCountryConstituency" name="homeCountryConstituency" required={formData.registeredAtHome} type="text" maxLength="50" value={formData.homeCountryConstituency} onChange={updateData} />
          </label>
        </Fragment>
      ) : null}
      <label htmlFor="email">
        <span>Email:</span>
        <input id="email" name="email" required type="email" autoComplete="email" value={formData.email} onChange={updateData} />
      </label>
      <label htmlFor="nationality">
        <span>Nationality (If you have more than one, include all):</span>
        <input id="nationality" name="nationality" required type="text" maxLength="50" autoComplete="nationality" value={formData.nationality} onChange={updateData} />
      </label>
      <label htmlFor="movedHouse" className="Label-SameLine">
        <input id="movedHouse" name="movedHouse" type="checkbox" checked={formData.movedHouse} onChange={updateData} />
        <span>Have you moved house in the last 12 months?</span>
      </label>
      {formData.movedHouse ? (
        <Fragment>
          <label htmlFor="oldAddressFirstLineAddress" className="IndentedSection">
            <span>First line of old address:</span>
            <input id="oldAddressFirstLineAddress" name="oldAddressFirstLineAddress" required={formData.movedHouse} type="text" maxLength="50" autoComplete="section-old address-line1" value={formData.oldAddressFirstLineAddress} onChange={updateData} />
          </label>
          <label htmlFor="oldAddressSecondLineAddress" className="IndentedSection">
            <span>Second line of old address:</span>
            <input id="oldAddressSecondLineAddress" name="oldAddressSecondLineAddress" type="text" maxLength="50" autoComplete="section-old address-line2" value={formData.oldAddressSecondLineAddress} onChange={updateData} />
          </label>
          <label htmlFor="oldAddressPostcode" className="IndentedSection">
            <span>Postcode of old address:</span>
            <input id="oldAddressPostcode" name="oldAddressPostcode" required={formData.movedHouse} type="text" maxLength="10" autoComplete="section-old postal-code" value={formData.oldAddressPostcode} onChange={updateData} />
          </label>
          <label htmlFor="oldAddressCity" className="IndentedSection">
            <span>City/Town of old address:</span>
            <input id="oldAddressCity" name="oldAddressCity" required={formData.movedHouse} type="text" maxLength="25" autoComplete="section-old address-level2" value={formData.oldAddressCity} onChange={updateData} />
          </label>
          <label htmlFor="registeredAsOverseasVoter" className="Label-SameLine IndentedSection">
            <input id="registeredAsOverseasVoter" name="registeredAsOverseasVoter" type="checkbox" checked={formData.registeredAsOverseasVoter} onChange={updateData} />
            <span>I was registered in the UK as an overseas voter</span>
          </label>
        </Fragment>
      ) : null}
      <label htmlFor="dateOfBirth">
        <span>Date of birth:</span>
        <input id="dateOfBirth" name="dateOfBirth" required type="date" autoComplete="bday" value={formData.dateOfBirth} onChange={updateData} />
      </label>
      <label htmlFor="nin">
        <span>National insurance number (no spaces):</span>
        <input id="nin" name="nin" required type="text" maxLength="50" value={formData.nin} onChange={updateData} pattern="^[a-zA-Z]{2}(?:\d){6}[a-zA-Z]?$" />
      </label>
      <label htmlFor="changedName" className="Label-SameLine">
        <input id="changedName" name="changedName" type="checkbox" checked={formData.changedName} onChange={updateData} />
        <span>I have changed my name</span>
      </label>
      {formData.changedName ? (
        <Fragment>
          <label htmlFor="previousName">
            <span>Most recent previous name:</span>
            <input id="previousName" name="previousName" required={formData.changedName} type="text" maxLength="50" value={formData.previousName} onChange={updateData} />
          </label>
        </Fragment>
      ) : null}
      <label htmlFor="postalVote" className="Label-SameLine">
        <input id="postalVote" name="postalVote" type="checkbox" checked={formData.postalVote} onChange={updateData} />
        <span>I would like to vote by postal vote</span>
      </label>
      {formData.postalVote ? (
        <Fragment>
          <label htmlFor="indefintiely" className="Label-SameLine IndentedSection">
            <input id="indefintiely" name="postalVoteOption" type="radio" value="indefintiely" checked={formData.postalVoteOption === 'indefintiely'} onChange={updateData} />
            <span>Until further notice</span>
          </label>
          <label htmlFor="specificElection" className="Label-SameLine IndentedSection">
            <input id="specificElection" name="postalVoteOption" type="radio" value="specificElection" checked={formData.postalVoteOption === 'specificElection'} onChange={updateData} />
            <span>For elections to be held on a specific date</span>
          </label>
          <label htmlFor="timePeriod" className="Label-SameLine IndentedSection">
            <input id="timePeriod" name="postalVoteOption" type="radio" value="timePeriod" checked={formData.postalVoteOption === 'timePeriod'} onChange={updateData} />
            <span>For a period of time</span>
          </label>
          {formData.postalVoteOption === 'specificElection' ? (
            <label htmlFor="postalVoteElectionDate" className="IndentedSection">
              <span>Elections on:</span>
              <input id="postalVoteElectionDate" name="postalVoteElectionDate" required={formData.postalVoteOption === 'specificElection'} type="date" value={formData.postalVoteElectionDate} onChange={updateData} />
            </label>
          ) : null}
          {formData.postalVoteOption === 'timePeriod' ? (
            <Fragment>
              <label htmlFor="postalVoteFrom" className="IndentedSection">
                <span>From:</span>
                <input id="postalVoteFrom" name="postalVoteFrom" required={formData.postalVoteOption === 'timePeriod'} type="date" value={formData.postalVoteFrom} onChange={updateData} />
              </label>
              <label htmlFor="postalVoteTo" className="IndentedSection">
                <span>To:</span>
                <input id="postalVoteTo" name="postalVoteTo" required={formData.postalVoteOption === 'timePeriod'} type="date" value={formData.postalVoteTo} onChange={updateData} />
              </label>
            </Fragment>
          ) : null}
        </Fragment>
      ) : null}
      <button
        type="submit"
        className="NextButton"
      >
        Next
      </button>
    </form>
  );
}

export default withRouter(EuForm);
