import React from 'react';
import './App.css';
import SettingsContainer from '../containers/Settings'
import TicketsListContainer from '../containers/TicketsList'

import logo from '../resources/logo.png'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <img src={ logo } alt='logo' />
        <div className='row'>
          <SettingsContainer />
          <TicketsListContainer />
        </div>
      </div>
    );
  }
}

export default App;
