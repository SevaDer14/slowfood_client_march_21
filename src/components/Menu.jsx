import React, { Component } from "react";
import { Container, Item } from "semantic-ui-react";
import {getPositions} from "../modules/positionData.js"
class Menu extends Component {
  state = {
    menuData: [],
  };
  componentDidMount() {
    this.getPositionsData();
  }

  async getPositionsData() {
    let result = await getPositions();
    this.setState({ menuData: result });
  }

  render() {
    const { menuData } = this.state;
    let dataIndex = menuData.map((item) => {
      return (
        <Item key={item.id}>
          <Item.Content>
            <Item.Header>{item.title}</Item.Header>
            <Item.Description>{item.description}</Item.Description>
            <Item.Extra>{item.price}Kr</Item.Extra>
            <Item.Extra>{item.size}</Item.Extra>
          </Item.Content>
        </Item>
      );
    });
    return (
    <Container>{dataIndex}</Container>
    )
  }
}

export default Menu;
