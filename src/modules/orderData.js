import axios from 'axios'

const getOrder = async (order_id) => {
  
  let authHeaders = JSON.parse(localStorage.getItem('userData'))
  const response = await axios.get(`/orders/${order_id}`, {headers: authHeaders})
  return response.data.order.items;
};

export { getOrder }