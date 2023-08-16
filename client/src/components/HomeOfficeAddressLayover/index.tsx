import { Center, Stack } from '@chakra-ui/react';

import InputField from '../InputField';
import SubmitButton from '../Button';
import { useEffect, useState } from 'react';
import axios from 'axios';
import mapboxgl from 'mapbox-gl';
import { totalDistance } from '../../features/cyclist/commuteDetails-slice';
import { useAppDispatch } from '../../app/hooks';
import { Link } from 'react-router-dom';
interface Markar {
  lat: number;
  lng: number;
}
function HomeOfficeAddressLayover({
  onToggle,
  markars,
}: {
  onToggle: Function;
  markars: Markar[];
}) {
  const [homelocationName, setHomeLocationName] = useState('');
  const [worklocationName, setWorkLocationName] = useState('');
  // console.log('homeOfiice page', markars);
  // console.log(mapboxgl.accessToken);

  useEffect(() => {
    const rGeocodingWork = async () => {
      try {
        if (markars) {
          const startCoordslat = markars[0].lat;

          const startCoordslng = markars[0].lng;

          const endCoordslat = markars[markars.length - 1].lat;
          const endCoordslng = markars[markars.length - 1].lng;
          const response = await axios.get(
            `https://api.mapbox.com/geocoding/v5/mapbox.places/${startCoordslng},${startCoordslat}.json?access_token=${mapboxgl.accessToken}`
          );
          const response2 = await axios.get(
            `https://api.mapbox.com/geocoding/v5/mapbox.places/${endCoordslng},${endCoordslat}.json?access_token=${mapboxgl.accessToken}`
          );

          setHomeLocationName(response.data.features[0].place_name);
          setWorkLocationName(response2.data.features[0].place_name);
        }
      } catch (error) {
        console.log(error);
      }
    };

    rGeocodingWork();
  }, [markars]);

  const dispatch = useAppDispatch();
  const handleChange = () => {};
  const handleClick = () => {
    const Distance = localStorage.getItem('totalDistance');
    const numberTotalDistance = Number(Distance);

    dispatch(totalDistance(numberTotalDistance));
  };

  return (
    <Stack spacing={9}>
      <InputField
        location={homelocationName}
        id='home'
        isRequired={true}
        type='text'
        placeholder='Home Address'
        onChange={handleChange}
        name='home'
        borderColor='accent'
        color='accent'
        onToggle={onToggle}
        borderRadius={''}
      />

      <InputField
        location={markars.length > 1 ? worklocationName : ''}
        borderRadius='10px'
        id='work'
        isRequired={true}
        type='text'
        placeholder='Work Address'
        onChange={handleChange}
        name='work'
        borderColor='accent'
        color='accent'
        onToggle={onToggle}
      />

      <Center mt={-3}>
        <Link to={'/setup-bike-details'}>
          <SubmitButton
            onClick={handleClick}
            loadingText='Submitting'
            size='lg'
            bg='accent'
            w='200px'
            color='secondary'
            text='Next'
            borderRadius={'10px'}
            fontWeight={'bold'}
          />
        </Link>
      </Center>
    </Stack>
  );
}

export default HomeOfficeAddressLayover;
