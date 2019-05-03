import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

function TypeOfVoter({ updateData }) {
  return (
    <Fragment>
      <Link
        className="Button"
        to="/genericForm/"
        onClick={async () => {
          await updateData({ target: { value: 'uk_citizen_in_uk', name: 'userType' } });
        }}
      >
        I am a UK citizen living in the UK
      </Link>
      <Link
        className="Button"
        to="/genericForm/"
        onClick={async () => {
          await updateData({ target: { value: 'uk_citizen_in_uk', name: 'userType' } });
        }}
      >
        I am a Commonwealth citizen living in the UK
      </Link>
      <Link
        className="Button"
        to="/euCitizenForm/"
        onClick={async () => {
          await updateData({ target: { value: 'eu_citizen_in_uk', name: 'userType' } });
        }}
      >
        I am an EU citizen living in the UK
      </Link>
    </Fragment>
  );
}

export default TypeOfVoter;
