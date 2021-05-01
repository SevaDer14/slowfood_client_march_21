import React, { Component } from 'react'
import MenuItemList from './components/MenuItemList'
import ViewOrder from './components/ViewOrder'
import Registration from './components/Registration'
import { Container, Header, Menu } from 'semantic-ui-react' 
import LogIn from './components/LogIn'

class App extends Component {
  state = {
    tab: "starters",
    authenticated: false 
  }

  setAuthStatus= () => {
    this.setState({authenticated: true})
  }

  setOrderId= (orderId) => {
    this.setState({orderId: orderId})
  }

  render() {
    return (
      <Container text>
        <Registration authStatus={this.setAuthStatus} />
        <Header
          textAlign="center"
          style={{
            marginTop: "28px",
            fontSize: "28px",
          }}
        >
          SLOW-FOOD
        </Header>
        <Menu pointing secondary>
          <Menu.Item 
            data-cy="starters-button"
            name="Starters"
            onClick={() => this.setState({ tab: "starters" })}
          />
          <Menu.Item
            data-cy="mains-button"
            name="Mains"
            onClick={() => this.setState({ tab: "mains" })}
          />
          <Menu.Item
            data-cy="desserts-button"
            name="Desserts"
            onClick={() => this.setState({ tab: "desserts" })}
          />
          <Menu.Item
            data-cy="beverages-button"
            name="Beverages"
            onClick={() => this.setState({ tab: "beverages" })}
          />
          <Menu.Item
            data-cy="view-order-button"
            name="View Order"
            onClick={() => this.setState({ tab: "view-order" })}
          />
        </Menu>
        <LogIn authStatus={this.setAuthStatus} />
        {(this.state.tab === "view-order")
          ? <ViewOrder orderId={this.setOrderId}/>
          : <MenuItemList authenticated={this.state.authenticated} tab={this.state.tab} />}
      </Container>
    );
  }
}

export default App;
