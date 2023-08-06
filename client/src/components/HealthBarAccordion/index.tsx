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

import HealthBar from '../HealthBar';
import { parts } from '../../data/partsData';
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
                                <Circle bg="blue.400" size={'25px'} mr={'5px'}>{" "}</Circle>
                                {/* <Box bg="#3B82F6" mr={'5px'}></Box>  */}
                                Wheel
                            </Flex>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        {
                            parts.map((part) => {
                                return (
                                    part.category === 'Wheel' && <HealthBar health={parseInt(part.health)} partname={part.name} />
                                );
                            })
                        }


                    </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Flex as="span" flex='1' textAlign='left'>
                                <Circle bg="#EDCBEF" size={'25px'} mr={'5px'}>{" "}</Circle> Frame
                            </Flex>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        {
                            parts.map((part) => {
                                return (
                                    part.category === 'Frame' && <HealthBar health={parseInt(part.health)} partname={part.name} />
                                );
                            })
                        }
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
                        {
                            parts.map((part) => {
                                return (
                                    part.category === 'Brake' && <HealthBar health={parseInt(part.health)} partname={part.name} />
                                );
                            })
                        }
                    </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Flex as="span" flex='1' textAlign='left'>
                                <Circle bg="#52D4A5" size={'25px'} mr={'5px'}>{" "}</Circle>  Drivetrain
                            </Flex>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        {
                            parts.map((part) => {
                                return (
                                    part.category === 'Drivetrain' && <HealthBar health={parseInt(part.health)} partname={part.name} />
                                );
                            })
                        }
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </Flex>
    )
}

export default HealthBarAccordion