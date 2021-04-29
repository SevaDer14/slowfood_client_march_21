import React, { Component } from 'react'
import Menu from './components/Menu'
import Registration from './components/Registration';

class App extends Component {
  state = {
    authenticated: false
  }

  setAuthStatus = () => {
    this.setState({authenticated: true})
  }

  render() {
    return (
      <>
        <h1>Slowfood</h1>
        <Registration authStatus={this.setAuthStatus}/>
        <Menu authenticated={this.state.authenticated}/>
      </>
    )
  }
}

export default App;

