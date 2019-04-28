import React from 'react';
import RenderingController from './RenderingController';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'welcome',
      formData: {
        firstName: '',
        surname: '',
        firstLineAddress: '',
        secondLineAddress: '',
        postcode: '',
        city: '',
        differentAddress: false,
        telephone: '',
        email: '',
        nationality: '',
        movedHouse: false,
        oldAddressFirstLineAddress: '',
        oldAddressSecondLineAddress: '',
        oldAddressPostcode: '',
        oldAddressCity: '',
        registeredAsOverseasVoter: false,
        dateOfBirth: '',
        nin: '',
        changedName: '',
        previousName: '',
        dateOfNameChange: '',
        postalVote: true,
        currentDate: (() => {
          const currentDate = new Date();
          return `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()}`;
        })(),
      },
    };

    this.updateData = this.updateData.bind(this);
    this.switchView = this.switchView.bind(this);
  }

  // For debugging purposes; remove this later
  componentDidUpdate() {
    console.log(this.state.formData);
  }

  updateData(event) {
    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;
    const { formData } = this.state;

    this.setState({
      formData: {
        ...formData,
        [name]: value,
      },
    });
  }

  switchView(newView) {
    this.setState({ view: newView });
  }

  render() {
    const { updateData, switchView } = this;
    const { view, formData } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <RenderingController
            view={view}
            formData={formData}
            switchView={switchView}
            updateData={updateData}
          />
        </header>
      </div>
    );
  }
}

export default App;
