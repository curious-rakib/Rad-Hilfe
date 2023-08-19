import { Container, Flex, Grid, GridItem, Text, Box, Image } from '@chakra-ui/react';
import Cards from '../../components/Cards';
import { FaCloud } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { profile } from '../../services/authentication';
import { useAppSelector } from '../../app/hooks';
import { bicycleHealth, setUpBikeInfo } from '../../services/bikeDetails';
import { Link as ReactRouterLink } from 'react-router-dom';
import { Link as ChakraLink, LinkProps } from '@chakra-ui/react';
import { getWeatherData } from '../../services/weather';
import logo from '../../assets/logo.svg';

const Home = () => {
  const { bikeDetails, dailyCommute, recreationalCommute } = useAppSelector(
    (state) => state.rootSetBikeReducer
  );
  const bikeInfo = {
    ...bikeDetails,
    dailyCommute,
    recreationalCommute,
  };

  // console.log(bikeInfo);
  console.log(bikeDetails, dailyCommute, recreationalCommute);
  useEffect(() => {
    const fetchData = async () => {
      const result = await setUpBikeInfo(bikeInfo);
      console.log('from home', result);
    };
    fetchData();
  }, []);

  //name

  const [healthData, setHealthData] = useState(0);
  const [name, setName] = useState('');
  useEffect(() => {
    const fetchData = async () => {
      const userInfo = await profile();

      const userName = userInfo.name;

      setName(userName);
    };

    const health = async () => {
      const healthD = await bicycleHealth('64db5ac230ba9ed8cfdadfda');
      setHealthData(Math.round(healthD.totalHealth));

      console.log(healthData);
    };

    health();
    fetchData();
  }, []);

  //getting latitude,longitude

  const initialState = {
    longitude: 0,
    latitude: 0,
  };
  const initialWeather = {
    description: '',
    temperature: 0,
  };

  const [locationData, setLocationData] = useState(initialState);
  const [currentWeather, setCurrentWeather] = useState(initialWeather);
  let userLoctaion = navigator.geolocation;
  function myGeolocator() {
    if (userLoctaion) {
      userLoctaion.getCurrentPosition(success);
    }
  }
  function success(data: {
    coords: {
      longitude: any;
      latitude: any;
    };
  }) {
    let latitude = data.coords.latitude;
    let longitude = data.coords.longitude;

    setLocationData({ longitude, latitude });
  }
  useEffect(() => {
    const fetchData = async () => {
      await myGeolocator();
      const weather = await getWeatherData(locationData);
      setCurrentWeather(weather);
    };

    fetchData();
  }, []);

  return (
    <Box p={4}>
      
      <Flex>
        <Image src={logo} boxSize={'40px'} />
      </Flex>
      <Box mt={24}>
        <Text fontSize={'2xl'} mb={4} fontWeight={'semibold'} color='accent'>
          Good morning, <br /> {name}
        </Text>
        <Flex justifyContent={'space-between'} alignItems={'center'} color='accent'>
          <Text fontSize='xs'>Riding Condition: {currentWeather.description}</Text>
          <Flex mr={'1rem'}>
            <FaCloud color='accent'></FaCloud>
            <Text fontSize='xs' ml={2}>
              {' '}
              {currentWeather.temperature}°C{' '}
            </Text>
          </Flex>
        </Flex>
      </Box>
      <br />
      <br />
      <Flex
        flexDirection='column'
        alignItems='center'
        justifyContent='flex-end'
        height='calc(50vh)'
      >
        <Grid templateRows='repeat(6, 1fr)' templateColumns='repeat(6, 1fr)' gap={4}>
          <GridItem rowSpan={6} colSpan={3}>
            <ChakraLink as={ReactRouterLink} to='/my-bike'>
              <Cards
                fontWeight={'extrabold'}
                fontSize={'4xl'}
                name={'My bike'}
                textStyle={''}
                w={'100%'}
                h={'17rem'}
                bg={'fourth'}
                color={'black'}
                px='1.25rem'
                py='5.15rem'
              ></Cards>
            </ChakraLink>
          </GridItem>
          <GridItem colSpan={3} rowSpan={3} bg=''>
            <ChakraLink as={ReactRouterLink} to='/care-plan'>
              <Cards
                name={'My care plans'}
                fontWeight={'extrabold'}
                fontSize={'xl'}
                w={''}
                h={'8rem'}
                bg={'accent'}
                color={'black'}
                px='4'
                py='12'
                textStyle={''}
              ></Cards>
            </ChakraLink>
          </GridItem>
          <GridItem colSpan={3} rowSpan={3} bg=''>
            <ChakraLink as={ReactRouterLink} to='/chat'>
              <Cards
                name={'Request support'}
                textStyle={''}
                fontWeight={'extrabold'}
                fontSize={'xl'}
                w={''}
                h={'8rem'}
                bg={'third'}
                color={'black'}
                px='2.75rem'
                py='8'
              ></Cards>
            </ChakraLink>
          </GridItem>
          <GridItem colSpan={6} bg=''>
            <Cards
              health={healthData}
              fontWeight={'extrabold'}
              fontSize={'2xl'}
              name={'My bike health'}
              textStyle={''}
              w={''}
              h={'8rem'}
              bg={'accent'}
              color={'black'}
              px='1rem'
              py='2.65rem'
            ></Cards>
          </GridItem>
        </Grid>
      </Flex>
    </Box>
  );
};

export default Home;
