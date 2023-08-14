import {
    AccordionIcon,
    Circle,
    Flex,
    Box,
    SimpleGrid,
    Text,
    Button,
    Grid,
    GridItem,
    Center,
} from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom'
import { Link as ChakraLink, LinkProps } from '@chakra-ui/react'
import { color } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { HiPlusSm, HiOutlineMinusSm } from 'react-icons/hi';
import { FiMinus } from 'react-icons/fi';
import { useAppSelector } from '../../app/hooks';
import { bicycleDamagedPart } from '../../services/bikeDetails';
import { useDispatch } from 'react-redux';
import { totalPrice } from '../../features/cyclist/order-slice';
interface Parts {
    partsName: string,
    price: number,
    qty: number
}

const Cart = () => {
    const initialState: Parts[] = [{
        partsName: '',
        price: 0,
        qty: 1
    }]

    const [parts, setParts] = useState<Parts[]>(initialState)



    // const parts = [
    //     {
    //         partsName: 'Body Frame',
    //         price: 300,
    //         color: 'third',
    //     },
    //     {
    //         partsName: 'Brakes',
    //         price: 50,
    //         color: 'fourth',
    //     },
    //     {
    //         partsName: 'Wheel',
    //         price: 100,
    //         color: '#3B82F6',
    //     },
    //     {
    //         partsName: 'Chain ring',
    //         price: 20,
    //         color: 'green',
    //     },
    // ];
    useEffect(() => {
        const fetchData = async () => {
            try {
                const bikeId = localStorage.getItem('bikeID');
                console.log(bikeId);
                const damagedPartsBiCycle = await bicycleDamagedPart(bikeId);
                console.log('damagedPartsBiCycle from cart page', damagedPartsBiCycle);
                const dataObj = damagedPartsBiCycle[0].bicycleParts.map((eachBicycle: any) => ({
                    partsName: eachBicycle.name,
                    price: eachBicycle.price,
                    qty: 1
                }))
                const sortedData = dataObj.sort((p1: Parts, p2: Parts) => (p1.partsName.length - p2.partsName.length))
                console.log('sorted', sortedData);
                setParts(((prev) => [...sortedData]))



            } catch (error) {
                console.log('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const handleIncrement = (part: Parts) => {
        const updated = parts.map((p) =>
            (p.partsName === part.partsName && p.qty <= 0) ? { ...p, qty: p.qty + 1 } : p
        );
        setParts(updated);
    };

    const handleDecrement = (part: Parts) => {
        const updated = parts.map((p) =>
            p.partsName === part.partsName && p.qty === 1 ? { ...p, qty: p.qty - 1 } : p
        );
        setParts(updated);
    };

    useEffect(() => {
        // console.log("useffect parts", parts);
    }, [parts])

    const calculateTotalPrice = () => {
        let totalPrice = 0;

        for (let i = 0; i < parts.length; i++) {
            totalPrice += parts[i].qty * parts[i].price;
        }
        return totalPrice + 100;
    };

    const dispatch = useDispatch();
    const handleClick = () => {

        dispatch(totalPrice(calculateTotalPrice()))
    }

    return (
        <Box p={8} >
            <Text color={'accent'} fontWeight={'bold'} fontSize={'18px'}>
                Cart
            </Text>
            <Text color={'third'} my={8} fontSize={'14px'}>
                Active plan: Qover Care
            </Text>
            <Box h={'45vh'} overflowY="auto">
                {parts.map((p, index) => (
                    <div key={index}>
                        <Grid templateColumns='repeat(3,1fr)' gap={4} my={5}


                        >
                            <GridItem h='10'>
                                <Flex color='third'>
                                    <Circle
                                        sx={{
                                            borderRadius: '12px',
                                            width: '28px',
                                            height: '22px',
                                        }}
                                        bg={'pink.300'}
                                        size={'25px'}
                                        mr={'8px'}
                                    >

                                    </Circle>
                                    <Text w={'13vw'} style={{ whiteSpace: 'nowrap' }}>
                                        {p.partsName.length > 7 ? `${p.partsName.slice(0, 7)}..` : p.partsName}
                                    </Text>
                                </Flex>
                            </GridItem>
                            <GridItem h='10' ml={14}>
                                <Flex flex='0 0 80px' color={'third'}>
                                    <Button
                                        size={'xs'}
                                        p='0.01rem'
                                        borderRadius='6px'
                                        backgroundColor='#EEF1F4'
                                        color={'secondary'}
                                        onClick={() => handleIncrement(p)}
                                    >
                                        <HiPlusSm size={20}></HiPlusSm>
                                    </Button>
                                    <Text mx={3} fontWeight={'bold'}>
                                        {p.qty}
                                        {/* {newpart[index].qty} */}
                                    </Text>
                                    <Button
                                        size={'xs'}
                                        p='0.01rem'
                                        borderRadius='6px'
                                        backgroundColor='#EEF1F4'
                                        color={'secondary'}
                                        onClick={() => handleDecrement(p)}
                                    >
                                        <FiMinus size={20}></FiMinus>
                                    </Button>
                                </Flex>
                            </GridItem>
                            <GridItem h='10' color={'white'} ml={10}>
                                <Text> €{p.qty * p.price}</Text>
                            </GridItem>
                        </Grid>
                        <hr />
                    </div>
                ))}

                <Grid templateColumns='repeat(5, 1fr)' mt={7} mb={2} gap={4}>
                    <GridItem colSpan={3} h='10'>
                        <Flex color={'third'}>
                            <Circle
                                sx={{
                                    borderRadius: '12px',
                                    width: '28px',
                                    height: '22px',
                                }}
                                bg='#C017AF'
                                size={'25px'}
                                mr={'8px'}
                            >
                                {' '}
                            </Circle>
                            <Text>Expert fee (1 hour)</Text>
                        </Flex>
                    </GridItem>
                    <GridItem colEnd={6} h='10' color={'white'}>
                        <Text ml={2}>€100</Text>
                    </GridItem>
                </Grid>
            </Box>
            <hr />
            <ChakraLink as={ReactRouterLink} to='/delivery-details'>
                <Center>
                    <Button
                        onClick={handleClick}
                        loadingText='Submitting'
                        size='lg'
                        bg='accent'
                        w='200px'
                        color='secondary'
                        mt={'120px'}
                        borderRadius={12}
                        fontWeight={'bold'}
                    >
                        Buy now | €{calculateTotalPrice()}
                    </Button>
                </Center>
            </ChakraLink>


        </Box>
    );
};

export default Cart;
