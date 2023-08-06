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
import { Link as ReactRouterLink } from 'react-router-dom';
import { Link as ChakraLink, LinkProps } from '@chakra-ui/react';
import { FcLike } from 'react-icons/fc';
// import bike from '../../assets/bike.svg';
import MyBikeProgressBar from '../../components/MyBikeProgressBar';
import { SlArrowDown } from 'react-icons/sl';
import bike from '../../assets/images/bike2.png';
import ReplaceButton from '../../components/ReplaceButton';

const MyBike = () => {
    return (
        <Box bg='third'>
            <Grid alignItems={'flex-start'} templateColumns='repeat(2, 1fr)' gap={4} h='57vh' pl={3} >
                <GridItem w='100%' h={'100px'} ><Stack spacing={4} color={'secondary'}>
                    {' '}
                    <Box mt={"100px"}>
                        <Text fontWeight='' fontSize={''} >Bike Brand</Text>
                        <Text textStyle='h3'>Cannonadale</Text>
                    </Box>
                    <Box>
                        <Text fontWeight=''>Bike Model</Text>
                        <Text textStyle='h3'>Quest</Text>
                    </Box>
                    <Box>
                        <Text fontWeight=''>Serial Number</Text>
                        <Text textStyle='h3'>CND765678</Text>
                    </Box>
                    <Box>
                        <Text fontWeight=''>Start Date</Text>
                        <Text textStyle='h3'>07 Aug 2020</Text>
                    </Box>
                </Stack></GridItem>
                <GridItem w='250px' mr={'30px'} right='30px' ml={3} >
                    <img src={bike} alt="" />
                    {/* <Image src={bike} boxSize='400px' /> */}
                </GridItem>

            </Grid>

            <Stack bg={'secondary'} h='43vh' rounded={'30'} p={6}>
                <Flex mt={'30px'}>
                    <Text color={'accent'} mr={2} textStyle={'h3'}>
                        My bike's health{' '}
                    </Text>
                    <FcLike size={27} />
                </Flex>

                <MyBikeProgressBar />
                <Text color={'accent'} my={4}>
                    {' '}
                    You need to replace  5 components in your bicycle
                    {/* <ChakraLink as={ReactRouterLink} to='/home'>
                        5 components
                    </ChakraLink> */}

                </Text>
                <Center mt={"-10px"}>
                    <ReplaceButton
                        loadingText='Submitting'
                        size='lg'
                        bg='accent'
                        w='200px'
                        color='secondary'
                        text='Replace Now'
                    />
                </Center>
            </Stack>
        </Box >
    );
};

export default MyBike;
