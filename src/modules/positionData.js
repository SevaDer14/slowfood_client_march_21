import axios from 'axios'

const getPositions = async () => {
  const response = await axios.get("/menu")
  return response.data.positions;
};

export { getPositions }