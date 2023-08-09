import { Container, Flex, Grid, GridItem, Text, Box } from '@chakra-ui/react';
import Cards from '../../components/Cards';
import { FaCloud } from 'react-icons/fa'
import { useEffect, useState } from 'react';
import { profile } from '../../services/authentication';


const Home = () => {
    const [name, setName] = useState('')
    useEffect(() => {
        const fetchData = async () => {
            const userInfo = await profile();

            const userName = userInfo.name;

            setName(userName)
        };
        fetchData();

    }, [])
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
                    <Text fontSize='xs' >Riding Condition:  Fair</Text>
                    <Flex>
                        <FaCloud color='accent'></FaCloud>
                        <Text fontSize='xs'>18°C    </Text>
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
                    </GridItem>
                    <GridItem colSpan={3} rowSpan={3} bg=''>

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
