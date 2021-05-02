import React, { Component } from 'react'
import {getOrder, closeOrder} from '../modules/orderHelper'
import {Item, Container, Header, Button} from 'semantic-ui-react'

class ViewOrder extends Component {

  state = {
    menuData: [],
    totalPrice: 0,    
  };

  componentDidMount() {
    this.getOrderData();
    
  }

  getOrderData = async () => {
    let result = await getOrder(this.props.orderId);
    this.setState({ menuData: result });
    this.calculateTotalPrice()
  };

  calculateTotalPrice = () => {   
    this.state.menuData.map((item) => {
      let totalPrice = this.state.totalPrice + item.price
      this.setState({totalPrice: totalPrice})      
    })
  }

  finalizeOrder = async () => {
    let result = await closeOrder(this.props.orderId)
    let timestamp =`${result.body.updated_at.slice(11, 16)}`
    let [hh, mm] = timestamp.split(':').map(s=>parseInt(s, 10));
    const d = new Date();
    d.setHours(hh);
    d.setMinutes(mm);
    const orderFinishedTime = new Date(d.getTime() + 30 * 60 * 1000)    
    this.setState({orderFinishedTime: `${orderFinishedTime.toString().slice(16, 21)}`})    
  }
  
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
      <p data-cy='total-price'>Total price: {this.state.totalPrice}Kr</p>
      <Button onClick={() => {this.finalizeOrder()}} data-cy="finalize-order-button">Confirm Order</Button>
      </>
    )
  }
}
export default ViewOrder
