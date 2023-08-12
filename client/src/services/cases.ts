import axios from 'axios';
const BASE_URL = 'http://localhost:4000';
const token = localStorage.getItem('accessToken');

export const getAallCases = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/cyclist/get-all-cases`, {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      },
    });

    const allCases = response.data;
    console.log('allcases from service', allCases);
    return allCases;
  } catch (error) {
    console.log(error);
  }
};
