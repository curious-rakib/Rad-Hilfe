import { Box, Text, Stack, Divider, Flex, HStack, VStack, Grid, GridItem } from '@chakra-ui/layout';
import { Tab, TabList, TabPanel, TabPanels, Tabs, } from '@chakra-ui/tabs';
import React, { useEffect } from 'react';
import { getAallCases } from '../../services/cases';

const CyclistTabCases = () => {
    useEffect(() => {
        const fetchData = async () => {
            const allCase = await getAallCases();
            console.log(allCase);
        }
        fetchData();
    }, [])
    return (
        <Box p={4} color={'accent'}>
            <Text color={'accent'} fontWeight={'bold'} my={8} fontSize='2xl' mx={4}>Cases</Text>
            <Tabs variant='soft-rounded' isFitted boxShadow='md'>
                <TabList border={'1px solid'} rounded={'full'} mx={4}>
                    <Tab _selected={{ bg: "#C1FAA6", color: 'secondary', boxShadow: '4px 0px 4px #C1FAA6' }} color='accent' boxShadow='md'>Resolved</Tab>
                    <Tab _selected={{ bg: "#C1FAA6", color: 'secondary', boxShadow: '4px 0px 4px #C1FAA6' }} color={'accent'}>Ongoing</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel mt={4}
                        mb={5}
                        rounded={'2xl'} >

                        <Box bg={'accent'} p={4} rounded={'2xl'}>
                            <Box

                                color="black"
                                borderLeft="7px solid #001F3F"


                            >
                                <Flex justifyContent="space-between" borderBottom="1px solid black" pl={3}>
                                    <Box >
                                        <h2 style={{ fontWeight: "bold", fontSize: "20px", color: "#001F3F" }}>Case #2562</h2>
                                        <h6 style={{ fontSize: "12px", marginBottom: "10px", color: "#001F3F" }}>Time to replace some parts...</h6>
                                    </Box>
                                    <Box >
                                        <VStack mt={1}>
                                            <h6 style={{ fontSize: "12px", paddingTop: '1px', color: "#001F3F" }}>23 Aug 2022</h6>
                                            <h6 style={{ fontSize: "12px", color: "#001F3F" }}>Passive check</h6>
                                        </VStack>
                                    </Box>
                                </Flex>

                                <Flex mt={2} flexWrap="wrap" pl={2} fontWeight={'bold'} fontSize={'sm'}>
                                    <Box bg="third" m={1} p={2} px={4} borderRadius="10px"  >
                                        Body Frame
                                    </Box>
                                    <Box bg="#E3DD39" m={1} p={2} px={4} borderRadius="10px">
                                        Brakes
                                    </Box>
                                    <Box bg="#3B82F6" m={1} p={2} px={4} borderRadius="10px">
                                        Wheel
                                    </Box>
                                    <Box bg="#17C05B" m={1} p={2} px={4} borderRadius="10px">
                                        Crank arm
                                    </Box>
                                </Flex>
                            </Box>
                        </Box>


                        <br />
                        <Box bg={'accent'} p={4} rounded={'2xl'}>
                            <Box

                                color="black"
                                borderLeft="7px solid #001F3F"


                            >
                                <Flex justifyContent="space-between" borderBottom="1px solid black" pl={3}>
                                    <Box >
                                        <h2 style={{ fontWeight: "bold", fontSize: "20px", color: "#001F3F" }}>Case #2562</h2>
                                        <h6 style={{ fontSize: "12px", marginBottom: "10px", color: "#001F3F" }}>Time to replace some parts...</h6>
                                    </Box>
                                    <Box >
                                        <VStack mt={1}>
                                            <h6 style={{ fontSize: "12px", paddingTop: '1px', color: "#001F3F" }}>23 Aug 2022</h6>
                                            <h6 style={{ fontSize: "12px", color: "#001F3F" }}>Passive check</h6>
                                        </VStack>
                                    </Box>
                                </Flex>

                                <Flex mt={2} flexWrap="wrap" pl={2} fontWeight={'bold'} fontSize={'sm'}>
                                    <Box bg="third" m={1} p={2} px={4} borderRadius="10px" >
                                        Body Frame
                                    </Box>
                                    <Box bg="#E3DD39" m={1} p={2} px={4} borderRadius="10px">
                                        Brakes
                                    </Box>
                                    <Box bg="#3B82F6" m={1} p={2} px={4} borderRadius="10px">
                                        Wheel
                                    </Box>
                                    <Box bg="#17C05B" m={1} p={2} px={4} borderRadius="10px">
                                        Crank arm
                                    </Box>
                                </Flex>
                            </Box>
                        </Box>







                    </TabPanel>
                    <TabPanel mt={4}
                        mb={5} rounded={'2xl'} >

                        <Box bg={'accent'} p={4} rounded={'2xl'}>
                            <Box

                                color="black"
                                borderLeft="7px solid #001F3F"


                            >
                                <Flex justifyContent="space-between" borderBottom="1px solid black" pl={3}>
                                    <Box >
                                        <h2 style={{ fontWeight: "bold", fontSize: "20px" }}>Case #2562</h2>
                                        <h6 style={{ fontSize: "12px", marginBottom: "10px" }}>Time to replace some parts...</h6>
                                    </Box>
                                    <Box >
                                        <VStack mt={1}>
                                            <h6 style={{ fontSize: "12px", paddingTop: '1px' }}>23 Aug 2022</h6>
                                            <h6 style={{ fontSize: "12px" }}>Passive check</h6>
                                        </VStack>
                                    </Box>
                                </Flex>

                                <Flex mt={2} flexWrap="wrap" pl={2} fontWeight={'bold'} fontSize={'sm'}>
                                    <Box bg="third" m={1} p={2} px={4} borderRadius="10px" >
                                        Body Frame
                                    </Box>
                                    <Box bg="#E3DD39" m={1} p={2} px={4} borderRadius="10px">
                                        Brakes
                                    </Box>
                                    <Box bg="#3B82F6" m={1} p={2} px={4} borderRadius="10px">
                                        Wheel
                                    </Box>
                                    <Box bg="#17C05B" m={1} p={2} px={4} borderRadius="10px">
                                        Crank arm
                                    </Box>
                                </Flex>
                            </Box>
                        </Box>


                        <br />
                        <Box bg={'accent'} p={4} rounded={'2xl'}>
                            <Box

                                color="black"
                                borderLeft="7px solid #001F3F"


                            >
                                <Flex justifyContent="space-between" borderBottom="1px solid black" pl={3}>
                                    <Box >
                                        <h2 style={{ fontWeight: "bold", fontSize: "20px" }}>Case #2562</h2>
                                        <h6 style={{ fontSize: "12px", marginBottom: "10px" }}>Time to replace some parts...</h6>
                                    </Box>
                                    <Box >
                                        <VStack mt={1}>
                                            <h6 style={{ fontSize: "12px", paddingTop: '1px' }}>23 Aug 2022</h6>
                                            <h6 style={{ fontSize: "12px" }}>Passive check</h6>
                                        </VStack>
                                    </Box>
                                </Flex>

                                <Flex mt={2} flexWrap="wrap" pl={2} fontWeight={'bold'} fontSize={'sm'}>
                                    <Box bg="third" m={1} p={2} px={4} borderRadius="10px" >
                                        Body Frame
                                    </Box>
                                    <Box bg="#E3DD39" m={1} p={2} px={4} borderRadius="10px">
                                        Brakes
                                    </Box>
                                    <Box bg="#3B82F6" m={1} p={2} px={4} borderRadius="10px">
                                        Wheel
                                    </Box>
                                    <Box bg="#17C05B" m={1} p={2} px={4} borderRadius="10px">
                                        Crank arm
                                    </Box>
                                </Flex>
                            </Box>
                        </Box>







                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Box >
    );
};

export default CyclistTabCases;