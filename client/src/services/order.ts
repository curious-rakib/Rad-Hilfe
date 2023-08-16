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

export const getPlan = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/cyclist/get-plan`, {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      },
    });

    const plan = response.data;
    console.log('plan from service', plan);
    return plan;
  } catch (error) {
    console.log(error);
  }
};

export const getTimeSlots = async (subparts: any) => {
  try {
    const response = await axios.post(`${BASE_URL}/cyclist/available-support-time`, {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json',
        body: JSON.stringify(subparts),
        authorization: `Bearer ${token}`,
      },
    });

    const slots = response.data;
    console.log('time slots from service', slots);
    return slots;
  } catch (error) {
    console.log(error);
  }
};
