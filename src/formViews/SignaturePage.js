import React, { Fragment } from 'react';
import SignaturePad from 'react-signature-pad-wrapper';

import './SignaturePage.css';

class SignaturePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emptySignature: false,
    };

    this.signForm = this.signForm.bind(this);
  }

  async signForm() {
    const { updateData, switchView, submitData } = this.props;
    if (this.signaturePad.isEmpty()) {
      this.setState({ emptySignature: true });
    } else {
      await updateData({ target: { value: this.signaturePad.toDataURL(), name: 'signature' } });
      submitData();
      switchView('thankYou');
    }
  }

  render() {
    const { signForm } = this;
    const { formData } = this.props;
    const { emptySignature } = this.state;
    return (
      <Fragment>
        <h1>You are submitting:</h1>
        <ul className="RevisedUserDetails">
          {
            Object.keys(formData)
              .filter(key => formData[key].length)
              .map(key => (
                <li key={key}>
                  <b>
                    {key}
                    :&nbsp;
                  </b>
                  {formData[key]}
                </li>
              ))
            }
        </ul>
        <h2>Please sign:</h2>
        {emptySignature ? (
          <h3>You need to sign the form before you can proceed.</h3>
        ) : null}
        <div className="SignaturePad">
          <SignaturePad redrawOnResize ref={(ref) => { this.signaturePad = ref; }}  />
        </div>
        <button
          type="button"
          onClick={signForm}
        >
          Next
        </button>
      </Fragment>
    );
  }
}

export default SignaturePage;
