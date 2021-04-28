import React, { Component } from 'react'
import Menu from './components/Menu'
import Registration from './components/Registration';

class App extends Component {
  render() {
    return (
      <>
        <h1>Slowfood</h1>
        <Registration />
        <Menu />
      </>
    )
  }
}

export default App;

