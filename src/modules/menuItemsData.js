import axios from 'axios'

const getMenuItems = async () => {
  
  const response = await axios.get("http://localhost:3000/api/menu_items")
  
  return response.data.menu_items;
};

export { getMenuItems }

