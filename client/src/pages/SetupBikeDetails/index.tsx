import React, { useState } from 'react';
import { Stack, HStack, VStack, Box, Heading, Text, Center, Select } from '@chakra-ui/react';
import Progress from '../../components/ProgressBar';
import InputField from '../../components/InputField';

import SubmitButton from '../../components/Button';
import SetSwitch from '../../components/Switch';
import { Link as ReactRouterLink } from 'react-router-dom';
import { Link as ChakraLink } from '@chakra-ui/react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { bikeDetails } from '../../features/cyclist/bikeDetails-slice';
import bikeBrandsAndModels from '../../data/bikeBrandsAndModels.json';
function SetupBikeDetails() {
  const [fullRevision, setFullrevision] = useState<boolean>(false);
  const [selectedBrand, setSelectedBrand] = useState<string>('');

  const dispatch = useAppDispatch();
  const handleChange = (event: any) => {
    const { name, value, type } = event.target;

    const dataObj = {
      [name]: type === 'number' ? Number(value) : value,
      brand: selectedBrand,
      isRevised: fullRevision,
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
    <VStack spacing={6} align='stretch' p={6}>
      <Center mt={'2rem'} mb={'2.5rem'}>
        <Progress color={'third'} pagenumber={2} />
      </Center>
      <Heading color={'third'} fontSize={'1.25rem'} fontFamily={'Inter'} fontWeight={'500'}>
        Details of your bike
      </Heading>
      <Select
        borderRadius={'.75rem'}
        borderColor='third'
        placeholder='Bike Brand'
        style={{ backgroundColor: '#001F3F' }}
        color={'third'}
        onChange={(event) => setSelectedBrand(event.target.value)}
        value={selectedBrand}
      >
        {bikeBrandsAndModels.map((brandObj, index) => (
          <option key={index} value={brandObj.brand} style={{ backgroundColor: '#001F3F' }}>
            {brandObj.brand}
          </option>
        ))}
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
        color={'third'} borderRadius={''} />

      <InputField
        id='serialnum'
        isRequired={true}
        type='number'
        placeholder='Serial Number'
        onChange={handleChange}
        name='serialNumber'
        borderColor='third'
        _placeholder={{ color: 'third', opacity: '100%' }}
        color={'third'} borderRadius={''} />

      <HStack mb={'1rem'}>
        <InputField
          id='purchasemonth'
          isRequired={true}
          type='number'
          placeholder='Purchase Month'
          onChange={handleChange}
          name='purchaseMonth'
          borderColor='third'
          _placeholder={{ color: 'third', opacity: '100%' }}
          color={'third'} borderRadius={''} />
        <InputField
          id='purchaseyear'
          isRequired={true}
          type='number'
          placeholder='Purchase Year'
          onChange={handleChange}
          name='purchaseYear'
          borderColor='third'
          _placeholder={{ color: 'third', opacity: '100%' }}
          color={'third'} borderRadius={''} />
      </HStack>

      <Text color={'third'} fontSize={'1.25rem'} fontWeight={'600'}>
        Did your bike have a full revision
      </Text>
      <HStack mt={'-1rem'}>
        <Text color={'third'}>No</Text>
        <SetSwitch setFullrevision={setFullrevision} color={'pink'}></SetSwitch>
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
          color={'third'} borderRadius={''} />
        <InputField
          id='revisionyear'
          isRequired={true}
          type='number'
          placeholder='Revision Year'
          onChange={handleChange}
          name='revisionYear'
          borderColor='third'
          _placeholder={{ color: 'third', opacity: '100%' }}
          color={'third'} borderRadius={''} />
      </HStack>
      <Text color={'third'} opacity={'60%'} mt={'-1rem'}>
        Your best guesss works
      </Text>

      <ChakraLink as={ReactRouterLink} to='/setup-commute-details' w='content-box' m={'0 auto'}>
        <SubmitButton
          borderRadius='1rem'
          onClick={handleClick}
          loadingText='Submitting'
          size='lg'
          bg='third'
          w='12.5rem'
          color='secondary'
          text='Next' fontWeight={''} />
      </ChakraLink>
    </VStack>
  );
}

export default SetupBikeDetails;
