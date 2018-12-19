import React from 'react';
import logo from '../logo.svg';
import './App.css';
import TicketsList from './TicketsList'

class App extends React.Component {
  render() {
    return (
      <div className="App">
       <TicketsList />
      </div>
    );
  }
}

export default App;
