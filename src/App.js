import React from 'react';
import Form from './Form';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'welcome',
      formData: {
        firstName: '',
      },
    };

    this.updateData = this.updateData.bind(this);
    this.switchView = this.switchView.bind(this);
  }

  updateData(event) {
    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;

    this.setState({
      formData: {
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
          <Form
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
