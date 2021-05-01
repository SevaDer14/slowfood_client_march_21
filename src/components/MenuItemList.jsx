import React, { Component } from "react";
import { Container, Item, Header, Button } from "semantic-ui-react";
import {getMenuItems} from "../modules/menuItemsData.js"
import {createOrder} from "../modules/orderHelper"

class MenuItemList extends Component {
  state = {
    menuData: [],
  };
  componentDidMount() {
    this.getMenuItemsData();
  }

  getMenuItemsData = async () => {
    let result = await getMenuItems();
    this.setState({ menuData: result });
  }

  addToOrder = async (event) => {
    let response = await createOrder(event.target.dataset.item_id)
    this.setState({message: response.message})
  }

  render() {
    
    const { menuData, message } = this.state;    
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
              <Button 
              data-item_id={item.id}
              data-cy={`order-button-${item.id}`}
              onClick={(event) => this.addToOrder(event)}>Add to cart</Button>
            )}
          </Item.Content>
        </Item>        
      );
    });
    return (
    <>
      <Header data-cy='menu-category-header'>{this.props.category}</Header>
         {message &&  <p data-cy="item-added-message" >{message}</p> }
      <Container>{dataIndex}</Container>
    </>
    )
  }
}

export default MenuItemList;
