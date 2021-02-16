import React, { Fragment } from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Link,
} from 'react-router-dom';

import Welcome from './formViews/Welcome';
import TypeOfVoter from './formViews/TypeOfVoter';
import GenericForm from './formViews/GenericForm';
import EuForm from './formViews/EuForm';
import SignaturePage from './formViews/SignaturePage';
import ThankYou from './ThankYou';
import Terms from './Terms';
import Privacy from './Privacy';
import Cookies from './Cookies';
import FAQ from './FAQ';

class RenderingController extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cookieNoticeDimsissed: localStorage.getItem('agreedToCookies') || false,
    };
  }

  render() {
    const {
      formData,
      electoralOfficeEmail,
      setElectoralOfficeEmail,
      updateData,
      submitData,
    } = this.props;
    const shouldRedirect = !formData.userType.length;
    const { cookieNoticeDimsissed } = this.state;

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
              <SignaturePage
                formData={formData}
                electoralOfficeEmail={electoralOfficeEmail}
                setElectoralOfficeEmail={setElectoralOfficeEmail}
                updateData={updateData}
                submitData={submitData}
              />
            )}
          />
          <ProtectedRoute
            shouldRedirect={shouldRedirect}
            path="/thankYou/"
            exact
            render={() => <ThankYou />}
          />
          <Route path="/termsAndConditions/" exact render={() => <Terms />} />
          <Route path="/privacyPolicy/" exact render={() => <Privacy />} />
          <Route path="/cookiePolicy/" exact render={() => <Cookies />} />
          <Route path="/faq/" exact render={() => <FAQ />} />
          <Route
            path="/"
            render={() => (!cookieNoticeDimsissed ? (
              <div className="CookieConsent">
                <p>
                  This website uses cookies to ensure you get the best experience on our website.
                  {' '}
                  <Link to="/cookiePolicy/">Learn more</Link>
                </p>
                <button
                  type="button"
                  onClick={() => {
                    this.setState({ cookieNoticeDimsissed: true });
                    localStorage.setItem('agreedToCookies', true);
                  }}
                >
                  I agree
                </button>
              </div>
            ) : null)}
          />
        </Router>
      </Fragment>
    );
  }
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
                pathname: '/typeOfVoter/',
                state: { from: props.location },
              }}
            />
          )
      )
    }
  />
);

export default RenderingController;
