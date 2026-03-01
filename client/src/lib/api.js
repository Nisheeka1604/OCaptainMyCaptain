// API utility functions
export const fetchData = async (url) => {
  const response = await fetch(url);
  return response.json();
};
