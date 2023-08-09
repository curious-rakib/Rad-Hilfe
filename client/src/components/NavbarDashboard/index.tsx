import { Text, Box, Flex } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';

function NavbarDashboard() {
	return (
		<>
			<Flex>
				<Box
					h={'100vh'}
					w={'13vw'}>
					<Text>Navbar</Text>
				</Box>
				<Outlet />
			</Flex>
		</>
	);
}

export default NavbarDashboard;
