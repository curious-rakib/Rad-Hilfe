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
import { AddIcon, MinusIcon } from '@chakra-ui/icons';
function HealthBarAccordion() {
    return (
        <Flex alignItems="center" direction={'column'}>
            <Text fontSize={'15'} pt={'7'} pb={'3'} color={'accent'}>
                You need to replace 5 components in your bicycle
            </Text>
            <Accordion w="90vw" allowMultiple allowToggle color={'white'}>






                <AccordionItem style={{ borderTopWidth: '0px' }}>
                    {({ isExpanded }) => (
                        <>
                            <h2 style={{ borderTop: 'none', marginBottom: '16px' }}>
                                <AccordionButton >
                                    <Box as="span" flex='1' textAlign='left'>
                                        <Flex as="span" flex='1' textAlign='left'>
                                            <Circle
                                                sx={
                                                    {
                                                        borderRadius: "12px",
                                                        width: "24px",
                                                        height: "20px"
                                                    }
                                                }

                                                bg="blue.400" size={'25px'} mr={'10px'}>{" "}</Circle>
                                            {/* <Box bg="#3B82F6" mr={'5px'}></Box>  */}
                                            Wheel
                                        </Flex>
                                    </Box>
                                    {isExpanded ? (
                                        <MinusIcon fontSize='12px' />
                                    ) : (
                                        <AddIcon fontSize='12px' />
                                    )}
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
                        </>
                    )}
                </AccordionItem>
                <AccordionItem >
                    {({ isExpanded }) => (
                        <>
                            <h2>
                                <AccordionButton style={{ borderTop: 'none' }} my={4}>
                                    <Box as="span" flex='1' textAlign='left'>
                                        <Flex as="span" flex='1' textAlign='left'>
                                            <Circle
                                                sx={
                                                    {
                                                        borderRadius: "12px",
                                                        width: "24px",
                                                        height: "20px"
                                                    }
                                                }

                                                bg="#EDCBEF" size={'25px'} mr={'10px'}>{" "}</Circle>Bike Frame
                                        </Flex>
                                    </Box>
                                    {isExpanded ? (
                                        <MinusIcon fontSize='12px' />
                                    ) : (
                                        <AddIcon fontSize='12px' />
                                    )}
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
                        </>
                    )}
                </AccordionItem>
                <AccordionItem>
                    {({ isExpanded }) => (
                        <>
                            <h2>
                                <AccordionButton style={{ borderTop: 'none' }} my={4}>
                                    <Box as="span" flex='1' textAlign='left'>
                                        <Flex as="span" flex='1' textAlign='left'>
                                            <Circle

                                                sx={
                                                    {
                                                        borderRadius: "12px",
                                                        width: "24px",
                                                        height: "20px"
                                                    }
                                                }
                                                bg="#FFF71A" size={'25px'} mr={'10px'}>{" "}</Circle>  Brake
                                        </Flex>
                                    </Box>
                                    {isExpanded ? (
                                        <MinusIcon fontSize='12px' />
                                    ) : (
                                        <AddIcon fontSize='12px' />
                                    )}
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
                        </>
                    )}
                </AccordionItem>
                <AccordionItem style={{ borderBottomWidth: '0px' }}>
                    {({ isExpanded }) => (
                        <>
                            <h2>
                                <AccordionButton style={{ borderTop: 'none' }} my={4}>
                                    <Box as="span" flex='1' textAlign='left'>
                                        <Flex as="span" flex='1' textAlign='left'>
                                            <Circle
                                                sx={
                                                    {
                                                        borderRadius: "12px",
                                                        width: "24px",
                                                        height: "20px"
                                                    }
                                                }
                                                bg="#52D4A5" size={'25px'} mr={'10px'}>{" "}</Circle>  Drive Mechanics
                                        </Flex>
                                    </Box>
                                    {isExpanded ? (
                                        <MinusIcon fontSize='12px' />
                                    ) : (
                                        <AddIcon fontSize='12px' />
                                    )}
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                {
                                    parts.map((part) => {
                                        return (
                                            part.category === 'DriveMechanics' && <HealthBar health={parseInt(part.health)} partname={part.name} />
                                        );
                                    })
                                }


                            </AccordionPanel>
                        </>
                    )}
                </AccordionItem>


            </Accordion>
        </Flex>
    )
}

export default HealthBarAccordion