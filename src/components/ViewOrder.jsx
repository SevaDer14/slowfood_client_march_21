import React, { Component } from 'react'
import {getOrder} from '../modules/orderData'
import {Item, Container} from 'semantic-ui-react'

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
    let orderItems = this.state.menuData.map((item) => {
      return (
        <Item data-cy="menu-listing">
          <Item.Content>
            <Item.Header data-cy="title">{item.title}</Item.Header>
            <Item.Extra data-cy="price">{item.price}Kr</Item.Extra>
          </Item.Content>
        </Item>
      );
    });
    return (
      <Container>
        {orderItems}
      </Container>
    )
  }
}
export default ViewOrder
