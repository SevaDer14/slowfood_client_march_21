import axios from 'axios'

const getMenuItems = async () => {
  const response = await axios.get("/menu")
  return response.data.menu_items;
};

export { getMenuItems }

