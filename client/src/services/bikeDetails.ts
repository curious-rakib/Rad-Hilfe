import { useAppSelector } from '../app/hooks';

const BASE_URL = 'http://localhost:4000';
const token = localStorage.getItem('accessToken');
// const { bikeDetails, dailyCommute, recreationalCommute } = useAppSelector(
//   (state) => state.rootSetBikeReducer
// );
// const bikeInfo = {
//   ...bikeDetails,
//   dailyCommute,
//   recreationalCommute,
// };

export const setUpBikeInfo = async (bikeinfo: any) => {
  console.log('bike info', bikeinfo);
  try {
    const response = await fetch(`${BASE_URL}/cyclist/set-up-bicycle`, {
      method: 'POST',
      credentials: 'include',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bikeinfo),
    });
    const bike = await response.json();
    console.log(bike);
    return bike;
  } catch (error) {
    console.log(error);
  }
};
// setUpBikeInfo(bikeInfo);
