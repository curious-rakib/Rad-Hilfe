import { Box, Center } from '@chakra-ui/react';
import { TimeSlot } from '../../utils/timeSlotgenerator';

const TimeSlotComponent = ({ slot }: { slot: TimeSlot }) => {
	return (
		<Box
			w={'7.5rem'}
			m={1}
			bg={'accent'}
			borderRadius={'.63rem'}
			p={'.45rem'}
			fontSize={'.95rem'}
			fontFamily={'Inter'}>
			<Center>
				<strong>{slot.slotTime}</strong>
			</Center>
		</Box>
	);
};

export default TimeSlotComponent;
