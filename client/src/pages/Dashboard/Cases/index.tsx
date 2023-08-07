import { Flex, Heading } from '@chakra-ui/react';
import TableComponent from '../../../components/Table';
import './cases.styles.css';
const Cases = () => {
	return (
		<div className="cases-container">
			<Flex
				justifyContent={'space-between'}
				color={'secondary'}>
				<Heading
					as="h3"
					size="md">
					Support Cases
				</Heading>
				<Heading>Slipstream</Heading>
			</Flex>
			<TableComponent />
		</div>
	);
};

export default Cases;
