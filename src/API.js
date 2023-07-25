const BASE_URL = "https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js";

export const fetchData = async (date) => {
  try {
    const response = await fetch(`${BASE_URL}/times?date=${date}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Error fetching data:', error);
  }
};

