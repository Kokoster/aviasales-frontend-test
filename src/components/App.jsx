import React from 'react';
import './App.css';
import SettingsContainer from '../containers/Settings'
import TicketsListContainer from '../containers/TicketsList'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className='row'>
          <SettingsContainer />
          <TicketsListContainer />
        </div>
      </div>
    );
  }
}

export default App;
