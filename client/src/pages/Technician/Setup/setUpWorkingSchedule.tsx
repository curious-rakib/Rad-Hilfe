import { Flex, Box, Text, Heading, Image } from '@chakra-ui/react';
import image from './../../../assets/background_image.jpg';
import TechnicianWorkingDays from '../../../components/Technician Working Days';
import logo from './../../../assets/logo(Lilac).svg';
import LoopSlotOrPartsComponent from '../../../components/Time Slots & Bicycle Parts';
import { TimeSlot, timeSlotGenerator } from '../../../utils/timeSlotgenerator';

const SetUpWorkingSchedule = () => {
	const timeSlots = timeSlotGenerator(7, 20);
	const handleClick = (item: TimeSlot | string) => {
		// console.log('selected:', item);
	};
	return (
		<>
			<Flex
				w={'100vw'}
				h={'100vh'}
				bgImage={image}>
				<Box flex={0.5}></Box>
				<Box
					bg={'secondary'}
					flex={0.5}>
					<Flex
						alignItems={'center'}
						justifyContent={'center'}
						gap={'1rem '}>
						<Heading
							fontSize={'2.5rem'}
							color={'third'}>
							Slipstream
						</Heading>
						<Image
							src={logo}
							alt="Slipstream logo"></Image>
					</Flex>

					<Flex
						direction={'column'}
						p={'0 8rem'}>
						<Text
							mb={2}
							color={'third'}
							fontFamily={'Inter'}
							fontWeight={'500'}
							fontSize={'1.25rem'}>
							Which days can you work on ?
						</Text>
						<TechnicianWorkingDays colorScheme="accent" />

						<Text
							mt={'2rem'}
							mb={2}
							color={'third'}
							fontFamily={'Inter'}
							fontWeight={'500'}
							fontSize={'1.5rem'}>
							Which are the best times for you ?
						</Text>
						<Text
							mb={2}
							color={'third'}
							fontFamily={'Inter'}
							fontWeight={'500'}
							fontSize={'1rem'}>
							Select the times that work best for you
						</Text>
						<Flex
							w={'32vw'}
							wrap={'wrap'}>
							{timeSlots.map((slot) => {
								return (
									<LoopSlotOrPartsComponent
										key={slot.slotName}
										item={slot.slotTime}
										onClick={() => handleClick(slot)}
										outline={true}
									/>
								);
							})}
						</Flex>
					</Flex>
				</Box>
			</Flex>
		</>
	);
};

export default SetUpWorkingSchedule;
