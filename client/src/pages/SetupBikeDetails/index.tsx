import React, { useState } from 'react';
import {
    Stack,
    HStack,
    VStack,
    Box,
    Heading,
    Text,
    Center,
    Select,
} from '@chakra-ui/react';
import Progress from '../../components/ProgressBar';
import InputField from '../../components/InputField';
import Switch from '../../components/Switch';
import SubmitButton from '../../components/Button';
import SetSwitch from '../../components/Switch';
import { Link as ReactRouterLink } from 'react-router-dom';
import { Link as ChakraLink, LinkProps } from '@chakra-ui/react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { bikeDetails } from '../../features/cyclist/bikeDetails-slice';
function SetupBikeDetails() {
    const [fullRevision, setFullrevision] = useState<boolean>(false);
    const dispatch = useAppDispatch();
    const handleChange = (event: any) => {

        const { name, value, type } = event.target;

        const dataObj = {
            [name]: type === "number" ? Number(value) : value
        };

        dispatch(bikeDetails(dataObj));
    };




    const {
        brand,
        model,
        serialNumber,
        purchaseMonth,
        purchaseYear,
        revisionMonth,
        revisionYear,
        isRevised,
    } = useAppSelector((state) => state.bikeDetails);

    const handleClick = async () => {
        const bikeData = {
            brand,
            model,
            serialNumber,
            purchaseMonth,
            purchaseYear,
            revisionMonth,
            revisionYear,
            isRevised,
        };

        localStorage.setItem('bikeData', JSON.stringify(bikeData));
    };

    return (
        <VStack spacing={6} align='stretch' p={10}>
            <Progress color={'third'} pagenumber={2} />
            <Heading mt={16} color={'third'} fontSize={'xl'}>
                Details of your Bike
            </Heading>
            <Select
                placeholder='Bike Brand'
                style={{ backgroundColor: '#001F3F' }}
                color={'third'}
            >
                <option value='option1' style={{ backgroundColor: '#001F3F' }}>
                    Option 1
                </option>
            </Select>
            <InputField
                id='bikemodel'
                isRequired={true}
                type='text'
                placeholder='Bike Model'
                onChange={handleChange}
                name='model'
                borderColor='third'
                _placeholder={{ color: 'third', opacity: '100%' }}
                color={'third'}
            />
            <InputField
                id='serialnum'
                isRequired={true}
                type='number'
                placeholder='Serial Number'
                onChange={handleChange}
                name='serialNumber'
                borderColor='third'
                _placeholder={{ color: 'third', opacity: '100%' }}
                color={'third'}
            />

            <HStack>
                <InputField
                    id='purchasemonth'
                    isRequired={true}
                    type='number'
                    placeholder='Purchase Month'
                    onChange={handleChange}
                    name='purchaseMonth'
                    borderColor='third'
                    _placeholder={{ color: 'third', opacity: '100%' }}
                    color={'third'}
                />
                <InputField
                    id='purchaseyear'
                    isRequired={true}
                    type='number'
                    placeholder='purchase Year'
                    onChange={handleChange}
                    name='purchaseYear'
                    borderColor='third'
                    _placeholder={{ color: 'third', opacity: '100%' }}
                    color={'third'}
                />
            </HStack>

            <Text color={'third'}>Did your bike have a full revision</Text>
            <HStack>
                <Text color={'third'}>No</Text>
                <SetSwitch setFullrevision={setFullrevision}></SetSwitch>
                <Text color={'third'}>Yes</Text>
            </HStack>
            <HStack>
                <InputField
                    id='revisionmonth'
                    isRequired={true}
                    type='number'
                    placeholder='Revision Month'
                    onChange={handleChange}
                    name='revisionMonth'
                    borderColor='third'
                    _placeholder={{ color: 'third', opacity: '100%' }}
                    color={'third'}
                />
                <InputField
                    id='revisionyear'
                    isRequired={true}
                    type='number'
                    placeholder='Revision Year'
                    onChange={handleChange}
                    name='revisionYear'
                    borderColor='third'
                    _placeholder={{ color: 'third', opacity: '100%' }}
                    color={'third'}
                />
            </HStack>
            <Text color={'third'} opacity={'60%'}>
                Your best guesss works
            </Text>

            <ChakraLink as={ReactRouterLink} to='/setup-commute-details'>
                <Center>
                    <SubmitButton
                        onClick={handleClick}
                        loadingText='Submitting'
                        size='lg'
                        bg='third'
                        w='200px'
                        color='secondary'
                        text='Next'
                    />
                </Center>
            </ChakraLink>
        </VStack>
    );
}

export default SetupBikeDetails;
