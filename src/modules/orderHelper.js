import axios from 'axios'

const authHeaders = JSON.parse(localStorage.getItem('userData'))

const createOrder = async (item_id) => {
  let response = await axios.post(
    'http://localhost:3000/api/orders',
    {menu_item_id: item_id}, 
     {headers: authHeaders})
     
  return response.data
}

const updateOrder = async (item_id, order_id) => {
  let response = await axios.put(
    `http://localhost:3000/api/orders/${order_id}`,
     {menu_item_id: item_id}, 
     {headers: authHeaders}) 
  return response.data
}

const getOrder = async (order_id) => {
  const response = await axios.get(`http://localhost:3000/api/orders/${order_id}`, {headers: authHeaders})
  return response.data.order.menu_items;
};

const closeOrder = async (order_id) => {
  const response = await axios.put(`http://localhost:3000/api/orders/${order_id}`, {finalized: true}, {headers: authHeaders})
  return response.data
}

export { createOrder, updateOrder, getOrder, closeOrder }