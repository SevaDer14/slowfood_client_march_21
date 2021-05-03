import axios from 'axios'

const authHeaders = () => {
  return JSON.parse(localStorage.getItem('userData'))
} 

const validateToken = async () => {
  const headers = authHeaders()
  let credentials = {
    "access-token": headers.access_token,
    "token-type":   headers.token_type,
    "client":       headers.client,
    "expiry":       headers.expiry,
    "uid":          headers.uid
  }
  await axios.get("https://baked-beans.herokuapp.com/api/auth/validate_token", credentials);
}


const createOrder = async (item_id) => {
  validateToken()
  let response = await axios.post(
    'https://baked-beans.herokuapp.com/api/orders',
    {menu_item_id: item_id}, 
     {headers: authHeaders()})
  return response.data
}

const updateOrder = async (item_id, order_id) => {
  validateToken()
  let response = await axios.put(
    `https://baked-beans.herokuapp.com/api/orders/${order_id}`,
     {menu_item_id: item_id}, 
     {headers: authHeaders()}) 
  return response.data
}

const getOrder = async (order_id) => {
  validateToken()
  const response = await axios.get(`https://baked-beans.herokuapp.com/api/orders/${order_id}`, {headers: authHeaders()})
  return response.data.order.menu_items;
};

const closeOrder = async (order_id) => {
  validateToken()
  const response = await axios.put(`https://baked-beans.herokuapp.com/api/orders/${order_id}`, {finalized: true}, {headers: authHeaders()})
  return response.data
}

export { createOrder, updateOrder, getOrder, closeOrder }