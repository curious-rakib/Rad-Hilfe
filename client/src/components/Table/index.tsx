import { TableCaption, Table, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from '@chakra-ui/table';
import './table.styles.css';
import { dummyCases } from '../../pages/Dashboard/Dummy Data/dummyCaseData';
import { Flex } from '@chakra-ui/react';
import FilterAccordionComponent from '../Filter Accordion';
import SearchBox from '../Search Box';

const TableComponent = () => {
	return (
		<>
			<TableContainer className="table-container">
				<Flex
					width={'100%'}
					justifyContent={'space-between'}
					p={2}>
					<SearchBox />
					<FilterAccordionComponent />
				</Flex>
				<Table
					variant="simple"
					size="lg">
					<Thead className="table-header-container">
						<Tr>
							<Th className="table-head">Case No</Th>
							<Th className="table-head">Case Type</Th>
							<Th className="table-head">Status</Th>
							<Th className="table-head">Client Name</Th>
							<Th className="table-head">Date Created</Th>
							<Th className="table-head">Bicycle Health</Th>
							<Th className="table-head">Action</Th>
						</Tr>
					</Thead>
					<Tbody>
						{dummyCases.map((dummyCase, index) => (
							<Tr key={index}>
								<Td className="table-data">{dummyCase['Case No']}</Td>
								<Td className="table-data">{dummyCase['Case Type']}</Td>
								<Td className="table-data">
									<strong>{dummyCase['Status']}</strong>
								</Td>
								<Td className="table-data">{dummyCase['Client Name']}</Td>
								<Td className="table-data">{dummyCase['Date Created']}</Td>
								<Td className="table-data">{dummyCase['Bicycle Health']}</Td>
								<Td></Td>
							</Tr>
						))}
					</Tbody>
				</Table>
			</TableContainer>
		</>
	);
};

export default TableComponent;
