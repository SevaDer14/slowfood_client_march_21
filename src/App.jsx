import React, { Component } from "react";
import MenuItemList from "./components/MenuItemList";
import Registration from './components/Registration'
import { Container, Header, Menu } from "semantic-ui-react";

class App extends Component {
  state = {
    category: "starters",
    authenticated: false
  };

  setAuthStatus = () => {
    this.setState({authenticated: true})
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
            onClick={() => this.setState({ category: "starters" })}
          />
          <Menu.Item
            data-cy="mains-button"
            name="Mains"
            onClick={() => this.setState({ category: "mains" })}
          />
          <Menu.Item
            data-cy="desserts-button"
            name="Desserts"
            onClick={() => this.setState({ category: "desserts" })}
          />
          <Menu.Item
            data-cy="beverages-button"
            name="Beverages"
            onClick={() => this.setState({ category: "beverages" })}
          />
        </Menu>
        <MenuItemList authenticated={this.state.authenticated} category={this.state.category} />
      </Container>
    );
  }
}

export default App;
