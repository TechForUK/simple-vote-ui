import React, { Fragment } from 'react';
import imageLoading from './img/spinner-frame-4.png';
import './Spinner.css';

function Spinner() {
  return (
    <Fragment>
      <img src={imageLoading} alt="Loading" className="image" />
    </Fragment>
  );
}

export default Spinner;
