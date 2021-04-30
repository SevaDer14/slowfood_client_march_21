import React, { Component } from "react";
import { Button, Container, Item } from "semantic-ui-react";
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
    const categoryItems = menuData.filter(item => item.category === 'starters')
    let dataIndex = categoryItems.map((item) => {
      return (
        <Item key={item.id}>
          <Item.Content data-cy='menu'>
            <Item.Header data-cy='title'>{item.title}</Item.Header>
            <Item.Description data-cy='description'>{item.description}</Item.Description>
            <Item.Extra data-cy='price'>{item.price}Kr</Item.Extra>
            <Item.Extra data-cy='size'>{item.size}</Item.Extra>
            {this.props.authenticated && (
              <Button data-cy='order-button'>Add to order</Button>
            )}
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
