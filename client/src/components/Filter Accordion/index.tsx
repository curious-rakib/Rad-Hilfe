import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Box, Flex } from '@chakra-ui/react';
import './filter.styles.css';

const FilterAccordionComponent = () => {
	return (
		<>
			<Accordion
				allowToggle
				className="accordion-container">
				<Flex>
					<AccordionItem isFocusable>
						<h2>
							<AccordionButton>
								<Box
									as="span"
									flex="1"
									textAlign="center">
									Status
								</Box>
								<AccordionIcon />
							</AccordionButton>
						</h2>
						<AccordionPanel pb={4}>Open</AccordionPanel>
						<AccordionPanel pb={4}>In Progress</AccordionPanel>
						<AccordionPanel pb={4}>Closed</AccordionPanel>
					</AccordionItem>

					<AccordionItem>
						<h2>
							<AccordionButton>
								<Box
									as="span"
									flex="1"
									textAlign="left">
									Case Type
								</Box>
								<AccordionIcon />
							</AccordionButton>
						</h2>
						<AccordionPanel pb={4}>Active</AccordionPanel>
						<AccordionPanel pb={4}>Passive</AccordionPanel>
					</AccordionItem>
				</Flex>
			</Accordion>
		</>
	);
};

export default FilterAccordionComponent;
