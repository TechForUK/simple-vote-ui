import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom';

import './Form.css';

function GenericForm({ history, formData, updateData }) {
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
        <input id="firstName" name="firstName" required type="text" autoComplete="given-name" value={formData.firstName} onChange={updateData} />
      </label>
      <label htmlFor="surname">
        <span>Surname:</span>
        <input id="surname" name="surname" required type="text" autoComplete="family-name" value={formData.surname} onChange={updateData} />
      </label>
      <label htmlFor="firstLineAddress">
        <span>First line of address:</span>
        <input id="firstLineAddress" name="firstLineAddress" required type="text" autoComplete="section-registration address-line1" value={formData.firstLineAddress} onChange={updateData} />
      </label>
      <label htmlFor="secondLineAddress">
        <span>Second line of address:</span>
        <input id="secondLineAddress" name="secondLineAddress" type="text" autoComplete="section-registration address-line2" value={formData.secondLineAddress} onChange={updateData} />
      </label>
      <label htmlFor="postcode">
        <span>Postcode:</span>
        <input id="postcode" name="postcode" required type="text" autoComplete="section-registration postal-code" value={formData.postcode} onChange={updateData} />
      </label>
      <label htmlFor="city">
        <span>City/Town:</span>
        <input id="city" name="city" required type="text" autoComplete="section-registration address-level2" value={formData.city} onChange={updateData} />
      </label>
      <label htmlFor="differentAddress" className="Label-SameLine">
        <input id="differentAddress" name="differentAddress" type="checkbox" checked={formData.differentAddress} onChange={updateData} />
        <span>I live at another address:</span>
      </label>
      <label htmlFor="email">
        <span>Email:</span>
        <input id="email" name="email" required type="email" autoComplete="email" value={formData.email} onChange={updateData} />
      </label>
      <label htmlFor="nationality">
        <span>Nationality (If you have more than one, include all):</span>
        <input id="nationality" name="nationality" required type="text" value={formData.nationality} onChange={updateData} />
      </label>
      <label htmlFor="movedHouse" className="Label-SameLine">
        <input id="movedHouse" name="movedHouse" type="checkbox" checked={formData.movedHouse} onChange={updateData} />
        <span>Have you moved house in the last 12 months?</span>
      </label>
      {formData.movedHouse ? (
        <Fragment>
          <label htmlFor="oldAddressFirstLineAddress" className="IndentedSection">
            <span>First line of old address:</span>
            <input id="oldAddressFirstLineAddress" name="oldAddressFirstLineAddress" required={formData.movedHouse} type="text" autoComplete="section-old address-line1" value={formData.oldAddressFirstLineAddress} onChange={updateData} />
          </label>
          <label htmlFor="oldAddressSecondLineAddress" className="IndentedSection">
            <span>Second line of old address:</span>
            <input id="oldAddressSecondLineAddress" name="oldAddressSecondLineAddress" type="text" autoComplete="section-old address-line2" value={formData.oldAddressSecondLineAddress} onChange={updateData} />
          </label>
          <label htmlFor="oldAddressPostcode" className="IndentedSection">
            <span>Postcode of old address:</span>
            <input id="oldAddressPostcode" name="oldAddressPostcode" required={formData.movedHouse} type="text" autoComplete="section-old postal-code" value={formData.oldAddressPostcode} onChange={updateData} />
          </label>
          <label htmlFor="oldAddressCity" className="IndentedSection">
            <span>City/Town of old address:</span>
            <input id="oldAddressCity" name="oldAddressCity" required={formData.movedHouse} type="text" autoComplete="section-old address-level2" value={formData.oldAddressCity} onChange={updateData} />
          </label>
          <label htmlFor="registeredAsOverseasVoter" className="Label-SameLine IndentedSection">
            <input id="registeredAsOverseasVoter" name="registeredAsOverseasVoter" type="checkbox" checked={formData.registeredAsOverseasVoter} onChange={updateData} />
            <span>I was registered in the UK as an overseas voter</span>
          </label>
        </Fragment>
      ) : null}
      <label htmlFor="dateOfBirth">
        <span>Date of birth:</span>
        <input id="dateOfBirth" name="dateOfBirth" required type="date" placeholder="YYYY-MM-DD" autoComplete="bday" value={formData.dateOfBirth} onChange={updateData} />
      </label>
      <label htmlFor="nin">
        <span>National insurance number (no spaces):</span>
        <input id="nin" name="nin" required type="text" value={formData.nin} onChange={updateData} pattern="^[a-zA-Z]{2}(?:\d){6}[a-zA-Z]?$" />
      </label>
      <label htmlFor="changedName" className="Label-SameLine">
        <input id="changedName" name="changedName" type="checkbox" checked={formData.changedName} onChange={updateData} />
        <span>I have changed my name</span>
      </label>
      {formData.changedName ? (
        <Fragment>
          <label htmlFor="previousName" className="IndentedSection">
            <span>Most recent previous name:</span>
            <input id="previousName" name="previousName" required={formData.changedName} type="text" value={formData.previousName} onChange={updateData} />
          </label>
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

export default withRouter(GenericForm);
