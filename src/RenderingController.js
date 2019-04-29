import React, { Fragment } from 'react';

import Welcome from './formViews/Welcome';
import TypeOfVoter from './formViews/TypeOfVoter';
import GenericForm from './formViews/GenericForm';
import EuForm from './formViews/EuForm';
import SignaturePage from './formViews/SignaturePage';
import ThankYou from './ThankYou';

const views = {
  welcome: Welcome,
  typeOfVoter: TypeOfVoter,
  genericForm: GenericForm,
  euCitizenForm: EuForm,
  signaturePage: SignaturePage,
  thankYou: ThankYou,
};

function RenderingController({
  view,
  formData,
  updateData,
  submitData,
  switchView,
}) {
  const CurrentView = views[view];

  return (
    <Fragment>
      <CurrentView
        formData={formData}
        updateData={updateData}
        submitData={submitData}
        switchView={switchView}
      />
    </Fragment>
  );
}

export default RenderingController;
