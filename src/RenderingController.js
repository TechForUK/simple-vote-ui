import React, { Fragment } from 'react';

import Welcome from './formViews/Welcome';
import TypeOfVoter from './formViews/TypeOfVoter';
import GenericForm from './formViews/GenericForm';
import EuForm from './formViews/EuForm';
import UkCitizenAbroad from './formViews/UkCitizenAbroad';

const views = {
  welcome: Welcome,
  typeOfVoter: TypeOfVoter,
  genericForm: GenericForm,
  euCitizenForm: EuForm,
  ukCitizenAbroad: UkCitizenAbroad,
};

function RenderingController({
  view,
  formData,
  updateData,
  switchView,
}) {
  const CurrentView = views[view];

  return (
    <Fragment>
      <CurrentView formData={formData} updateData={updateData} switchView={switchView} />
    </Fragment>
  );
}

export default RenderingController;
