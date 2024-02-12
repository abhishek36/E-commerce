const getjuice = async () => {
  const response = await fetch("http://localhost:8000/juice");
  const data = await response.json();
  return data;
};

const getsinglejuice = async (id) => {
  const response = await fetch("http://localhost:8000/juice/" + id);
  const data = await response.json();
  return data;
};

const juiceService = {
  getjuice,
  getsinglejuice,
};

export default juiceService;
