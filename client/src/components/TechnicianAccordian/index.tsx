import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, Box } from '@chakra-ui/react';
import { useAppSelector } from '../../app/hooks';
import ReplacementParts from '../Replacement Parts';
import HealthBarListTechnician from '../Technician Health Bar List';
import ActiveTags from '../ActiveTags';

const TechnicianAccordian = () => {
	const Case = useAppSelector((state: any) => state.caseDetails);
	const bicycle = Case.bicycle;

	return (
		<Accordion
			allowMultiple
			bg={'white'}
			h={'auto'}
			boxShadow="0px 4px 8px rgba(0, 0, 0, 0.1)"
			p={5}
			rounded={'2xl'}>
			<AccordionItem color={'secondary'}>
				{({ isExpanded }) => (
					<div>
						<h2 style={{ borderTop: 'none', marginBottom: '36px', marginTop: '30px' }}>
							<AccordionButton>
								<Box
									as="span"
									flex="1"
									textAlign="left"
									fontWeight={'700'}
									fontSize={'xl'}>
									Bicycle Health
								</Box>
								{isExpanded ? <MinusIcon fontSize="1.15rem" /> : <AddIcon fontSize="1.15rem" />}
							</AccordionButton>
						</h2>
						<Box
							h={'auto'}
							overflowY={'auto'}>
							<AccordionPanel pb={'1rem'}>
								<HealthBarListTechnician bicycleParts={bicycle.bicycleParts} />
							</AccordionPanel>
						</Box>
					</div>
				)}
			</AccordionItem>
			<AccordionItem color={'secondary'}>
				{({ isExpanded }) => (
					<div>
						<h2
							style={{
								borderTop: 'none',
								marginBottom: '36px',
								marginTop: '30px',
								borderBottom: 'none',
							}}>
							<AccordionButton>
								<Box
									as="span"
									flex="1"
									textAlign="left"
									fontWeight={'700'}
									fontSize={'xl'}>
									Replacement Kit
								</Box>
								{isExpanded ? <MinusIcon fontSize="1.15rem" /> : <AddIcon fontSize="1.15rem" />}
							</AccordionButton>
						</h2>
						<Box
							h={'auto'}
							overflowY={'auto'}>
							<AccordionPanel pb={'1rem'}>
								<ReplacementParts replacableParts={bicycle.bicycleParts} />
							</AccordionPanel>
						</Box>
					</div>
				)}
			</AccordionItem>

			{Case.type === 'Active' ? (
				<AccordionItem color={'secondary'}>
					{({ isExpanded }) => (
						<div>
							<h2
								style={{
									borderTop: 'none',
									marginBottom: '36px',
									marginTop: '30px',
									borderBottom: 'none',
								}}>
								<AccordionButton>
									<Box
										as="span"
										flex="1"
										textAlign="left"
										fontWeight={'700'}
										fontSize={'xl'}>
										Chatbot Tags
									</Box>
									{isExpanded ? <MinusIcon fontSize="1.15rem" /> : <AddIcon fontSize="1.15rem" />}
								</AccordionButton>
							</h2>
							<Box
								h={'auto'}
								overflowY={'auto'}>
								<AccordionPanel pb={'1rem'}>
									<ActiveTags></ActiveTags>
								</AccordionPanel>
							</Box>
						</div>
					)}
				</AccordionItem>
			) : null}
		</Accordion>
	);
};

export default TechnicianAccordian;
