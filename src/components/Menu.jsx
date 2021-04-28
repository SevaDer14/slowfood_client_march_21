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
          <Item.Content data-cy='menu'>
            <Item.Header data-cy='title'>{item.title}</Item.Header>
            <Item.Description data-cy='description'>{item.description}</Item.Description>
            <Item.Extra data-cy='price'>{item.price}Kr</Item.Extra>
            <Item.Extra data-cy='size'>{item.size}</Item.Extra>
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
