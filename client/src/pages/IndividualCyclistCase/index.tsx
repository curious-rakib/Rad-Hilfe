import { PhoneIcon } from "@chakra-ui/icons";
import { Box, Text, Flex, Circle, Stack, HStack, VStack } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/react";


const IndividualCyclistCase = () => {
    const individualPassiveCase = localStorage.getItem('passiveCase');
    const individualCase = (JSON.parse(individualPassiveCase!));
    return (
        <Box color={'accent'} p={7} mt={4}>
            <Stack spacing={1}>
                <Text fontWeight={'bold'} fontSize={'xl'}>Case #2986 | {individualCase.type}</Text>
                <Flex
                    alignItems={'center'}
                    gap={5}
                >
                    <Text>Status: {individualCase.status}</Text>
                    <Circle size='10px' bg='#17C05B' color='#17C05B'>

                    </Circle>
                </Flex>
                <Text>Date opened: 04 August 2023 </Text>
                <Text>Technician assigned: Lars Echracht</Text>
            </Stack>

            <Box>
                <Text fontWeight={'semibold'} fontSize={'lg'} mt={10}>Main issues</Text>
                <Flex mt={2} flexWrap="wrap" color={'black'} fontWeight={'semibold'} >
                    <Box bg="#E3DD39" my={1} mr={2} p={2} borderRadius="10px">
                        #Body Frame
                    </Box>
                    <Box bg="#E3DD39" my={1} mr={2} p={2} borderRadius="10px">
                        #Brakes
                    </Box>
                    <Box bg="#E3DD39" my={1} mr={2} p={2} borderRadius="10px">
                        #Wheel
                    </Box>
                    <Box bg="#E3DD39" my={1} mr={2} p={2} borderRadius="10px">
                        #Crank arm
                    </Box>
                </Flex>
            </Box>

            <Box mb={8}>
                <Text mt={5} mb={4} fontSize={'lg'} fontWeight={'bold'}>Parts replaced</Text>
                <hr />
                <Flex color='third' my={3} >
                    <Circle
                        sx={
                            {
                                borderRadius: "12px",
                                width: "28px",
                                height: "22px"
                            }
                        }

                        bg={'#17C05B'} size={'25px'} mr={'8px'}>{" "}  </Circle>
                    <HStack spacing={44} >
                        <Text color={'white'}>Chain (x1)</Text>
                        <Text color={'white'}>€300</Text>
                    </HStack>
                </Flex>
                <hr />

            </Box>
            <Stack spacing={1}>
                <Text fontSize={'lg'} fontWeight={'semibold'}>Intervention details</Text>
                <Text>First call: 07 Aug 2023 | 18:00</Text>
                <Text>Follow-up call: Pending</Text>
                <Text>Support quality: ☆☆☆☆</Text>
            </Stack>
            <Box my={5}>
                <Flex gap={4} rounded={'full'}>
                    <Button bg={'third'} fontWeight={'bold'} p={6} rounded={'xl'}>Open case notes</Button>
                    <Button bg={'third'} fontWeight={'bold'} p={6} rounded={'xl'}>Diagnostic video</Button>
                </Flex>
            </Box>
        </Box>
    );
};

export default IndividualCyclistCase;