import axios from 'axios'

const getMenuItems = async () => {  
  const response = await axios.get("/menu_items")  
  return response.data.menu_items;
};

export { getMenuItems }

