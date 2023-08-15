import { Box, Text, Flex } from '@chakra-ui/react';
import moment from 'moment';

const caseBoxColor: Record<string, string> = {
	Active: 'accent',
	Passive: 'third',
};

const Casebox = ({ caseType, date, clientName, time }: { caseType: string; date: Date | string; clientName: string; time: string }) => {
	const formattedDate = moment(date).format('MMMM Do, YYYY');
	const [startTimeStr, endTimeStr] = time.split('-');
	const startTime = moment(startTimeStr.trim(), 'HH:mm').format('h:mm A');
	const endTime = moment(endTimeStr.trim(), 'HH:mm').format('h:mm A');

	const formattedTime = `${startTime} - ${endTime}`;
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
					<Text>{formattedDate}</Text>
				</Flex>
				<Flex
					justify={'space-between'}
					alignItems={'center'}>
					<Text
						mt={'1rem'}
						fontSize={'1rem'}>
						Call with {clientName}
					</Text>
					<Text mt={'1rem'}> {formattedTime}</Text>
				</Flex>
			</Box>
		</>
	);
};

export default Casebox;
