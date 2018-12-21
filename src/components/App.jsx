import React from 'react';
import './App.css';
import Settings from './Settings'
import TicketsList from './TicketsList'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className='row'>
          <Settings />
          <TicketsList />
        </div>
      </div>
    );
  }
}

export default App;
