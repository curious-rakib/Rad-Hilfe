import { Text, Box, Flex, VStack } from '@chakra-ui/react';
import TechnicianWorkingDays from '../../../components/Technician Working Days';
import InputTechnician from '../../../components/Input Technician';
import { timeSlotGenerator } from '../../../utils/timeSlotgenerator';

const TechnicianProfile = () => {
	const timeSlots = timeSlotGenerator(7, 20); //generating time slots between 7am and 8pm
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
								{' '}
								Select the times that work best for you
							</Text>

							{/* <Flex>
								{timeSlots.map((slot) => {
									return (
										<Flex bg={'accent'}>
											<Text color={'secondary'}>{slot.slotTime}</Text>
										</Flex>
									);
								})}
							</Flex> */}
						</>
					</>
				</Box>
			</Flex>
		</>
	);
};

export default TechnicianProfile;
