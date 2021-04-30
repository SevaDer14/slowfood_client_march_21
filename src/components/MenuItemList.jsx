import React, { Component } from "react";
import { Container, Item, Header } from "semantic-ui-react";
import {getMenuItems} from "../modules/menuItemsData.js"

class MenuItemList extends Component {
  state = {
    menuData: [],
  };
  componentDidMount() {
    this.getMenuItemsData();
  }

  async getMenuItemsData() {
    let result = await getMenuItems();
    this.setState({ menuData: result });
  }

  render() {
    
    const { menuData } = this.state;    
    const categoryItems = menuData.filter(item => item.category === this.props.category)
    let dataIndex = categoryItems.map((item) => {
      return (                
        <Item key={item.id} data-cy='menu-listing'>
          <Item.Content data-cy={`${this.props.category.slice(0,-1)}-${categoryItems.indexOf(item)}`}>            
            <Item.Header data-cy='title'>{item.title}</Item.Header>
            <Item.Description data-cy='description'>{item.description}</Item.Description>
            <Item.Description data-cy='size'>{item.size}</Item.Description>
            <Item.Extra data-cy='price'>{item.price}Kr</Item.Extra>
            <Item.Extra data-cy='size'>{item.size}</Item.Extra>
            {this.props.authenticated && (
              <button data-cy="order-button">Add to cart</button>
            )}
            
          </Item.Content>
        </Item>        
      );
    });
    return (
    <>
      <Header data-cy='menu-category-header'>{this.props.category}</Header>
      <Container>{dataIndex}</Container>
    </>
    )
  }
}

export default MenuItemList;
