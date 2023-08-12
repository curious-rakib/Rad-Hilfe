import { Box, Center, Container, Stack, Text, Flex, Select } from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom';
import { Link as ChakraLink, LinkProps } from '@chakra-ui/react';
import Days from '../../components/Days';
import SubmitButton from '../../components/Button';
import ProgressBar from '../../components/ProgressBar';
import RecreationButton from '../../components/RecreationButton';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { lengthOfRideDetails } from '../../features/cyclist/recreationalCommute-slice';
import { days } from '../../features/cyclist/recreationalCommute-slice';
import { setUpBikeInfo } from '../../services/bikeDetails';

const Recreation = () => {
  const dispatch = useAppDispatch();
  const [selectedValue, setSelectedValue] = useState('');
  const handleSelectChange = (event: any) => {
    setSelectedValue(event.target.value);
  };

  const handleClick = () => {
    const [lower, upper] = selectedValue.split('-');
    const lowerNum = parseInt(lower);

    const upperNum = parseInt(upper);
    const average = (lowerNum + upperNum) / 2;
    const dataObj = { lengthOfRide: average };

    dispatch(lengthOfRideDetails(dataObj));
  };
  const { bikeDetails, dailyCommute, recreationalCommute } = useAppSelector(
    (state) => state.rootSetBikeReducer
  );
  const bikeInfo = {
    ...bikeDetails,
    dailyCommute,
    recreationalCommute,
  };

  // console.log(bikeInfo);

  useEffect(() => {
    const fetchData = async () => {
      const result = await setUpBikeInfo(bikeInfo);
      const bikeId = result._id;
      localStorage.setItem('bikeID', bikeId);
      localStorage.setItem('bikeInfo', result);
      // console.log('bikeID', bikeId);
      // console.log('result', result);
    };
    fetchData();
  }, []);
  // const { days, activityType, lengthOfRide } = useAppSelector((state) => state.recreation);
  // console.log(days, activityType, lengthOfRide);
  // useEffect(() => {
  //     const recreationalCommute = { days, activityType, lengthOfRide };
  //     localStorage.setItem('recreationalCommute', JSON.stringify(recreationalCommute))
  // }, [])

  return (
    <Container p={6}>
      <Center mt={'2rem'} mb={'3rem'}>
        <ProgressBar color={'fourth'} pagenumber={4}></ProgressBar>
      </Center>
      <Box mb={10}>
        <Text color={'fourth'} textAlign={'left'} fontSize={'xl'} fontWeight={'semibold'}>
          Frequency of recreational commute
        </Text>
        <Text color={'fourth'} opacity={'60%'}>
          Select which days you ride your bike to work
        </Text>
      </Box>

      <Center my={10}>
        <Days colorScheme='fourth' reducer={days}></Days>
      </Center>
      <Stack spacing={4}>
        <Text color={'fourth'} textAlign={'left'} fontSize={'xl'} fontWeight={'semibold'}>
          Recreational activities bike used for
        </Text>
        <Center>
          <RecreationButton></RecreationButton>
        </Center>
      </Stack>

      <Stack spacing={4}>
        <Text color={'fourth'} textAlign={'left'} fontSize={'xl'} fontWeight={'semibold'} mt={10}>
          Typical Length of Rides
        </Text>
        <Select
          onChange={handleSelectChange}
          placeholder='Select option'
          value={selectedValue}
          style={{ backgroundColor: '#001F3F' }}
          color={'fourth'}
        >
          <option value='0-5km' style={{ backgroundColor: '#001F3F' }}>
            (0-5km)
          </option>
          <option value='5-10km' style={{ backgroundColor: '#001F3F' }}>
            (5-10km)
          </option>
          <option value='10-15km' style={{ backgroundColor: '#001F3F' }}>
            (10-15km)
          </option>
        </Select>
      </Stack>

      <ChakraLink as={ReactRouterLink} to='/home'>
        <Center my={16}>
          <SubmitButton
            onClick={handleClick}
            loadingText='Submitting'
            size='lg'
            bg='fourth'
            w='200px'
            color='secondary'
            text='Submit'
          />
        </Center>
      </ChakraLink>
    </Container>
  );
};

export default Recreation;
