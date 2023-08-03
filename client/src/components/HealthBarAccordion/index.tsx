import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    Flex,
    Text,
    Circle
} from '@chakra-ui/react'

import { radialHealthData } from '../../data/radialHealthData';
import HealthBar from '../HealthBar';

function HealthBarAccordion() {
    return (
        <Flex alignItems="center" direction={'column'}>
            <Text fontSize={'15'} pt={'7'} pb={'3'} color={'accent'}>
                You need to replace 5 components in your bicycle
            </Text>
            <Accordion w="90vw" allowMultiple allowToggle>


                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Flex as="span" flex='1' textAlign='left'>
                                <Circle bg="#3B82F6" size={'25px'} mr={'5px'}>{" "}</Circle> Wheel
                            </Flex>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        <HealthBar health={34} colorScheme='green' />
                    </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Flex as="span" flex='1' textAlign='left'>
                                <Circle bg="#EDCBEF" size={'25px'} mr={'5px'}>{" "}</Circle> Bike Frame
                            </Flex>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                    </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Flex as="span" flex='1' textAlign='left'>
                                <Circle bg="#FFF71A" size={'25px'} mr={'5px'}>{" "}</Circle>  Brake
                            </Flex>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                    </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Flex as="span" flex='1' textAlign='left'>
                                <Circle bg="#52D4A5" size={'25px'} mr={'5px'}>{" "}</Circle>  Drive Mechanics
                            </Flex>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </Flex>
    )
}

export default HealthBarAccordion