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
import { months, numberToMonths } from '../../data/months';
import years from '../../data/years';

function SetupBikeDetails() {
  const dispatch = useAppDispatch();
  const [fullRevision, setFullrevision] = useState<boolean>(false);
  const [selectedBrand, setSelectedBrand] = useState<string>('');
  const [selectedPurchaseMonth, setSelectedPurchaseMonth] = useState<string>('');
  const [selectedRevisionMonth, setSelectedRevisionMonth] = useState<string>('');
  const [selectedPurchaseYear, setSelectedPurchaseYear] = useState(2022);
  const [selectedRevisionYear, setSelectedRevisionYear] = useState(2022);

  console.log(selectedPurchaseYear, selectedRevisionYear);


  const handleChange = (event: any) => {

    let { name, value, type } = event.target;


    // if (selectedPurchaseMonth) {
    const purchaseMonthIndex = (months.indexOf(selectedPurchaseMonth) + 1);

    //   console.log('from handleChange purchaseMonthIndex', purchaseMonthIndex);

    // }

    // if (selectedRevisionMonth) {
    // const monthValue = value as keyof typeof numberToMonths;
    // value = numberToMonths[monthValue];
    const revisionMonthIndex = (months.indexOf(selectedRevisionMonth) + 1)
    //   console.log('from handle revision', revisionMonthIndex);
    // }
    const dataObj = {
      [name]: type === 'number' ? Number(value) : value,
      brand: selectedBrand,
      purchaseMonth: purchaseMonthIndex,
      revisionMonth: revisionMonthIndex,
      isRevised: fullRevision,
      // purchaseYear: selectedPurchaseYear,
      // revisionYear: selectedRevisionYear

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

        <Select
          borderRadius={'.75rem'}
          borderColor='third'
          name='purchaseMonth'
          placeholder='Purchase Month'
          style={{ backgroundColor: '#001F3F' }}
          color={'third'}
          onChange={(event) => setSelectedPurchaseMonth(event.target.value)}
          value={selectedPurchaseMonth}
        >
          {months.map((month, index) => (
            <option key={index} value={month} style={{ backgroundColor: '#001F3F' }}>
              {month}
            </option>
          ))}
        </Select>





        {/* <InputField
          id='purchasemonth'
          isRequired={true}
          type='text'
          placeholder='Purchase Month (e.g: Jan)'
          onChange={handleChange}
          name='purchaseMonth'
          borderColor='third'
          _placeholder={{ color: 'third', opacity: '100%' }}
          color={'third'} borderRadius={''} /> */}
        {/* <InputField
          id='purchaseYear'
          isRequired={true}
          type='number'
          placeholder='Purchase Year'
          onChange={handleChange}
          name='purchaseYear'
          borderColor='third'
          _placeholder={{ color: 'third', opacity: '100%' }}
          color={'third'} borderRadius={''} /> */}

        <Select
          borderRadius={'.75rem'}
          borderColor='third'
          name='purchaseYear'
          placeholder='Purchase Year'
          style={{ backgroundColor: '#001F3F' }}
          color={'third'}
          onChange={(event) => setSelectedPurchaseYear(Number(event.target.value))}
          value={selectedPurchaseYear}
        >
          {years.map((year, index) => (
            <option key={index} value={year} style={{ backgroundColor: '#001F3F' }}>
              {year}
            </option>
          ))}
        </Select>
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
        <Select
          borderRadius={'.75rem'}
          borderColor='third'
          name='revisionMonth'
          placeholder='Revision Month'
          style={{ backgroundColor: '#001F3F' }}
          color={'third'}
          onChange={(event) => setSelectedRevisionMonth(event.target.value)}
          value={selectedRevisionMonth}
        >
          {months.map((month, index) => (
            <option key={index} value={month} style={{ backgroundColor: '#001F3F' }}>
              {month}
            </option>
          ))}
        </Select>
        {/* <InputField
          id='revisionyear'
          isRequired={true}
          type='number'
          placeholder='Revision Year'
          onChange={handleChange}
          name='revisionYear'
          borderColor='third'
          _placeholder={{ color: 'third', opacity: '100%' }}
          color={'third'} borderRadius={''} /> */}



        <Select
          borderRadius={'.75rem'}
          borderColor='third'
          placeholder='Revision Year'
          name='revisionYear'
          style={{ backgroundColor: '#001F3F' }}
          color={'third'}
          onChange={(event) => setSelectedRevisionYear(Number(event.target.value))}
          value={selectedRevisionYear}
        >
          {years.map((year, index) => (
            <option key={index} value={year} style={{ backgroundColor: '#001F3F' }}>
              {year}
            </option>
          ))}
        </Select>















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
