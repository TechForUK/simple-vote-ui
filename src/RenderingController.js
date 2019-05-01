import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import Welcome from './formViews/Welcome';
import TypeOfVoter from './formViews/TypeOfVoter';
import GenericForm from './formViews/GenericForm';
import EuForm from './formViews/EuForm';
import SignaturePage from './formViews/SignaturePage';
import ThankYou from './ThankYou';

function RenderingController({
  formData,
  updateData,
  submitData,
}) {
  const shouldRedirect = !formData.userType.length;

  return (
    <Fragment>
      <Router>
        <Route path="/" exact render={() => <Welcome />} />
        <Route
          path="/typeOfVoter/"
          exact
          render={() => (
            <TypeOfVoter updateData={updateData} />
          )}
        />
        <ProtectedRoute
          shouldRedirect={shouldRedirect}
          path="/genericForm/"
          exact
          render={() => (
            <GenericForm formData={formData} updateData={updateData} />
          )}
        />
        <ProtectedRoute
          shouldRedirect={shouldRedirect}
          path="/euCitizenForm/"
          exact
          render={() => (
            <EuForm formData={formData} updateData={updateData} />
          )}
        />
        <ProtectedRoute
          shouldRedirect={shouldRedirect}
          path="/signaturePage/"
          exact
          render={() => (
            <SignaturePage formData={formData} updateData={updateData} submitData={submitData} />
          )}
        />
        <ProtectedRoute
          shouldRedirect={shouldRedirect}
          path="/thankYou/"
          exact
          render={() => <ThankYou />}
        />
      </Router>
    </Fragment>
  );
}

const ProtectedRoute = ({ render, shouldRedirect, ...rest }) => (
  <Route
    {...rest}
    render={
      props => (
        !shouldRedirect
          ? render()
          : (
            <Redirect
              to={{
                pathname: '/typeOfVoter',
                state: { from: props.location },
              }}
            />
          )
      )
    }
  />
);

export default RenderingController;
