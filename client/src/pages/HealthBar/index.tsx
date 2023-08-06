import HealthRadialChart from '../../components/HealthRadialChart';
import HealthBarAccordion from '../../components/HealthBarAccordion';
import SubmitButton from '../../components/Button';
import { Flex } from '@chakra-ui/react';

function HealthBar() {
    return (
        <>

            <HealthRadialChart />
            <HealthBarAccordion />
            <Flex pt={'5vh'} justifyContent={'center'} fontWeight={'20px'} >
                <SubmitButton
                    loadingText='Replace'
                    size='lg'
                    bg='accent'
                    w='200px'
                    color='secondary'
                    text='Replace now' />
            </Flex >
        </>
    )
}

export default HealthBar