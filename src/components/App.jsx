import React from 'react';
import './App.css';
import "./Loader.css"
import SettingsContainer from '../containers/Settings'
import TicketsListContainer from '../containers/TicketsList'

import logo from '../resources/logo.png'

class App extends React.Component {
  renderLoader() {
    return <div className='loader'>Loading...</div>
  }

  renderTickets() {
    return (
      <div className='row'>
        <SettingsContainer className='col' />
        <TicketsListContainer className='col' />
      </div>
    ) 
  }

  renderFailedMessage() {
    return (
      <div>Билеты не найдены</div>
    )
  }

  render() {
    const { fetchingTicketsState } = this.props

    return (
      <div className="App">
        <img src={ logo } alt='logo' />
        { fetchingTicketsState === 'requested' ? this.renderLoader() : 
          fetchingTicketsState === 'failed' ? this.renderFailedMessage() :
          this.renderTickets() 
        }
      </div>
    )
  }
}

export default App;
