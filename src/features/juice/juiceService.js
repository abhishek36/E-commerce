const api_url = '/juice'
const getjuice = async () => {
  const response = await fetch(api_url);
  const data = await response.json();
  return data;
};

const getsinglejuice = async (id) => {
  const response = await fetch(api_url +'/'+ id);
  const data = await response.json();
  return data;
};

const juiceService = {
  getjuice,
  getsinglejuice,
};

export default juiceService;
