import React, { Fragment } from 'react';
import './Form.css';

import Welcome from './formViews/Welcome';
import TypeOfVoter from './formViews/TypeOfVoter';

const views = {
  welcome: Welcome,
  typeOfVoter: TypeOfVoter,
};

function Form({ view, formData, updateData, switchView }) {
  const CurrentView = views[view];

  return (
    <Fragment>
      <CurrentView formData={formData} updateData={updateData} switchView={switchView} />
    </Fragment>
  );
}

export default Form;
