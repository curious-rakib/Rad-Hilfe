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
  const { bikeDetails, dailyCommute, recreationalCommute } = useAppSelector(
    (state) => state.rootSetBikeReducer
  );
  const bikeInfo = {
    ...bikeDetails,
    dailyCommute,
    recreationalCommute,
  };
  const handleClick = () => {
    const [lower, upper] = selectedValue.split('-');
    const lowerNum = parseInt(lower);
    const upperNum = parseInt(upper);
    const average = (lowerNum + upperNum) / 2;
    const dataObj = { lengthOfRide: average };
    dispatch(lengthOfRideDetails(dataObj));
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await setUpBikeInfo(bikeInfo);
      // console.log('result', result);

      if (result) {
        const bikeId = result._id;
        localStorage.setItem('bikeID', bikeId);
        localStorage.setItem('bikeInfo', JSON.stringify(result));
      }

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
            Short (0 - 5 km)
          </option>
          <option value='5-25km' style={{ backgroundColor: '#001F3F' }}>
            Regular (5 - 25 km)
          </option>
          <option value='25-40km' style={{ backgroundColor: '#001F3F' }}>
            Long (25 - 50 km)
          </option>
        </Select>
      </Stack>
      <Center mt={16}>
        <ChakraLink as={ReactRouterLink} to='/home' w='content-box'>
          <SubmitButton
            onClick={handleClick}
            loadingText='Submitting'
            size='lg'
            bg='fourth'
            w='12.5rem'
            color='secondary'
            text='Submit' fontWeight={''} />
        </ChakraLink>
      </Center>
    </Container>
  );
};
export default Recreation;