import { Box, Button, Center, Flex, Heading, Stack, Text, Textarea } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import InputField from '../../components/InputField';
import React from 'react';
interface Slots {
    id: any;
    day: string;
    time: string;
    chosen: boolean;
}
const SetUpExpertCall = () => {
    const [slots, setSlots] = useState<Slots[]>([]);
    let [value, setValue] = React.useState('')

    let handleInputChange = (e: { target: { value: any; }; }) => {
        let inputValue = e.target.value
        setValue(inputValue)
    }
    const handleChange = () => { };
    const deliverySlots = [
        {
            id: 1,
            day: 'Thurs 03 Aug',
            time: '17:00 - 18:00',
            chosen: false,
        },
        {
            id: 2,
            day: 'Thurs 03 Aug',
            time: '19:00 - 20:00',
            chosen: false,
        },
        {
            id: 3,
            day: 'Fri 04 Aug',
            time: '19:00 - 20:00',
            chosen: false,
        },
        {
            id: 4,
            day: 'Fri 04 Aug',
            time: '19:00 - 20:00',
            chosen: false,
        },
    ];
    useEffect(() => {
        setSlots(deliverySlots);
    }, []);
    const handleSlotClick = (slot: Slots) => {

        setSlots((prevSlots) =>
            prevSlots.map((s) => ({
                ...s,
                chosen: s.id === slot.id ? true : false
            }))
        );
    };
    console.log(slots);
    return (
        <Box px={4}>
            <Stack spacing={6} mt={20}>
                <Heading color={'accent'} fontSize={'lg'}>
                    Set up Expert call
                </Heading>
                <Text
                    p={2}
                    color={'accent'}
                    fontSize={''}
                    fontWeight={'semibold'}
                    opacity={'60%'}
                    border={'2px solid'}
                    borderRadius={'10px'}
                    borderColor={'accent'}
                >
                    {/*  //dynamically name will be set here */}
                    Maximilian Hashcke
                </Text>
                <Text
                    p={2}
                    color={'accent'}
                    fontSize={''}
                    fontWeight={'semibold'}
                    opacity={'60%'}
                    border={'2px solid'}
                    borderRadius={'10px'}
                    borderColor={'accent'}
                >
                    {/*  //dynamically email will be set here */}
                    maximilian@gmail.com
                </Text>


                <Textarea
                    value={value}
                    onChange={handleInputChange}
                    placeholder='Notes for expert'
                    size='sm'
                    color={'accent'}
                    fontSize={'16px'}
                    fontWeight={'semibold'}
                    opacity={'60%'}
                    border={'2px solid'}
                    borderRadius={'10px'}
                    borderColor={'accent'}
                    _hover={{ borderColor: 'accent' }}
                    _focus={{ borderColor: 'accent' }}
                    _placeholder={{ color: 'accent' }}
                />

            </Stack>
            <Text my={5} color={'accent'} fontSize={'lg'} fontWeight={'bold'}>
                Choose a time for expert call
            </Text>
            <Center ml={0}>
                <Flex flexWrap='wrap' gap={4}>
                    {slots.map((slot, index) => (
                        <Box
                            onClick={() => handleSlotClick(slot)}
                            bg={slot.chosen ? 'accent' : 'secondary'}
                            key={index}
                            p={6}
                            color={slot.chosen ? 'secondary' : 'accent'}
                            border={'1px solid '}
                            borderColor={'accent'}
                            borderRadius={'10px'}
                        >
                            <Text>{slot.day}</Text>
                            <Text fontWeight={'bold'} fontSize={'xl'}>
                                {slot.time}
                            </Text>
                        </Box>
                    ))}
                </Flex>
            </Center>
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
                    Book Call
                </Button>
            </Center>
        </Box>
    );
};

export default SetUpExpertCall;
