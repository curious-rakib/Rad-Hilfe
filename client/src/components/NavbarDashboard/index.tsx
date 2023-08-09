import { Image, Text, Box, Flex, VStack, Center } from '@chakra-ui/react';
import avatar from './../../assets/avatar.svg';
import agenda from './../../assets/agenda.svg';
import cases from './../../assets/cases.svg';
import profile from './../../assets/technician-profile.svg';
import logout from './../../assets/logout.svg';

function NavbarDashboard() {
	return (
		<Box
			borderRadius={'2rem'}
			h={'100vh'}
			w={'13vw'}
			color="primary">
			<VStack>
				<Center>
					<Flex
						w={'100%'}
						textAlign={'center'}
						m={'.85rem'}
						justify={'center'}
						alignItems={'center'}>
						<Image
							w={'4rem'}
							h={'4rem'}
							src={avatar}
							alt="avatar"></Image>

						<Text
							m={2}
							fontSize={'1.155rem'}>
							Leonard Susskind
						</Text>
					</Flex>
				</Center>

				<Box mt={'10rem'}>
					<Flex
						direction={'column'}
						alignItems={'center'}
						justifyContent={'flex-start'}
						gap={'1.5rem'}>
						<Flex
							gap={'.5rem'}
							_active={{ backgroundColor: 'third', color: 'secondary', w: '8.5vw', h: '5vh', borderRadius: 'md' }}>
							<Image
								src={agenda}
								alt="calendar icon"></Image>

							<Text
								as="b"
								fontSize={'1.35rem'}>
								Agenda
							</Text>
						</Flex>

						<Flex
							gap={'.5rem'}
							mr={'1rem'}
							_active={{ backgroundColor: 'third', color: 'secondary', w: '7.5vw', h: '5vh', borderRadius: 'md' }}>
							<Image
								src={cases}
								alt="cases icon"
								_active={{ color: 'secondary' }}></Image>
							<Text
								as="b"
								fontSize={'1.35rem'}>
								Cases
							</Text>
						</Flex>

						<Flex
							gap={'.5rem'}
							mr={'.7rem'}
							_active={{ backgroundColor: 'third', color: 'secondary', w: '7.5vw', h: '5vh', borderRadius: 'md' }}>
							<Image
								src={profile}
								alt="profile icon"></Image>
							<Text
								as="b"
								fontSize={'1.35rem'}>
								Profile
							</Text>
						</Flex>
					</Flex>
				</Box>
				<Box mt={'14rem'}>
					<Flex
						gap={'.55rem'}
						_active={{ backgroundColor: 'third', color: 'secondary', w: '8vw', h: '5vh', borderRadius: 'md' }}>
						<Image
							src={logout}
							alt="logout icon"></Image>
						<Text
							as="b"
							fontSize={'1.35rem'}>
							Logout
						</Text>
					</Flex>
				</Box>
			</VStack>
		</Box>
	);
}

export default NavbarDashboard;
