import React, { Fragment } from 'react';
import './Spinner.css';

function Spinner() {
  return (
    <Fragment>
      <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </Fragment>
  );
}

export default Spinner;
