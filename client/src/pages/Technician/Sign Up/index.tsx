import { Box, Flex, Heading, Text, VStack, Image, Input, Stack, Center } from '@chakra-ui/react';
import image from './../../../assets/background_image.jpg';
import logo from './../../../assets/logo(Lilac).svg';
import InputTechnician from '../../../components/Input Technician';
import Button from '../../../components/Button';

const TechnicianSignUp = () => {
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
						mt={'5rem'}
						direction={'column'}
						p={' 0 6rem'}>
						<InputTechnician
							id={'fullName'}
							isRequired={false}
							type={'text'}
							label={'Full Name'}
							placeholder={'Enter Full Name'}
							colorScheme={'third'}
						/>

						<InputTechnician
							id={'email'}
							isRequired={false}
							type={'email'}
							label={'Email'}
							placeholder={'Enter Your Email '}
							colorScheme={'third'}
						/>
						<InputTechnician
							id={'password'}
							isRequired={false}
							type={'password'}
							label={'Create a Password'}
							placeholder={'* * * * * * * * * * * * * *'}
							colorScheme={'third'}
						/>

						<InputTechnician
							id={'password'}
							isRequired={false}
							type={'password'}
							label={'Confirm Password'}
							placeholder={'* * * * * * * * * * * * * *'}
							colorScheme={'third'}
						/>
						<>
							<Button
								loadingText={'Signing Up'}
								w={'7rem'}
								bg={'third'}
								size={'md'}
								color={'secondary'}
								text={'Sign Up'}
							/>
						</>
						<>
							<Text
								mt={'1rem'}
								as="u"
								color={'third'}>
								I'm already a member
							</Text>
						</>
					</Flex>
				</Box>
			</Flex>
		</>
	);
};

export default TechnicianSignUp;
