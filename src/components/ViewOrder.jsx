import React, { Component } from 'react'
import {getOrder} from '../modules/orderData'
import {Item, Container, Header} from 'semantic-ui-react'

class ViewOrder extends Component {

  state = {
    menuData: [],
  };

  componentDidMount() {
    this.getOrderData();
  }

  getOrderData = async () => {
    let result = await getOrder(this.props.orderId);
    this.setState({ menuData: result });
  };
  
  render() {
    let orderItems = this.state.menuData.map((item, i) => {
      return (
        <Item data-cy={`item-${i}`}>
          <Item.Content>
            <Item.Header data-cy="title">{item.title}</Item.Header>
            <Item.Extra data-cy="price">{item.price}Kr</Item.Extra>
          </Item.Content>
        </Item>
      );
    });
    return (
      <>
      <Header data-cy="menu-category-header">{this.props.tab}</Header>
      <Container data-cy='order-list'>
        {orderItems}
      </Container>
      </>
    )
  }
}
export default ViewOrder
