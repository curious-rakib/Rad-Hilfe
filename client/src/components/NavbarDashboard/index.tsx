import { Image, Text, Box, Flex, VStack, Center } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import avatar from './../../assets/avatar.svg';
import agenda from './../../assets/agenda.svg';
import cases from './../../assets/cases.svg';
import profile from './../../assets/technician-profile.svg';
import logout from './../../assets/logout.svg';

function NavbarDashboard() {
	return (
		<>
			<Flex>
				<Box
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

						<Box mt={'23vh'}>
							<Flex
								direction={'column'}
								alignItems={'center'}
								gap={'1.5rem'}>
								<Flex gap={'.5rem'}>
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
									mr={'1rem'}>
									<Image
										src={cases}
										alt="cases icon"></Image>
									<Text
										as="b"
										fontSize={'1.35rem'}>
										Cases
									</Text>
								</Flex>

								<Flex
									gap={'.5rem'}
									mr={'.7rem'}>
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
						<Box mt={'30vh'}>
							<Flex gap={'.55rem'}>
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

				<Box
					bg="primary"
					p={2}
					h={'100vh'}
					w={'87vw'}>
					<Outlet />
				</Box>
			</Flex>
		</>
	);
}

export default NavbarDashboard;
