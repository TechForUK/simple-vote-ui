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
    const { emptySignature } = this.state;
    return (
      <Fragment>
        <h1>Sign here</h1>
        {emptySignature ? (
          <h3>You need to sign the form before you can proceed.</h3>
        ) : null}
        <div className="SignaturePad">
          <SignaturePad ref={(ref) => { this.signaturePad = ref; }} />
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
