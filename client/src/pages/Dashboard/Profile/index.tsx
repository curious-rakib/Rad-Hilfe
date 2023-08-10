import { Text, Box, Flex, VStack, Center } from '@chakra-ui/react';
import TechnicianWorkingDays from '../../../components/Technician Working Days';
import { TimeSlot, timeSlotGenerator } from '../../../utils/timeSlotgenerator';
import TimeSlotComponent from '../../../components/Time Slots';
import { useEffect, useState } from 'react';

const TechnicianProfile = () => {
	const timeSlots = timeSlotGenerator(7, 20); //generating time slots between 7am and 8pm
	const [choosenTimeSlots, setChoosenTimeSlots] = useState<TimeSlot[]>([]);

	useEffect(() => {
		setChoosenTimeSlots(timeSlots);
	}, []);

	return (
		<>
			<Flex>
				<Box
					color={'secondary'}
					flex={0.5}>
					Rakib
				</Box>
				<Box
					color={'secondary'}
					flex={0.5}>
					<>
						<Text
							mb={2}
							fontFamily={'Inter'}
							fontWeight={'500'}
							fontSize={'1.5rem'}>
							Which days can you work on ?
						</Text>
						<TechnicianWorkingDays colorScheme="accent" />
						<>
							<Text
								mt={'2rem'}
								mb={2}
								fontFamily={'Inter'}
								fontWeight={'500'}
								fontSize={'1.5rem'}>
								Which are the best times for you ?
							</Text>
							<Text
								mb={2}
								fontFamily={'Inter'}
								fontWeight={'500'}
								fontSize={'1rem'}>
								Select the times that work best for you
							</Text>
							<Flex wrap={'wrap'}>
								{timeSlots.map((slot) => {
									return <TimeSlotComponent slot={slot} />;
								})}
							</Flex>
						</>
					</>
				</Box>
			</Flex>
		</>
	);
};

export default TechnicianProfile;
