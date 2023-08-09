import React from 'react'
import { Stack, HStack, VStack, Box, Heading, Text, Center, Select } from '@chakra-ui/react'
import Progress from '../../components/ProgressBar'
import InputField from '../../components/InputField'
import Switch from '../../components/Switch'
import SubmitButton from '../../components/Button'
import SetSwitch from '../../components/Switch'
import { Link as ReactRouterLink } from 'react-router-dom'
import { Link as ChakraLink, LinkProps } from '@chakra-ui/react'
function SetupBikeDetails() {
    const handleChange = (event: any) => {
        const { name, value } = event.target;

        const dataObj = { [name]: value }
        console.log(dataObj);

    }
    const handleClick = () => {

    }
    return (
        <VStack

            spacing={6}
            align='stretch'
            p={10}
        >
            <Progress color={'third'} pagenumber={2} />
            <Heading
                mt={16}
                color={'third'}
                fontSize={'xl'}>
                Details of your Bike
            </Heading>
            <Select placeholder='Bike Brand' style={{ backgroundColor: '#001F3F' }} color={'third'}  >
                <option value='option1' style={{ backgroundColor: '#001F3F' }}>Option 1</option>

            </Select>
            <InputField
                id='bikemodel'
                isRequired={true}
                type='text'
                placeholder='Bike Model'
                onChange={handleChange}
                name='bikemodel'
                borderColor='third' _placeholder={{ color: 'third', opacity: '100%' }} color={'third'} />
            <InputField
                id='serialnum'
                isRequired={true}
                type='number'
                placeholder='Serial Number'
                onChange={handleChange}
                name='serialnum'
                borderColor='third'
                _placeholder={{ color: 'third', opacity: '100%' }} color={'third'} />
            <HStack>
                <InputField
                    id='purchasemonth'
                    isRequired={true}
                    type='text'
                    placeholder='Purchase Month'
                    onChange={handleChange}
                    name='purchasemonth'
                    borderColor='third' _placeholder={{ color: 'third', opacity: '100%' }} color={'third'}
                />
                <InputField
                    id='purchaseyear'
                    isRequired={true}
                    type='number'
                    placeholder='purchase Year'
                    onChange={handleChange}
                    name='purchaseyear'
                    borderColor='third' _placeholder={{ color: 'third', opacity: '100%' }} color={'third'}
                />
            </HStack>

            <Text color={'third'}>Did your bike have a full revision</Text>
            <HStack>
                <Text color={'third'}>No</Text>
                <SetSwitch></SetSwitch>
                <Text color={'third'}>Yes</Text>
            </HStack>
            <HStack>
                <InputField
                    id='revisionmonth'
                    isRequired={true}
                    type='text'
                    placeholder='Revision Month'
                    onChange={handleChange}
                    name='revisionmonth'
                    borderColor='third' _placeholder={{ color: 'third', opacity: '100%' }} color={'third'}
                />
                <InputField
                    id='revisionyear'
                    isRequired={true}
                    type='number'
                    placeholder='Revision Year'
                    onChange={handleChange}
                    name='revisionyear'
                    borderColor='third' _placeholder={{ color: 'third', opacity: '100%' }} color={'third'}
                />
            </HStack>
            <Text color={'third'} opacity={'60%'}>Your best guesss works</Text>


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
    )
}

export default SetupBikeDetails