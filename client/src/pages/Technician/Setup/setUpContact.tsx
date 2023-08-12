import { Box, Flex, Heading, Text, Image, Center } from '@chakra-ui/react';
import image from './../../../assets/background_image.jpg';
import logo from './../../../assets/logo(Lilac).svg';
import InputTechnician from '../../../components/Input Technician';
import avatar from '../../../assets/avatar.svg';
import { ChangeEvent } from 'react';
import Button from '../../../components/Button';
import { useAppDispatch } from '../../../app/hooks';
import { technician } from '../../../features/technician/slices/technicianSlice';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import TechnicianProgressBar from '../../../components/Technician Progress Bar';

const SetUpContact = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		event.preventDefault();
		const { name, value } = event.target;
		const contactData = { [name]: value };

		dispatch(technician(contactData));
	};
	const { address, phone } = useSelector((state: any) => state.technician);
	const handleClick = () => {
		const technician = localStorage.getItem('technician');
		if (technician) {
			const parsedTechnician = JSON.parse(technician);
			parsedTechnician.address = address;
			parsedTechnician.phone = phone;
			console.log(parsedTechnician);
			localStorage.setItem('technician', JSON.stringify(parsedTechnician));
		}

		navigate('/technician-setup-2');
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
						mt={'2rem'}
						direction={'column'}
						p={'0 6rem'}>
						<Center>
							<TechnicianProgressBar pagenumber={1} />
						</Center>
						<Text
							mt={'2rem'}
							color={'third'}
							fontSize={'1.5rem'}>
							Select a Profile Picture
						</Text>
						<Flex
							mt={'.5rem'}
							gap={'2rem'}
							p={'0 1rem 1rem 0'}
							alignItems={'center'}>
							<Image
								src={avatar}
								alt="Technician"></Image>

							<Button
								loadingText={'Uploading'}
								w={''}
								bg={'third'}
								size={'md'}
								color={'secondary'}
								text={'Upload'}
							/>
						</Flex>
						<InputTechnician
							id={'address'}
							isRequired={false}
							type={'text'}
							name={'address'}
							label={'Current Address'}
							placeholder={'Enter Your Current Address '}
							colorScheme={'third'}
							onChange={handleChange}
						/>
						<InputTechnician
							id={'phone'}
							isRequired={false}
							type={'tel'}
							name={'phone'}
							label={'Contact Number'}
							placeholder={'Enter Your Contact Number '}
							colorScheme={'third'}
							onChange={handleChange}
						/>

						<>
							<Button
								onClick={handleClick}
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

export default SetUpContact;
