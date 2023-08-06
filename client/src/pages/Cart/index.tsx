import { AccordionIcon, Circle, Flex, Box, SimpleGrid, Text, Button, Grid, GridItem, Center } from '@chakra-ui/react';
import { color } from 'framer-motion';
import React from 'react';
import { HiPlusSm, HiOutlineMinusSm } from 'react-icons/hi'
import { FiMinus } from 'react-icons/fi'

const Cart = () => {
    const parts = [
        {
            partsName: 'Body Frame',
            price: '€300',
            color: 'third'
        },
        {
            partsName: 'Brakes',
            price: '€50',
            color: 'fourth'
        },
        {
            partsName: 'Wheel',
            price: '€100',
            color: '#3B82F6'
        },
        {
            partsName: 'Chain ring',
            price: '€0',
            color: 'green'
        },

    ]
    return (
        <Box p={8}>
            <Text color={'accent'} fontWeight={'bold'} fontSize={'18px'}>Cart</Text>
            <Text color={'third'} my={8} fontSize={'14px'}>Active plan: Qover Care</Text>
            {
                parts.map((p) => (
                    <>


                        <Grid templateColumns='repeat(3, 1fr)' gap={4} my={5}>
                            <GridItem w='200%' h='10'  >
                                <Flex color='third' >
                                    <Circle
                                        sx={
                                            {
                                                borderRadius: "12px",
                                                width: "28px",
                                                height: "22px"
                                            }
                                        }

                                        bg={p.color} size={'25px'} mr={'8px'}>{" "}  </Circle>
                                    <Text>{p.partsName}</Text>
                                </Flex>
                            </GridItem>
                            <GridItem w='100%' h='10' ml={14} >
                                <Flex flex="0 0 80px" color={'third'} >
                                    <Button size={'xs'} p="0.01rem" borderRadius="6px" backgroundColor="#EEF1F4" color={'secondary'}>
                                        <HiPlusSm size={20}
                                        ></HiPlusSm>
                                    </Button>
                                    <Text mx={3} fontWeight={'bold'}>1</Text>
                                    <Button size={'xs'} p="0.01rem"
                                        borderRadius="6px" backgroundColor="#EEF1F4" color={'secondary'}>

                                        <FiMinus size={20}
                                        ></FiMinus>
                                    </Button>
                                </Flex>
                            </GridItem>
                            <GridItem w='100%' h='10' color={'white'} ml={10}>
                                <Text>{p.price}</Text>
                            </GridItem>

                        </Grid>
                        <hr />
                    </>
                ))
            }

            <Grid templateColumns='repeat(5, 1fr)' mt={7} mb={2} gap={4}>
                <GridItem colSpan={3} h='10' >
                    <Flex color={'third'}   >
                        <Circle
                            sx={
                                {
                                    borderRadius: "12px",
                                    width: "28px",
                                    height: "22px"
                                }
                            }
                            bg="#C017AF" size={'25px'} mr={'8px'}>{" "}  </Circle>
                        <Text>Expert fee (1 hour)</Text>
                    </Flex>
                </GridItem>
                <GridItem colEnd={6} h='10' color={'white'} >
                    <Text ml={2}>€100</Text>
                </GridItem>
            </Grid>
            <hr />

            <Center>
                <Button
                    loadingText='Submitting'
                    size='lg'
                    bg='accent'
                    w='200px'
                    color='secondary'
                    mt={'40px'}
                    borderRadius={16}
                    fontWeight={'bold'}
                >
                    Buy now | €500
                </Button>
            </Center>




        </Box>
    );
};

export default Cart;