import { Box, Flex, Heading, Text, Image, Input, Center, Button } from '@chakra-ui/react';
import image from './../../../assets/background_image.jpg';
import logo from './../../../assets/logo(Lilac).svg';
import InputTechnician from '../../../components/Input Technician';
import NextButton from '../../../components/Button';
import avatar from '../../../assets/avatar.svg';

const SetUpContact = () => {
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

					<Box
						mt={'1rem'}
						mb={'2rem'}
						display={'flex'}
						alignItems={'center'}
						justifyContent={'flex-start'}
						gap={'3rem'}>
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

					<Flex
						mt={'5rem'}
						direction={'column'}
						p={' 0 6rem'}>
						<InputTechnician
							id={'address'}
							isRequired={false}
							type={'text'}
							label={'Current Address'}
							placeholder={'Enter Your Current Address '}
							colorScheme={'third'}
						/>
						<InputTechnician
							id={'phone'}
							isRequired={false}
							type={'tel'}
							label={'Contact Number'}
							placeholder={'Enter Your Contact Number '}
							colorScheme={'third'}
						/>

						<>
							<NextButton
								loadingText={'Signing In'}
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
