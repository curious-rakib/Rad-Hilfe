import {
    Box,
    VStack,
    Text,
    Flex,
    Stack,
    Image,
    Center,
    Grid,
    GridItem
} from '@chakra-ui/react';

import { Link as ReactRouterLink } from 'react-router-dom'
import { Link as ChakraLink, LinkProps } from '@chakra-ui/react'
import { FcLike } from 'react-icons/fc';
// import bike from '../../assets/bike.svg';
import MyBikeProgressBar from '../../components/MyBikeProgressBar';
import { SlArrowDown } from 'react-icons/sl';
import bike from '../../assets/images/bike2.png';
import ReplaceButton from '../../components/ReplaceButton';
import { useAppSelector } from '../../app/hooks';
import { useEffect, useState } from 'react';

const MyBike = () => {
    const initialState = {
        brand: '',
        model: '',
        serialNumber: '',
        purchaseMonth: '',
        purchaseYear: ''
    };

    const [bikeDetails, setBikeDetails] = useState(initialState);


    useEffect(() => {
        const storeBikeData = localStorage.getItem('bikeData');
        if (storeBikeData) {
            let parseBikeData = JSON.parse(storeBikeData);

            setBikeDetails(parseBikeData)

        }
    }, [])
    const { brand, model, serialNumber, purchaseMonth, purchaseYear } = bikeDetails;

    const date = Math.floor(Math.random() * (28 - 1 + 1)) + 1;











    return (
        <Box bg='third'>
            <Grid alignItems={'flex-start'} templateColumns='repeat(2, 1fr)' gap={4} h='35rem' px={3} >
                <GridItem w='100%' h={''} ><Stack spacing={4} color={'secondary'}>
                    {' '}
                    <Box mt={"100px"}>
                        <Text fontWeight='semibold' fontSize={'sm'} >Bike Brand</Text>
                        <Text fontWeight={'bold'} fontSize={'2xl'} mt={-1}>{brand}</Text>
                    </Box>
                    <Box>
                        <Text fontWeight='semibold' fontSize={'sm'}>Bike Model</Text>
                        <Text fontWeight={'bold'} fontSize={'2xl'} mt={-1}>{model}</Text>
                    </Box>
                    <Box>
                        <Text fontWeight='semibold' fontSize={'sm'} style={{ "whiteSpace": 'nowrap' }}>Serial Number</Text>
                        <Text fontWeight={'bold'} fontSize={'2xl'} mt={-1}>{serialNumber}</Text>
                    </Box>
                    <Box>
                        <Text fontWeight='semibold' fontSize={'sm'}>Start Date</Text>
                        <Text fontWeight={'bold'} fontSize={'2xl'} mt={-1}>{date} Aug {purchaseYear}</Text>
                    </Box>
                </Stack></GridItem>
                <GridItem w='12.9rem' mt={'2rem'}  >
                    <img src={bike} alt="" />

                </GridItem>

            </Grid>

            <Stack

                rounded={'3rem'} p={6}
                bg={'secondary'}
                bottom={6} position="fixed" width="100%"

            >
                <Flex mt={'2rem'} >
                    <Text color={'accent'} mr={2} textStyle={''}
                        fontWeight={'400'} fontSize={'xl'}

                    >
                        My bike's health{' '}
                    </Text>

                    <FcLike size={27} />

                </Flex>

                <MyBikeProgressBar />
                <Text color={'accent'} my={4} fontSize={'sm'}>
                    {' '}
                    You need to replace  <span style={{ borderBottom: '1px solid currentColor' }}>5 components</span> in your bicycle


                </Text>
                <Center pt={'.25rem'}>

                    <ChakraLink as={ReactRouterLink} to='/cart'>

                        <ReplaceButton
                            borderRadius='.75rem'
                            fontWeight='800'
                            loadingText='Submitting'
                            size='lg'
                            bg='accent'
                            w='200px'
                            color='secondary'
                            text='Replace now'
                        />
                    </ChakraLink>

                </Center>
            </Stack>
        </Box >
    );
};

export default MyBike;
