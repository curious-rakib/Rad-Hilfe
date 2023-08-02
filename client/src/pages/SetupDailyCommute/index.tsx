import { Box, Container, HStack, Progress, Stack, VStack } from '@chakra-ui/react';
import Days from '../../components/Days';
import SetSlider from '../../components/Slider';
import SetSwitch from '../../components/Switch';
import { Text } from '@chakra-ui/react';

const SetupDailyCommute = () => {
    return (
        <Container>

            <Box mb={10}>
                <Text
                    color={'accent'}
                    textAlign={'left'}
                    fontSize={'2xl'}
                    fontWeight={'semibold'}
                    mt={20}
                >
                    Frequency of daily commute
                </Text>
                <Text color={'accent'} opacity={'60%'}>Select which days you ride your bike to work</Text>
            </Box>

            <Box my={10}>
                <Days colorScheme='accent'></Days>
            </Box>
            <Text color={'accent'}>Unpaved surface in your commute</Text>
            <Text color={'accent'} opacity={'60%'}>Your best guess works</Text>
            <SetSlider></SetSlider>
            <Text color={'accent'} mt={20}>Do you use your bike recreationally</Text>

            <HStack my={5}>
                <Text color={'accent'}>Yes</Text>
                <SetSwitch></SetSwitch>
                <Text color={'accent'}>No</Text>
            </HStack>
        </Container>
    );
};

export default SetupDailyCommute;
