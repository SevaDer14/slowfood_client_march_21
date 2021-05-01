import axios from 'axios'

const createOrder = async (item_id) => {
  let authHeaders = JSON.parse(localStorage.getItem('userData'))
  let response = await axios.post(
    './orders',
     {item_id: item_id}, 
     {headers: authHeaders}) 
  return response.data
}

export { createOrder }