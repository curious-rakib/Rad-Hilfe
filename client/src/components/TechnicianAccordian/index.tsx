import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
} from '@chakra-ui/react'
import AddingNotes from '../Adding Notes';
import { useAppSelector } from '../../app/hooks';
import ReplacementParts from '../Replacement Parts';
import HealthBarListTechnician from '../Technician Health Bar List';

const TechnicianAccordian = () => {
    const bicycle = useAppSelector((state: any) => state.bikeDetails);

    return (
        <div style={{ width: '42rem' }}>
            <Accordion allowMultiple bg={'white'} h={450} boxShadow="0px 4px 8px rgba(0, 0, 0, 0.1)" p={5} rounded={'2xl'}>


                <AccordionItem color={'secondary'} >
                    {({ isExpanded }) => (
                        <div >
                            <h2 style={{ borderTop: 'none', marginBottom: '36px', marginTop: '30px' }}>
                                <AccordionButton>
                                    <Box as="span" flex='1' textAlign='left'
                                        fontWeight={'700'}
                                        fontSize={'xl'}
                                    >
                                        Bicycle Health
                                    </Box>
                                    {isExpanded ? (
                                        <MinusIcon fontSize='12px' />
                                    ) : (
                                        <AddIcon fontSize='12px' />
                                    )}
                                </AccordionButton>
                            </h2>
                            <div style={{ maxHeight: '200px', overflowY: 'auto' }}>
                                <AccordionPanel pb={4}>
                                    <HealthBarListTechnician bicycleParts={bicycle.bicycleParts} />
                                </AccordionPanel>
                            </div>
                        </div>
                    )}
                </AccordionItem>
                <AccordionItem color={'secondary'}>
                    {({ isExpanded }) => (
                        <div >
                            <h2 style={{
                                borderTop: 'none',
                                marginBottom: '36px', marginTop: '30px', borderBottom: 'none'
                            }}>
                                <AccordionButton>
                                    <Box as="span" flex='1' textAlign='left' fontWeight={'700'}
                                        fontSize={'xl'}

                                    >
                                        Replacement Kit
                                    </Box>
                                    {isExpanded ? (
                                        <MinusIcon fontSize='12px' />
                                    ) : (
                                        <AddIcon fontSize='12px' />
                                    )}
                                </AccordionButton>
                            </h2>
                            <div style={{ maxHeight: '200px', overflowY: 'auto' }}>
                                <AccordionPanel pb={4}>
                                    <ReplacementParts replacableParts={bicycle.bicycleParts} />
                                </AccordionPanel>
                            </div>
                        </div>
                    )}
                </AccordionItem>
                {/* <AccordionItem color={'white'}>
                    {({ isExpanded }) => (
                        <div>
                            <h2 style={{ borderTop: 'none', marginBottom: '36px', marginTop: '30px' }}>
                                <AccordionButton>
                                    <Box as="span" flex='1' textAlign='left'>
                                        Notes
                                    </Box>
                                    {isExpanded ? (
                                        <MinusIcon fontSize='12px' />
                                    ) : (
                                        <AddIcon fontSize='12px' />
                                    )}
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={6} style={{ maxHeight: '200px', overflowY: 'auto', }}>

                                <AddingNotes />

                            </AccordionPanel>
                        </div>
                    )}
                </AccordionItem> */}
            </Accordion>
        </div >
    );
};

export default TechnicianAccordian;