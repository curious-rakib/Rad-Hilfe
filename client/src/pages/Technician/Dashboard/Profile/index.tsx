import { Text, Box, Flex, Image, Button, Input } from '@chakra-ui/react';
import TechnicianWorkingDays from '../../../../components/Technician Working Days';
import { TimeSlot, timeSlotGenerator } from '../../../../utils/timeSlotgenerator';
import { useEffect, useState } from 'react';
import { parts } from '../../../../data/partsData';
import LoopSlotOrPartsComponent from '../../../../components/Time Slots & Bicycle Parts';
import avatar from '../../../../assets/avatarTechnician.svg';
import InputTechnician from '../../../../components/Input Technician';

const TechnicianProfile = () => {
	const timeSlots = timeSlotGenerator(7, 20); //generating time slots between 7am and 8pm
	const bicycleParts = parts;
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
			<Flex gap={'2rem'}>
				<Box
					p={'2rem'}
					color={'secondary'}
					flex={0.5}>
					<Box
						mt={'1rem'}
						mb={'2rem'}
						display={'flex'}
						alignItems={'center'}
						justifyContent={'flex-start'}
						gap={'5rem'}>
						<Box ml={'1rem'}>
							<Image
								src={avatar}
								alt="Technician"></Image>
						</Box>

						<Button
							color={'#001F3F'}
							p={'0 2.5rem'}
							bg={'#C1FAA6'}
							borderRadius={'.75rem'}
							_hover={{ color: '#C1FAA6', backgroundColor: '#001F3F' }}
							size="md">
							<Text
								as="b"
								fontFamily={'Inter'}>
								Upload
							</Text>
						</Button>
					</Box>

					<Box
						width={'90%'}
						m={'0 auto'}
						mb={'3rem'}>
						<InputTechnician
							id={'fullName'}
							isRequired={false}
							type={'text'}
							label={'Full Name'}
							placeholder={'Enter Full Name'}
							colorScheme={'secondary'}
						/>

						<InputTechnician
							id={'email'}
							isRequired={false}
							type={'email'}
							label={'Email'}
							placeholder={'Enter Your Email '}
							colorScheme={'secondary'}
						/>

						<InputTechnician
							id={'password'}
							isRequired={false}
							type={'password'}
							label={'Change Password'}
							placeholder={'* * * * * * * * * * * * * *'}
							colorScheme={'secondary'}
						/>
						<InputTechnician
							id={'address'}
							isRequired={false}
							type={'text'}
							label={'Current Address'}
							placeholder={'Enter Your Current Address '}
							colorScheme={'secondary'}
						/>
						<InputTechnician
							id={'phone'}
							isRequired={false}
							type={'tel'}
							label={'Contact Number'}
							placeholder={'Enter Your Contact Number '}
							colorScheme={'secondary'}
						/>
					</Box>

					<Flex
						justifyContent={'center'}
						alignItems={'center'}
						gap={'1.5rem'}>
						<Button
							color={'#001F3F'}
							p={'0 3rem'}
							bg={'#EDCBEF'}
							borderRadius={'1.25rem'}
							_hover={{ color: '#EDCBEF', backgroundColor: '#001F3F' }}
							size="lg">
							<Text
								as="b"
								fontFamily={'Inter'}>
								Confirm
							</Text>
						</Button>

						<Button
							color={'#001F3F'}
							p={'0 3rem'}
							bg={'#EDCBEF'}
							borderRadius={'1.25rem'}
							_hover={{ color: '#EDCBEF', backgroundColor: '#001F3F' }}
							size="lg">
							<Text
								as="b"
								fontFamily={'Inter'}>
								Cancel
							</Text>
						</Button>
					</Flex>
				</Box>

				<Box
					p={'2rem'}
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
											outline={false}
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
									<Flex wrap={'wrap'}>
										{brandList.map((brand, index) => {
											return (
												<LoopSlotOrPartsComponent
													key={index}
													item={brand}
													onClick={() => console.log('first')}
													outline={false}
												/>
											);
										})}
									</Flex>
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
												outline={false}
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
