import fetch from 'node-fetch';
import path from 'path';

import * as dotenv from 'dotenv';
dotenv.config({ path: path.join(__dirname, '../.env') });

const getWeatherData = async (longitude: Number, latitude: Number) => {
  const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';
  const lat = longitude;
  const lon = latitude;
  const appid = process.env.OPEN_WEATHER_API_ID;

  console.log(appid);

  const url = `${apiUrl}?&lat=${lat}&lon=${lon}&appid=${appid}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`API request failed with status: ${response.status}`);
    }

    const weatherData = await response.json();

    console.log(weatherData);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

export { getWeatherData };
