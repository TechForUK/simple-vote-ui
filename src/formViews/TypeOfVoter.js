import React, { Fragment } from 'react';

function TypeOfVoter({ updateData, switchView }) {
  return (
    <Fragment>
      <button
        className="SegmentationButton"
        type="button"
        name="userType"
        value="uk_citizen_in_uk"
        onClick={(e) => {
          updateData(e);
          switchView('genericForm');
        }}
      >
      I am a UK citizen living in the UK
      </button>
      <button
        className="SegmentationButton"
        type="button"
        name="userType"
        value="eu_citizen_in_uk"
        onClick={(e) => {
          updateData(e);
          switchView('euCitizenForm');
        }}
      >
      I am a EU citizen living in the UK
      </button>
    </Fragment>
  );
}

export default TypeOfVoter;
