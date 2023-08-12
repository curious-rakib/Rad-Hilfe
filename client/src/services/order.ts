import axios from 'axios';
const BASE_URL = 'http://localhost:4000';
const token = localStorage.getItem('accessToken');

export const order = async (order: any) => {
  try {
    const response = await axios.post(`${BASE_URL}/cyclist/create-order`, {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      },
      data: order,
    });

    const orderDetails = response.data;
    console.log('bicycle from service', orderDetails);
    return orderDetails;
  } catch (error) {
    console.log(error);
  }
};
