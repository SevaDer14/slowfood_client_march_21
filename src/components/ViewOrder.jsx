import React, { Component } from 'react'
import getOrder from '../modules/orderData'

class ViewOrder extends Component {

  componentDidMount() {
    this.getOrderData();
  }

  getOrderData = async () => {
    let result = await getOrder();
    this.setState({ menuData: result });
  };

  render() {
    return (
      <div>
        
      </div>
    )
  }
}
export default ViewOrder
