import { Container, Flex, Grid, GridItem, Text, Box } from '@chakra-ui/react';
import Cards from '../../components/Cards';
import { FaCloud } from 'react-icons/fa'
import { useEffect, useState } from 'react';
import { profile } from '../../services/authentication';
import { useAppSelector } from '../../app/hooks';
import { setUpBikeInfo } from '../../services/bikeDetails';
import { Link as ReactRouterLink } from 'react-router-dom'
import { Link as ChakraLink, LinkProps } from '@chakra-ui/react'
import { getWeatherData } from '../../services/weather';


const Home = () => {
    // const { bikeDetails, dailyCommute, recreationalCommute } = useAppSelector(
    //     (state) => state.rootSetBikeReducer
    // );
    // const bikeInfo = {
    //     ...bikeDetails,
    //     dailyCommute,
    //     recreationalCommute,
    // };

    // // console.log(bikeInfo);
    // console.log(bikeDetails, dailyCommute, recreationalCommute);
    // useEffect(() => {
    //     const fetchData = async () => {
    //         const result = await setUpBikeInfo(bikeInfo);
    //         console.log('from home', result);
    //     };
    //     fetchData();
    // }, [])






    //name
    const [name, setName] = useState('')
    useEffect(() => {
        const fetchData = async () => {
            const userInfo = await profile();

            const userName = userInfo.name;

            setName(userName)
        };
        fetchData();

    }, [])

    //getting latitude,longitude
    const initialState = {
        longitude: 0,
        latitude: 0

    }
    const initialWeather = {
        description: '',
        temperature: 0
    }
    const [locationData, setLocationData] = useState(initialState)
    const [currentWeather, setCurrentWeather] = useState(initialWeather);
    let userLoctaion = navigator.geolocation;
    function myGeolocator() {
        if (userLoctaion) {
            userLoctaion.getCurrentPosition(success);
        }
    }
    function success(data: {
        coords: {
            longitude: any; latitude: any;
        };
    }) {
        let latitude = data.coords.latitude;
        let longitude = data.coords.longitude;


        setLocationData({ longitude, latitude })
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

        <Container p={4}>
            <Box mt={32}>
                <Text textStyle='h2' color='accent'>
                    Good Morning, <br /> {name}
                </Text>
                <Flex
                    justifyContent={'space-between'}
                    alignItems={'center'}
                    color='accent'

                >
                    <Text fontSize='xs' >Riding Condition:  {currentWeather.description}</Text>
                    <Flex>
                        <FaCloud color='accent'></FaCloud>
                        <Text fontSize='xs' ml={1}> {currentWeather.temperature}°C    </Text>
                    </Flex>
                </Flex>
            </Box>
            <br />
            <br />
            <Flex
                flexDirection="column"
                alignItems="center"
                justifyContent="flex-end"
                height="calc(50vh)"
            >
                <Grid

                    templateRows='repeat(6, 1fr)'
                    templateColumns='repeat(6, 1fr)'
                    gap={4}
                >
                    <GridItem rowSpan={6} colSpan={3}>
                        <ChakraLink as={ReactRouterLink} to='/my-bike'>
                            <Cards

                                name={'My Bike'}
                                textStyle={'h1'}
                                w={''}
                                h={'258px'}
                                bg={'fourth'}
                                color={'black'}
                                px='4'
                                py='8'
                            ></Cards>
                        </ChakraLink>
                    </GridItem>
                    <GridItem colSpan={3} rowSpan={3} bg=''>
                        <ChakraLink as={ReactRouterLink} to='/care-plan'>
                            <Cards
                                name={'My Care Plans'}
                                textStyle={'h3'}
                                w={''}
                                h={'120px'}
                                bg={'accent'}
                                color={'black'}
                                px='4'
                                py='12'
                            ></Cards>
                        </ChakraLink>
                    </GridItem>
                    <GridItem colSpan={3} rowSpan={3} bg=''>
                        <Cards
                            name={'Request Support'}
                            textStyle={'h3'}
                            w={''}
                            h={'120px'}
                            bg={'third'}
                            color={'black'}
                            px='12'
                            py='8'
                        ></Cards>
                    </GridItem>
                    <GridItem colSpan={6} bg=''>

                        <Cards
                            name={'My Bike Health'}
                            textStyle={'h2'}
                            w={''}
                            h={'140px'}
                            bg={'accent'}
                            color={'black'}
                            px='4'
                            py='4'
                        ></Cards>



                    </GridItem>
                </Grid>
            </Flex>
        </Container>
    );
};

export default Home;
