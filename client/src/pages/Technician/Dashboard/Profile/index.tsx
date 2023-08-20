import { Text, Box, Flex, Image, Input } from '@chakra-ui/react';
import TechnicianWorkingDays from '../../../../components/Technician Working Days/indexForProfile';
import { TimeSlot, timeSlotGenerator } from '../../../../utils/timeSlotgenerator';
import { ChangeEvent, useEffect, useState } from 'react';
import { parts } from '../../../../data/partsData';
import LoopSlotOrPartsComponent from '../../../../components/Time Slots & Bicycle Parts/indexForProfile';
import avatar from '../../../../assets/avatarTechnician.svg';
import InputTechnician from '../../../../components/Input Technician';
import Button from '../../../../components/Button';
import BicycleBrandList from '../../../../components/Bicyle Brand List';
import { useAppSelector } from '../../../../app/hooks';

const TechnicianProfile = () => {
	const technician = useAppSelector((state: any) => state.technician);
	const timeSlots = timeSlotGenerator(7, 20); //generating time slots between 7am and 8pm
	const bicycleParts = parts;
	const [choosenTimeSlots, setChoosenTimeSlots] = useState<TimeSlot[]>([]);
	const [inputBrand, setInputBrand] = useState<string>('');
	const [brandList, setBrandList] = useState<string[]>([]);

	const handleClick = (item: TimeSlot | string) => {
		// console.log('selected:', item);
	};

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {};

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
							loadingText={'Uploading'}
							w={''}
							bg={'third'}
							size={'md'}
							color={'secondary'}
							text={'Upload'}
							fontWeight={''}
						/>
					</Box>

					<Box
						width={'90%'}
						m={'0 auto'}
						mb={'3rem'}>
						<InputTechnician
							id={'password'}
							isRequired={false}
							type={'password'}
							name={'password'}
							label={'Change Password'}
							placeholder={'* * * * * * * * * * * * * *'}
							colorScheme={'secondary'}
							onChange={handleChange}
						/>
						<InputTechnician
							id={'address'}
							isRequired={false}
							type={'text'}
							name={'address'}
							label={'Change Address'}
							placeholder={'Enter Your Current Address '}
							colorScheme={'secondary'}
							onChange={handleChange}
						/>
						<InputTechnician
							id={'phone'}
							isRequired={false}
							type={'tel'}
							name={'phone'}
							label={'Change Number'}
							placeholder={'Enter Your Contact Number '}
							colorScheme={'secondary'}
							onChange={handleChange}
						/>
					</Box>

					<Flex
						justifyContent={'center'}
						alignItems={'center'}
						gap={'1.5rem'}>
						<Button
							loadingText={'Confirm'}
							w={''}
							bg={'third'}
							size={'lg'}
							color={'secondary'}
							text={'Confirm'}
							fontWeight={''}
						/>

						<Button
							loadingText={'Cancel'}
							w={''}
							bg={'third'}
							size={'lg'}
							color={'secondary'}
							text={'Cancel'}
							fontWeight={''}
						/>
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
						<TechnicianWorkingDays
							colorScheme="accent"
							outline={false}
						/>
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
												<BicycleBrandList
													key={index}
													item={brand}
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
