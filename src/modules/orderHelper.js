import axios from 'axios'

const authHeaders = JSON.parse(localStorage.getItem('userData'))

const createOrder = async (item_id) => {
  let response = await axios.post(
    './orders',
     {item_id: item_id}, 
     {headers: authHeaders}) 
  return response.data
}

const updateOrder = async (item_id, order_id) => {
  let response = await axios.put(
    `./orders/${order_id}`,
     {item_id: item_id}, 
     {headers: authHeaders}) 
  return response.data.body
}

const getOrder = async (order_id) => {
  const response = await axios.get(`/orders/${order_id}`, {headers: authHeaders})
  return response.data.order.items;
};

const closeOrder = async (order_id) => {
  const response = await axios.put(`/orders/${order_id}`, {params: {finalized: true}}, {headers: authHeaders})
  return response.data
}

export { createOrder, updateOrder, getOrder, closeOrder }