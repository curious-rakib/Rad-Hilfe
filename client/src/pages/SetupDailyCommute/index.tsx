import { Box, Center, Container, HStack, Progress, Stack, Switch, VStack } from '@chakra-ui/react';
import Days from '../../components/Days';
import SetSlider from '../../components/Slider';
import SetSwitch from '../../components/Switch';
import { Text } from '@chakra-ui/react';
import ProgressBar from '../../components/ProgressBar';
import SubmitButton from '../../components/Button';
import { Link as ReactRouterLink } from 'react-router-dom';
import { Link as ChakraLink, LinkProps } from '@chakra-ui/react';
import { commuteDays } from '../../features/cyclist/commuteDetails-slice';
import { useAppSelector } from '../../app/hooks';
import { useEffect, useState } from 'react';

const SetupDailyCommute = () => {
  const [switchChecked, setSwitchChecked] = useState<boolean>(false);

  const { days, unpavedRoad, totalDistance } = useAppSelector((state) => state.commute);
  const handleClick = async () => {
    const dailyCommute = { days, unpavedRoad, totalDistance };
    localStorage.setItem('dailyCommute', JSON.stringify(dailyCommute));
  };

  return (
    <Container p={6}>
      <Center mt={'2rem'} mb={'3rem'}>
        <ProgressBar color={'accent'} pagenumber={3}></ProgressBar>
      </Center>
      <Box mb={10}>
        <Text color={'accent'} textAlign={'left'} fontSize={'xl'} fontWeight={'semibold'}>
          Frequency of daily commute
        </Text>
        <Text color={'accent'} opacity={'60%'}>
          Select which days you ride your bike to work
        </Text>
      </Box>

      <Center my={10}>
        <Days colorScheme='accent' reducer={commuteDays}></Days>
      </Center>
      <Text color={'accent'} textAlign={'left'} fontSize={'xl'} fontWeight={'semibold'}>
        Unpaved surface in your commute
      </Text>
      <Text color={'accent'} opacity={'60%'}>
        Your best guess works
      </Text>
      <SetSlider></SetSlider>
      <Text color={'accent'} textAlign={'left'} fontSize={'xl'} fontWeight={'semibold'} mt={20}>
        Do you use your bike recreationally
      </Text>

      <HStack my={5}>
        <Text color={'accent'}>No</Text>
        <SetSwitch color='teal' setFullrevision={setSwitchChecked}></SetSwitch>

        <Text color={'accent'}>Yes</Text>
      </HStack>

      <ChakraLink as={ReactRouterLink} to={switchChecked ? '/setup-recreation-details' : '/home'}>
        <Center my={16}>
          <SubmitButton
            onClick={handleClick}
            loadingText='Submitting'
            size='lg'
            bg='accent'
            w='200px'
            color='secondary'
            text='Next'
          />
        </Center>
      </ChakraLink>
    </Container>
  );
};

export default SetupDailyCommute;
