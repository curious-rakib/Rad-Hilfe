import React from 'react';
import { Box, Button, Card, CardBody, CardFooter, CardHeader, Center, Grid, Text, GridItem, Heading, Image, Flex } from '@chakra-ui/react';
import rotateBike from '../../assets/rotateBike.svg';
import Cards from '../../components/Cards';
import SubmitButton from '../../components/Button';

const CarePlan = () => {
    return (
        <Box bg='third'>

            <Image src={rotateBike} boxSize='420px' />
            <Grid


                templateRows='repeat(6, 1fr)'
                templateColumns='repeat(6, 1fr)'
                gap={4}
                px={4}
                color={''}
            >
                <GridItem colSpan={6} >
                    <Card color={'third'} bg={'secondary'} borderRadius={20}>
                        <Flex
                            justifyContent={'space-between'}
                            alignItems={'center'}

                        >
                            <CardHeader>
                                <Heading size='md'> Basic Plan</Heading>

                                <Text mt={2}>Free</Text>
                            </CardHeader>
                            <Text fontWeight={'bold'} fontSize={'35px'} mr={5} >€0</Text>
                        </Flex>

                    </Card>

                </GridItem>
                <GridItem colSpan={3} rowSpan={2} mt={"2px"}>
                    <Card bg={'accent'} borderRadius={20}>
                        <CardHeader>
                            <Heading fontSize='md' fontWeight={'bold'}> Qover Care Plan</Heading>
                            <Center>
                                <span style={{ paddingTop: "7px" }}></span>
                            </Center>
                        </CardHeader>
                        <CardBody>
                            <Center >
                                <Text mt={'-4'}>
                                    <span style={{ fontWeight: 'bold', fontSize: '2rem' }}>€8</span> / month
                                </Text>


                            </Center>
                            <Text mt={4}>
                                <span style={{ fontWeight: 'bold', fontSize: '0.9rem' }}>€96</span> billed annually
                            </Text>
                        </CardBody>

                    </Card>

                </GridItem>
                <GridItem colSpan={3} rowSpan={2} mt={"2px"} >
                    <Card bg={'fourth'} borderRadius={20}>
                        <CardHeader>
                            <Heading size='s'>Slipstream Care</Heading>

                            <span style={{ fontSize: '12px' }} >MOST POPULAR</span>

                        </CardHeader>

                        <CardBody>
                            <Center >
                                <Text mt={'-8'}>
                                    <span style={{ fontWeight: 'bold', fontSize: '2rem' }}>€30</span> / month
                                </Text>


                            </Center>
                            <Text mt={2} mb={1}>
                                <span style={{ fontWeight: 'bold', fontSize: '0.9rem' }}>€360</span> billed annually
                            </Text>
                        </CardBody>

                    </Card>
                </GridItem>

            </Grid>


            <Center>
                <Button
                    loadingText='Submitting'
                    size='lg'
                    bg='accent'
                    w='200px'
                    color='secondary'
                    mt="-620px"
                    borderRadius={16}
                    fontWeight={'bold'}
                >
                    Get Plan
                </Button>
            </Center>

            {/*      //can I use submit button here ? */}
            {/* <Center bg='third' mt="-450px" h='20vh'>
                <SubmitButton
                    loadingText='Submitting'
                    size='lg'
                    bg='accent'
                    w='200px'
                    color='secondary'
                    text='Get Plan'
                />
            </Center> */}
        </Box>
    );
};

export default CarePlan;