import React from 'react'
import HealthRadialChart from '../../components/HealthRadialChart';
import HealthBarAccordion from '../../components/HealthBarAccordion';
import SubmitButton from '../../components/Button';
import { Flex } from '@chakra-ui/react';
import Navbar from '../../components/Navbar';
function HealthBar() {
    return (
        <>

            <HealthRadialChart />
            <HealthBarAccordion />
            <Flex pt={'15vh'} justifyContent={'center'}>
                <SubmitButton
                    loadingText='Replace'
                    size='lg'
                    bg='accent'
                    w='200px'
                    color='secondary'
                    text='Next' />
            </Flex >
        </>
    )
}

export default HealthBar