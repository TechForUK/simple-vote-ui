import React, { Fragment } from 'react';
import Modal from './Modal';

class InfoModal extends React.Component {
  componentWillMount() {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <Fragment>
        <span className="modal-forms-link" onClick={() => this.setState({ showModal: true })} onKeyDown={this.handleKeyDown} role="link" tabIndex={0}>
          Submits multiple forms
        </span>
        {
          this.state.showModal
            ? <Modal onAccept={() => this.setState({ showModal: false })}>
              <p>
                This site uses the details you enter to fill in the appropriate registration forms,
                 and emails them to your local Registration Officer.
              </p>
              {/* <p>
                Your Registration Officer is legally required to process
                 your forms and contact you to confirm receipt.
              </p> */}
              <p className="form-title">
                1.
                {' '}
                <a target="_blank" rel="noopener noreferrer" href="https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/711618/Register_to_vote_if_you_re_living_in_England_or_Wales.pdf">
                ITR-E (Standard Voter Registration)
                </a>
              </p>
              <p className="form-title">
                2.
                {' '}
                <a target="_blank" rel="noopener noreferrer" href="https://www.yourvotematters.co.uk/__data/assets/pdf_file/0011/255197/EU-citizen-European-Parliament-voter-registration-form-English.pdf">
                UC1 (EU Citizen Registration)
                </a>
              </p>
              <p className="form-title">
                3.
                {' '}
                <a target="_blank" rel="noopener noreferrer" href="https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/711954/Apply-to-vote-by-post-England-Scotland-and-Wales__1_.pdf">
                Postal Voter Registration
                </a>
              </p>
              <p>
                You'll receive an email with all your completed forms also.
              </p>
              <br />
            </Modal>
            : null
        }
      </Fragment>
    );
  }
}

export default InfoModal;
