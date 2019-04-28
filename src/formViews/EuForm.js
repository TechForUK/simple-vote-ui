import React, { Fragment } from 'react';
import './Form.css';

function TypeOfVoter({ formData, updateData }) {
  return (
    <form className="Form">
      <label htmlFor="firstName">
        First Name(s):
        <input id="firstName" name="firstName" type="text" value={formData.firstName} onChange={updateData} />
      </label>
      <label htmlFor="surname">
        Surname:
        <input id="surname" name="surname" type="text" value={formData.surname} onChange={updateData} />
      </label>
      <label htmlFor="firstLineAddress">
        First line of address:
        <input id="firstLineAddress" name="firstLineAddress" type="text" value={formData.firstLineAddress} onChange={updateData} />
      </label>
      <label htmlFor="secondLineAddress">
        Second line of address:
        <input id="secondLineAddress" name="secondLineAddress" type="text" value={formData.secondLineAddress} onChange={updateData} />
      </label>
      <label htmlFor="postcode">
        Postcode:
        <input id="postcode" name="postcode" type="text" value={formData.postcode} onChange={updateData} />
      </label>
      <label htmlFor="city">
        City/Town:
        <input id="city" name="city" type="text" value={formData.city} onChange={updateData} />
      </label>
      <label htmlFor="differentAddress">
        I live at another address
        <input id="differentAddress" name="differentAddress" type="checkbox" checked={formData.differentAddress} onChange={updateData} />
      </label>
      {formData.differentAddress ? (
        <Fragment>
          <label htmlFor="firstLineCurrentAddress">
            First line of current address:
            <input id="firstLineCurrentAddress" name="firstLineCurrentAddress" type="text" value={formData.firstLineCurrentAddress} onChange={updateData} />
          </label>
          <label htmlFor="secondLineCurrentAddress">
            Second line of current address:
            <input id="secondLineCurrentAddress" name="secondLineCurrentAddress" type="text" value={formData.secondLineCurrentAddress} onChange={updateData} />
          </label>
          <label htmlFor="currentPostcode">
            Postcode of current address:
            <input id="currentPostcode" name="currentPostcode" type="text" value={formData.currentPostcode} onChange={updateData} />
          </label>
          <label htmlFor="currentCity">
            Current City/Town:
            <input id="currentCity" name="currentCity" type="text" value={formData.currentCity} onChange={updateData} />
          </label>
        </Fragment>
      ) : null}
      <label htmlFor="citizenOf">
        I am a citizen of:
        <input id="citizenOf" name="citizenOf" type="text" value={formData.citizenOf} onChange={updateData} />
      </label>
      <label htmlFor="registeredAtHome">
        My name has been entered on a register of electors in my home country
        <input id="registeredAtHome" name="registeredAtHome" type="checkbox" checked={formData.registeredAtHome} onChange={updateData} />
      </label>
      {formData.registeredAtHome ? (
        <Fragment>
          <label htmlFor="homeCountryConstituency">
            Name of the locality or constituency where you were last registered, as far as you know
            <input id="homeCountryConstituency" name="homeCountryConstituency" type="text" value={formData.homeCountryConstituency} onChange={updateData} />
          </label>
        </Fragment>
      ) : null}
      <label htmlFor="email">
        Email:
        <input id="email" name="email" type="text" value={formData.email} onChange={updateData} />
      </label>
      <label htmlFor="nationality">
        Nationality (If you have more than one, include all):
        <input id="nationality" name="nationality" type="text" value={formData.nationality} onChange={updateData} />
      </label>
      <label htmlFor="movedHouse">
        Have you moved house in the last 12 months?
        <input id="movedHouse" name="movedHouse" type="checkbox" checked={formData.movedHouse} onChange={updateData} />
      </label>
      {formData.movedHouse ? (
        <Fragment>
          <label htmlFor="oldAddressFirstLineAddress">
            First line of address:
            <input id="oldAddressFirstLineAddress" name="oldAddressFirstLineAddress" type="text" value={formData.oldAddressFirstLineAddress} onChange={updateData} />
          </label>
          <label htmlFor="oldAddressSecondLineAddress">
            Second line of address:
            <input id="oldAddressSecondLineAddress" name="oldAddressSecondLineAddress" type="text" value={formData.oldAddressSecondLineAddress} onChange={updateData} />
          </label>
          <label htmlFor="oldAddressPostcode">
            Postcode:
            <input id="oldAddressPostcode" name="oldAddressPostcode" type="text" value={formData.oldAddressPostcode} onChange={updateData} />
          </label>
          <label htmlFor="oldAddressCity">
            City/Town:
            <input id="oldAddressCity" name="oldAddressCity" type="text" value={formData.oldAddressCity} onChange={updateData} />
          </label>
          <label htmlFor="registeredAsOverseasVoter">
            I was registered in the UK as an overseas voter
            <input id="registeredAsOverseasVoter" name="registeredAsOverseasVoter" type="checkbox" checked={formData.registeredAsOverseasVoter} onChange={updateData} />
          </label>
        </Fragment>
      ) : null}
      <label htmlFor="dateOfBirth">
        Date of birth:
        <input id="dateOfBirth" name="dateOfBirth" type="date" value={formData.dateOfBirth} onChange={updateData} />
      </label>
      <label htmlFor="nin">
        National insurance number:
        <input id="nin" name="nin" type="text" value={formData.nin} onChange={updateData} />
      </label>
      <label htmlFor="changedName">
        I have changed my name
        <input id="changedName" name="changedName" type="checkbox" checked={formData.changedName} onChange={updateData} />
      </label>
      {formData.changedName ? (
        <Fragment>
          <label htmlFor="previousName">
            Most recent previous name:
            <input id="previousName" name="previousName" type="text" value={formData.previousName} onChange={updateData} />
          </label>
          <label htmlFor="dateOfNameChange">
            Date of birth:
            <input id="dateOfNameChange" name="dateOfNameChange" type="date" value={formData.dateOfNameChange} onChange={updateData} />
          </label>
        </Fragment>
      ) : null}
      <label htmlFor="postalVote">
        I would like to vote by postal vote
        <input id="postalVote" name="postalVote" type="checkbox" checked={formData.postalVote} onChange={updateData} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default TypeOfVoter;
