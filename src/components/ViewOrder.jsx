import React, { Component } from 'react'
import {getOrder, closeOrder} from '../modules/orderHelper'
import {Item, Container, Header, Button} from 'semantic-ui-react'

class ViewOrder extends Component {

  state = {
    orderData: [],
    totalPrice: 0,    
  };

  componentDidMount() {
    this.getOrderData();
    
  };

  getOrderData = async () => {
    let result = await getOrder(this.props.orderId);
    this.setState({ orderData: result });
    this.calculateTotalPrice()
  };

  calculateTotalPrice = () => {   
    this.state.orderData.map((item) => {
      let totalPrice = this.state.totalPrice + item.price
      this.setState({totalPrice: totalPrice})      
    })
  }

  finalizeOrder = async () => {
    let result = await closeOrder(this.props.orderId)
    this.setPickUpTime(result.order.updated_at);
  }

  setPickUpTime = (timeOfOrder) => {
    let timestamp =`${timeOfOrder.slice(11, 16)}`
    let [hh, mm] = timestamp.split(':').map(s=>parseInt(s, 10));
    const d = new Date();
    d.setHours(hh);
    d.setMinutes(mm);
    const pickUpTime = new Date(d.getTime() + 30 * 60 * 1000)    
    this.setState({pickUpTime: `${pickUpTime.toString().slice(16, 21)}`})
  }
   
  
  render() {
    let orderItems = this.state.orderData.map((item, i) => {
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
      {(this.state.pickUpTime) 
      && (
        <>
        <p data-cy="order-confirmation-message">Thank you for your order</p>
        <p data-cy="order-confirmation-ready-time">Your order will be ready at {this.state.pickUpTime}</p>
        </>
      )
      }
      </>
    )
  }
}
export default ViewOrder
