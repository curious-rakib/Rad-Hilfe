import {
    Box,
    Button,
    Center,
    Flex,
    Heading,
    Stack,
    Text,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import InputField from '../../components/InputField';
interface Slots {
    id: any;
    day: string;
    time: string;
    chosen: boolean;
}
const DelivaryDetails = () => {
    const [slots, setSlots] = useState<Slots[]>([]);
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
                chosen: s.id === slot.id ? true : false,
            }))
        );
    };
    console.log(slots);
    return (
        <Box p={4} mt={'-10'}>
            <Stack spacing={6} mt={20}>
                <Heading color={'accent'} fontSize={'lg'}>
                    Delivery Details
                </Heading>
                <Text
                    p={2}
                    color={'accent'}
                    fontSize={''}
                    fontWeight={'semibold'}
                    opacity={'80%'}
                    border={'2px solid'}
                    borderRadius={'10px'}
                    borderColor={'accent'}
                >
                    {/*  //dynamically name will be set here */}
                    Maximilian Hashcke
                </Text>
                <InputField
                    id='deliveryaddress'
                    isRequired={true}
                    type='text'
                    placeholder='Delivery address'
                    onChange={handleChange}
                    name='deliveryaddress'
                    borderColor='accent'
                    _placeholder={{ color: 'accent', opacity: '60%' }}
                />{' '}
                <InputField
                    id='contactnumber'
                    isRequired={true}
                    type='text'
                    placeholder='Contact number'
                    onChange={handleChange}
                    name='contactnumber'
                    borderColor='accent'
                    _placeholder={{ color: 'accent', opacity: '60%' }}
                />{' '}
                <InputField
                    id='note'
                    isRequired={true}
                    type='text'
                    placeholder='Note for delivery driver'
                    onChange={handleChange}
                    name='note'
                    borderColor='accent'
                    _placeholder={{ color: 'accent', opacity: '60%' }}
                />
            </Stack>
            <Text my={5} color={'accent'} fontSize={'lg'} fontWeight={'bold'}>
                Choose your delivery slot
            </Text>
            <Center>
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
                    mt={'20px'}
                    borderRadius={16}
                    fontWeight={'bold'}
                >
                    Buy now | €50
                </Button>
            </Center>
        </Box>
    );
};

export default DelivaryDetails;