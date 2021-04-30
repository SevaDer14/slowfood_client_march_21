import React, { Component } from 'react'
import MenuItemList from './components/MenuItemList'
import { Container, Menu } from 'semantic-ui-react' 

class App extends Component {
  render() {
    return (
      <Container text>
        <h1>Slowfood</h1>
        <Menu pointing secondary>
          <Menu.Item data-cy='starters-button' name='Starters'/>
          <Menu.Item data-cy='mains-button'name='Mains'/>
          <Menu.Item data-cy='desserts-button'name='Desserts'/>
          <Menu.Item data-cy='beverages-button'name='Beverages'/> 
        </Menu>         
        <MenuItemList />

      </Container>
    )
  }
}

export default App;

