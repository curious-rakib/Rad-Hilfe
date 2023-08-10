import { Text, Box, Flex, Image, Button, Input } from '@chakra-ui/react';
import TechnicianWorkingDays from '../../../components/Technician Working Days';
import { TimeSlot, timeSlotGenerator } from '../../../utils/timeSlotgenerator';
import { useEffect, useState, KeyboardEvent } from 'react';
import { parts } from '../../../data/partsData';
import LoopSlotOrPartsComponent from '../../../components/Time Slots & Bike Parts';
import avatar from '../../../assets/avatarTechnician.svg';
import InputTechnician from '../../../components/Input Technician';

const TechnicianProfile = () => {
	const timeSlots = timeSlotGenerator(7, 20);
	const bicycleParts = parts; //generating time slots between 7am and 8pm
	const [choosenTimeSlots, setChoosenTimeSlots] = useState<TimeSlot[]>([]);
	const [inputBrand, setInputBrand] = useState<string>('');
	const [brandList, setBrandList] = useState<string[]>([]);

	const handleClick = (item: TimeSlot | string) => {
		// console.log('selected:', item);
	};

	useEffect(() => {
		setChoosenTimeSlots(timeSlots);
	}, []);

	return (
		<>
			<Flex>
				<Box
					color={'secondary'}
					flex={0.5}>
					<Box>
						<Box>
							<Image
								src={avatar}
								alt="Technician"></Image>
						</Box>

						<Button
							color={'#001F3F'}
							
							bg={'#C1FAA6'}
							_hover={{ color: '#C1FAA6', backgroundColor: '#001F3F' }}
							size="lg">
							Upload
						</Button>
					</Box>

					<Box>
						<InputTechnician
							id={'fullName'}
							isRequired={false}
							type={'text'}
							label={'Full Name'}
							placeholder={'Enter Full Name'}
						/>
					</Box>
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
							<Flex
								w={'32vw'}
								wrap={'wrap'}>
								{timeSlots.map((slot) => {
									return (
										<LoopSlotOrPartsComponent
											key={slot.slotName}
											item={slot.slotTime}
											onClick={() => handleClick(slot)}
										/>
									);
								})}
							</Flex>
							<>
								<Text
									mt={'1.15rem'}
									fontSize={'1.5rem'}>
									Bicycle Brands
								</Text>
								<Flex
									w={'31vw'}
									direction={'column'}>
									<Input
										value={inputBrand}
										variant="flushed"
										size={'md'}
										placeholder="Type names of brands you have worked with"
										_placeholder={{ color: 'secondary', borderColor: 'secondary' }}
										_focusVisible={{ borderColor: 'secondary' }}
										onChange={(event) => setInputBrand(event.currentTarget.value)}
										onKeyDown={(event) => {
											if (event.key === 'Enter') {
												event.preventDefault();
												setBrandList((brands) => [...brands, inputBrand]);
												setInputBrand('');
											}
										}}
									/>



								</Flex>
							</>

							<>
								<Text
									mb={2}
									mt={'1.15rem'}
									fontSize={'1.5rem'}>
									Components Expertise
								</Text>
								<Text
									mb={2}
									fontFamily={'Inter'}
									fontWeight={'500'}
									fontSize={'1rem'}>
									Select the components you are comfortable working with
								</Text>
								<Flex
									w={'32vw'}
									wrap={'wrap'}>
									{bicycleParts.map((parts) => {
										return (
											<LoopSlotOrPartsComponent
												key={parts._id}
												item={parts.name}
												onClick={() => handleClick(parts.name)}
											/>
										);
									})}
								</Flex>
							</>
						</>
					</>
				</Box>
			</Flex>
		</>
	);
};

export default TechnicianProfile;
