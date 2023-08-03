import {
    Box,
    Center,
    Container,
    Stack,
    Text, Flex, Select
} from '@chakra-ui/react';
import Days from '../../components/Days';
import SubmitButton from '../../components/Button';
import ProgressBar from '../../components/ProgressBar';
import RecreationButton from '../../components/RecreationButton';

const Recreation = () => {

    return (
        <Container>
            <Center my={20}>
                <ProgressBar color={'fourth'}></ProgressBar>
            </Center>
            <Box mb={10}>
                <Text
                    color={'fourth'}
                    textAlign={'left'}
                    fontSize={'xl'}
                    fontWeight={'semibold'}
                >
                    Frequency of daily commute
                </Text>
                <Text color={'fourth'} opacity={'60%'}>
                    Select which days you ride your bike to work
                </Text>
            </Box>

            <Box my={10}>
                <Days colorScheme='fourth'></Days>
            </Box>
            <Stack spacing={4}>
                <Text color={'fourth'}
                    textAlign={'left'}
                    fontSize={'xl'}
                    fontWeight={'semibold'}>Recreational activities bike used for</Text>
                <RecreationButton></RecreationButton>
            </Stack>

            <Stack spacing={4}>
                <Text color={'fourth'}
                    textAlign={'left'}
                    fontSize={'xl'}
                    fontWeight={'semibold'} mt={10}>
                    Typical Length of Rides
                </Text>
                <Select placeholder='Select option' style={{ backgroundColor: '#001F3F' }} color={'fourth'}  >
                    <option value='option1' style={{ backgroundColor: '#001F3F' }}>Option 1</option>

                </Select>

            </Stack>

            <Center my={16}>
                <SubmitButton
                    loadingText='Submitting'
                    size='lg'
                    bg='fourth'
                    w='200px'
                    color='secondary'
                    text='Submit'

                />
            </Center>


        </Container>
    );
};

export default Recreation;