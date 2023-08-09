import { Image, Text, Box, Flex, VStack, Center } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import avatar from './../../assets/avatar.svg';

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
								alignItems={'center'}>
								<Text
									as="b"
									fontSize={'1.35rem'}
									mb={2}>
									Agenda
								</Text>
								<Text
									as="b"
									fontSize={'1.35rem'}
									mb={2}>
									Cases
								</Text>
								<Text
									as="b"
									fontSize={'1.35rem'}
									mb={2}>
									Profile
								</Text>
							</Flex>
						</Box>
						<Box>
							<Text> Logout </Text>
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
