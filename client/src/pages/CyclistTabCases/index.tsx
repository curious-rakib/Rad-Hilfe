import { Box, Text, Stack, Divider, Flex, HStack, VStack, Grid, GridItem } from '@chakra-ui/layout';
import { Tab, TabList, TabPanel, TabPanels, Tabs, } from '@chakra-ui/tabs';
import React from 'react';

const CyclistTabCases = () => {
    return (
        <Box p={4} color={'accent'}>
            <Text color={'accent'} fontWeight={'bold'} my={8} fontSize='2xl' mx={4}>Cases</Text>
            <Tabs variant='soft-rounded' colorScheme='red' isFitted  >
                <TabList border={'1px solid'} rounded={'full'} mx={4}>
                    <Tab color={'accent'} >Resolved</Tab>
                    <Tab color={'accent'}>Ongoing</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel my={8} rounded={'2xl'}>
                        {/* <div className="Box">
                            <div className="upper">
                                <div className="upper-left">
                                    <h2>Case #2562</h2>
                                    <h6>Time to replace some parts...</h6>
                                </div>
                                <div className="upper-right">
                                    <h6>23 Aug 2022</h6>
                                    <h6>Passive check</h6>
                                </div>
                            </div>

                            <div className="lower">

                                <div className="chip"> Body Frame</div>
                                <div className="chip"> Brakes</div>
                                <div className="chip"> Wheel</div>
                                <div className="chip"> Crank arm</div>


                            </div>
                        </div> */}
                        {/*                        .Box{
    color: black;
    border-left: 7px solid black;

    
}
.upper-left h2{
    font-weight: bold;
    font-size: 20px
}
h6{
    font-size: 12px;
}
.upper{
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid black;
    padding: 0 0 5px 10px

}

.lower{
    display: flex;
    margin-top: 10px;
    padding-left: 10px;
    flex-wrap: wrap;
}
.chip{
    background: red;
    margin: 03px;
    padding: 0 12px 5px 12px;
    border-radius: 10px;
     
} */}
                        <Box bg={'accent'} p={4} rounded={'2xl'}>
                            <Box

                                color="black"
                                borderLeft="7px solid black"



                            >
                                <Flex justifyContent="space-between" borderBottom="1px solid black" pl={3}>
                                    <Box >
                                        <h2 style={{ fontWeight: "bold", fontSize: "20px" }}>Case #2562</h2>
                                        <h6 style={{ fontSize: "12px", marginBottom: "10px" }}>Time to replace some parts...</h6>
                                    </Box>
                                    <Box >
                                        <h6 style={{ fontSize: "12px" }}>23 Aug 2022</h6>
                                        <h6 style={{ fontSize: "12px" }}>Passive check</h6>
                                    </Box>
                                </Flex>

                                <Flex mt={2} flexWrap="wrap" pl={2}>
                                    <Box bg="third" m={1} p={2} borderRadius="10px">
                                        Body Frame
                                    </Box>
                                    <Box bg="#E3DD39" m={1} p={2} borderRadius="10px">
                                        Brakes
                                    </Box>
                                    <Box bg="#3B82F6" m={1} p={2} borderRadius="10px">
                                        Wheel
                                    </Box>
                                    <Box bg="#17C05B" m={1} p={2} borderRadius="10px">
                                        Crank arm
                                    </Box>
                                </Flex>
                            </Box>
                        </Box>


                        <br />
                        <Box bg={'accent'} p={4} rounded={'2xl'}>
                            <Box

                                color="black"
                                borderLeft="7px solid black"



                            >
                                <Flex justifyContent="space-between" borderBottom="1px solid black" pl={3}>
                                    <Box >
                                        <h2 style={{ fontWeight: "bold", fontSize: "20px" }}>Case #2562</h2>
                                        <h6 style={{ fontSize: "12px", marginBottom: "10px" }}>Time to replace some parts...</h6>
                                    </Box>
                                    <Box >
                                        <h6 style={{ fontSize: "12px" }}>23 Aug 2022</h6>
                                        <h6 style={{ fontSize: "12px" }}>Passive check</h6>
                                    </Box>
                                </Flex>

                                <Flex mt={2} flexWrap="wrap" pl={2}>
                                    <Box bg="third" m={1} p={2} borderRadius="10px">
                                        Body Frame
                                    </Box>
                                    <Box bg="#E3DD39" m={1} p={2} borderRadius="10px">
                                        Brakes
                                    </Box>
                                    <Box bg="#3B82F6" m={1} p={2} borderRadius="10px">
                                        Wheel
                                    </Box>
                                    <Box bg="#17C05B" m={1} p={2} borderRadius="10px">
                                        Crank arm
                                    </Box>
                                </Flex>
                            </Box>
                        </Box>







                    </TabPanel>
                    <TabPanel bg={'accent'} rounded={'2xl'} my={8}>
                        <Box

                            color="black"
                            borderLeft="7px solid black"


                        >
                            <Flex justifyContent="space-between" borderBottom="1px solid black" pl={3}>
                                <Box >
                                    <h2 style={{ fontWeight: "bold", fontSize: "20px" }}>Case #2562</h2>
                                    <h6 style={{ fontSize: "12px", marginBottom: "10px" }}>Time to replace some parts...</h6>
                                </Box>
                                <Box >
                                    <h6 style={{ fontSize: "12px" }}>23 Aug 2022</h6>
                                    <h6 style={{ fontSize: "12px" }}>Passive check</h6>
                                </Box>
                            </Flex>

                            <Flex mt={2} flexWrap="wrap" pl={3}>
                                <Box bg="third" m={1} p={2} borderRadius="10px">
                                    Body Frame
                                </Box>
                                <Box bg="#E3DD39" m={1} p={2} borderRadius="10px">
                                    Brakes
                                </Box>
                                <Box bg="#3B82F6" m={1} p={2} borderRadius="10px">
                                    Wheel
                                </Box>
                                <Box bg="#17C05B" m={1} p={2} borderRadius="10px">
                                    Crank arm
                                </Box>
                            </Flex>
                        </Box>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Box>
    );
};

export default CyclistTabCases;