import axios from 'axios'

const getMenuItems = async () => {  
  const response = await axios.get("https://baked-beans.herokuapp.com/api/menu_items")  
  return response.data.menu_items;
};

export { getMenuItems }

