import React, { Fragment } from 'react';

function Welcome({ switchView }) {
  return (
    <Fragment>
      <h1>Welcome to Simple Vote</h1>
      <p>
        Simple vote allows a streamilined voter registration.
        You just fill in a 3 minute form and we will handle the rest for you.
      </p>
      <button type="button" onClick={() => switchView('typeOfVoter')}>Next</button>
    </Fragment>
  );
}

export default Welcome;
