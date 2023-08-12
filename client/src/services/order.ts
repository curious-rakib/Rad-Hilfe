import axios from 'axios';
const BASE_URL = 'http://localhost:4000';
const token = localStorage.getItem('accessToken');

export const order = async (order: any) => {
  try {
    const response = await fetch(`${BASE_URL}/cyclist/create-order`, {
      method: 'POST',
      credentials: 'include',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(order),
    });
    const orderDetails = await response.json();
    console.log(orderDetails);
    return orderDetails;
  } catch (error) {
    console.log(error);
  }
};
