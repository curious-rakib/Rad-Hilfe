import { PhoneIcon } from "@chakra-ui/icons";
import { Box, Text, Flex, Circle, Stack, HStack, VStack } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getCaseById } from "../../services/cases";
import { months } from "../../data/months";


const IndividualCyclistCase = () => {
    const { id } = useParams();



    const [caseByIdState, setCaseByIdState] = useState<any[]>([])


    const individualPassiveCase = localStorage.getItem('passiveCase');
    const individualCase = (JSON.parse(individualPassiveCase!));
    useEffect(() => {

        const fetchData = async () => {
            // console.log('from case page', id); // Check if id is logged correctly
            try {

                console.log('from useEffect case page', id);

                const caseById = await getCaseById(id);
                console.log('Fetched case by id:', caseById); // Log the fetched data
                setCaseByIdState(caseById);
            } catch (error) {
                console.error('Error fetching case by id:', error);
            }
        };
        fetchData();
    }, [id]);

    const time = new Date(caseByIdState[0].createdTime);

    const date = time.getDate();
    const month = months[time.getMonth()];
    const year = time.getFullYear();
    return (
        <div className="">



        </div>
        // <Box color={'accent'} p={7} mt={4}>
        //     <Stack spacing={1}>
        //         <Text fontWeight={'bold'} fontSize={'xl'}>Case #{caseByIdState[0].caseNumber || 1} | {caseByIdState[0].type || 'Active'}</Text>
        //         <Flex
        //             alignItems={'center'}
        //             gap={5}
        //         >
        //             <Text>Status: {caseByIdState[0].status}</Text>
        //             <Circle size='10px' bg='#17C05B' color='#17C05B'>

        //             </Circle>
        //         </Flex>
        //         <Text>Date opened: {date} {month} {year} </Text>
        //         <Text>Technician assigned: Lars Echracht</Text>
        //     </Stack>

        //     <Box>
        //         <Text fontWeight={'semibold'} fontSize={'lg'} mt={10}>Main issues</Text>
        //         <Flex mt={2} flexWrap="wrap" color={'black'} fontWeight={'semibold'} >
        //             <Box bg="#E3DD39" my={1} mr={2} p={2} borderRadius="10px">
        //                 #Body Frame
        //             </Box>
        //             <Box bg="#E3DD39" my={1} mr={2} p={2} borderRadius="10px">
        //                 #Brakes
        //             </Box>
        //             <Box bg="#E3DD39" my={1} mr={2} p={2} borderRadius="10px">
        //                 #Wheel
        //             </Box>
        //             <Box bg="#E3DD39" my={1} mr={2} p={2} borderRadius="10px">
        //                 #Crank arm
        //             </Box>
        //         </Flex>
        //     </Box>

        //     <Box mb={8}>
        //         <Text mt={5} mb={4} fontSize={'lg'} fontWeight={'bold'}>Parts replaced</Text>
        //         <hr />
        //         <Flex color='third' my={3} >
        //             <Circle
        //                 sx={
        //                     {
        //                         borderRadius: "12px",
        //                         width: "28px",
        //                         height: "22px"
        //                     }
        //                 }

        //                 bg={'#17C05B'} size={'25px'} mr={'8px'}>{" "}  </Circle>
        //             <HStack spacing={44} >
        //                 <Text color={'white'}>Chain (x1)</Text>
        //                 <Text color={'white'}>€300</Text>
        //             </HStack>
        //         </Flex>
        //         <hr />

        //     </Box>
        //     <Stack spacing={1}>
        //         <Text fontSize={'lg'} fontWeight={'semibold'}>Intervention details</Text>
        //         <Text>First call: 07 Aug 2023 | 18:00</Text>
        //         <Text>Follow-up call: Pending</Text>
        //         <Text>Support quality: ☆☆☆☆</Text>
        //     </Stack>
        //     <Box my={5}>
        //         <Flex gap={4} rounded={'full'}>
        //             <Button bg={'third'} fontWeight={'bold'} p={6} rounded={'xl'} color={'secondary'}>Open case notes</Button>
        //             <Button bg={'third'} fontWeight={'bold'} p={6} rounded={'xl'} color={'secondary'}>Diagnostic video</Button>
        //         </Flex>
        //     </Box>
        // </Box>
    );
};

export default IndividualCyclistCase;