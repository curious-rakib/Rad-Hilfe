import { Flex, Box, Text, Heading, Image, Center } from '@chakra-ui/react';
import image from './../../../assets/background_image.jpg';
import TechnicianWorkingDays from '../../../components/Technician Working Days/indexForSetup';
import logo from './../../../assets/logo(Lilac).svg';
import LoopSlotOrPartsComponent from '../../../components/Time Slots & Bicycle Parts/indexForSetup';
import { TimeSlot, timeSlotGenerator } from '../../../utils/timeSlotgenerator';
import { MouseEvent } from 'react';
import Button from '../../../components/Button';
import TechnicianProgressBar from '../../../components/Technician Progress Bar';

const SetUpWorkingSchedule = () => {
	const timeSlots = timeSlotGenerator(7, 20);
	const handleClick = (item: TimeSlot | string) => {
		// console.log('selected:', item);
	};
	const handleNextClick = (event: MouseEvent<HTMLButtonElement>) => {
		console.log('Go to agenda page');
	};
	return (
		<>
			<Flex
				w={'100vw'}
				h={'100vh'}
				bgImage={image}>
				<Box flex={0.6}></Box>
				<Box
					bg={'secondary'}
					flex={0.4}>
					<Flex
						mt={'2rem'}
						mb={'1.5rem'}
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
						p={'0 6rem'}>
						<Center>
							<TechnicianProgressBar pagenumber={3} />
						</Center>
						<Text
							mt={'2rem'}
							mb={2}
							color={'third'}
							fontFamily={'Inter'}
							fontWeight={'500'}
							fontSize={'1.25rem'}>
							Which days can you work on ?
						</Text>
						<TechnicianWorkingDays
							colorScheme="accent"
							outline={true}
						/>

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
							wrap={'wrap'}
							mb={'2rem'}>
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
						<>
							<Button
								onClick={handleNextClick}
								loadingText={'Next'}
								w={'7rem'}
								bg={'third'}
								size={'md'}
								color={'secondary'}
								text={'Next'}
							/>
						</>
					</Flex>
				</Box>
			</Flex>
		</>
	);
};

export default SetUpWorkingSchedule;
