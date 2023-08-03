import {
    Box,
    Center,
    Container,
    HStack,
    Progress,
    Stack,
    VStack,
} from '@chakra-ui/react';
import Days from '../../components/Days';
import SetSlider from '../../components/Slider';
import SetSwitch from '../../components/Switch';
import { Text } from '@chakra-ui/react';
import ProgressBar from '../../components/ProgressBar';
import SubmitButton from '../../components/Button';

const SetupDailyCommute = () => {
    return (
        <Container>
            <Center my={20}>
                <ProgressBar color={'accent'}></ProgressBar>
            </Center>
            <Box mb={10}>
                <Text
                    color={'accent'}
                    textAlign={'left'}
                    fontSize={'xl'}
                    fontWeight={'semibold'}
                >
                    Frequency of daily commute
                </Text>
                <Text color={'accent'} opacity={'60%'}>
                    Select which days you ride your bike to work
                </Text>
            </Box>

            <Box my={10}>
                <Days colorScheme='accent'></Days>
            </Box>
            <Text color={'accent'}
                textAlign={'left'}
                fontSize={'xl'}
                fontWeight={'semibold'}>Unpaved surface in your commute</Text>
            <Text color={'accent'} opacity={'60%'}>
                Your best guess works
            </Text>
            <SetSlider></SetSlider>
            <Text color={'accent'}
                textAlign={'left'}
                fontSize={'xl'}
                fontWeight={'semibold'} mt={20}>
                Do you use your bike recreationally
            </Text>

            <HStack my={5}>
                <Text color={'accent'}>No</Text>
                <SetSwitch></SetSwitch>
                <Text color={'accent'}>Yes</Text>
            </HStack>
            <Center my={16}>
                <SubmitButton
                    loadingText='Submitting'
                    size='lg'
                    bg='accent'
                    w='200px'
                    color='secondary'
                    text='Next'

                />
            </Center>
        </Container>
    );
};

export default SetupDailyCommute;
