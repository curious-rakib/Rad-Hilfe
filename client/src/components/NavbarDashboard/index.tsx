import { Flex } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';

function NavbarDashboard() {
	return (
		<>
			<Flex>
				<Outlet />
			</Flex>
		</>
	);
}

export default NavbarDashboard;
