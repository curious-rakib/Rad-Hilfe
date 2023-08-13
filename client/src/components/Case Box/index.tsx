import { Box, Text, Flex } from '@chakra-ui/react';

const caseBoxColor: Record<string, string> = {
	Active: 'accent',
	Passive: 'third',
};

const Casebox = ({ caseType, date, clientName, time }: { caseType: string; date: string; clientName: string; time: string }) => {
	return (
		<>
			<Box
				m={'.5rem'}
				p={'1rem'}
				w={'25rem'}
				bg={caseBoxColor[caseType]}
				borderRadius={'1rem'}>
				<Flex
					justify={'space-between'}
					alignItems={'center'}>
					<Text
						fontSize={'1.5rem'}
						fontWeight={'600'}>
						Case Type: {caseType}
					</Text>
					<Text>{date}</Text>
				</Flex>
				<Flex
					justify={'space-between'}
					alignItems={'center'}>
					<Text
						mt={'1rem'}
						fontSize={'1rem'}>
						Call with {clientName}
					</Text>
					<Text mt={'1rem'}> {time}</Text>
				</Flex>
			</Box>
		</>
	);
};

export default Casebox;
