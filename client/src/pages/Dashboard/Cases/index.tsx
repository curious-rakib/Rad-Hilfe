import { Flex, Heading, Text } from '@chakra-ui/react';
import TableComponent from '../../../components/Table';
import './cases.styles.css';
const Cases = () => {
	return (
		<div className="cases-container">
			<Flex
				justifyContent={'space-between'}
				gap={'600px'}
				color={'secondary'}>
				<Text fontSize="xl">Support Cases</Text>
				<Heading as="h2">Slipstream</Heading>
			</Flex>
			<TableComponent />
		</div>
	);
};

export default Cases;
