import React from 'react';
import BasicModal from 'react-modal';

import './Modal.css';

BasicModal.setAppElement('#root')

export default class Modal extends React.Component {
  componentWillMount() {
    this.setState({isOpen: true})
  }

  render() {
    const {
      onAccept = () => {},
      onReject,
      children
    } = this.props;
    return (
      this.state.isOpen
      ? <BasicModal
          isOpen={this.state.isOpen}
          overlayClassName="Modal__overlay"
          className="Modal__content"
        >
          {children}
          <div className="Modal__button_wrapper">
            {
              typeof onReject === 'function'
              ? <button className="Modal__button" onClick={() => {
                  this.setState({isOpen: false});
                  onReject()
                }} >
                  Cancel
                </button>
              : null
            }
            <button className="Modal__button" onClick={() => {
              this.setState({isOpen: false});
              onAccept()
            }} >
              OK
            </button>
          </div>
        </BasicModal>
      : null
    );
  };
}