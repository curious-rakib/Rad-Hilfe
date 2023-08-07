import { TableCaption, Table, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from '@chakra-ui/table';
import './table.styles.css';
import { cases } from '../../pages/Dashboard/Dummy Data/dummyCaseData';
import { Flex } from '@chakra-ui/react';
import SearchBox from '../Search Box';
import FilterComponent from '../Filter';
import { Button } from '@chakra-ui/react';
const TableComponent = () => {
	return (
		<>
			<TableContainer className="table-container">
				<Flex
					width={'100%'}
					justifyContent={'space-between'}
					p={2}>
					<SearchBox />
					<Flex
						mt={5}
						mr={5}>
						<FilterComponent
							name={'Status'}
							options={['Open', 'In Progress', 'Closed']}
							width={'35'}
						/>
						<FilterComponent
							name={'Case Type'}
							options={['Active', 'Passive']}
							width={'49'}
						/>
					</Flex>
				</Flex>
				<Table
					variant="simple"
					size="lg">
					<Thead className="table-header-container">
						<Tr>
							{Object.keys(cases[0]).map((header, index) => {
								return (
									<>
										<Th
											maxWidth={'4vw'}
											p={'1.5vh 1vw 1.5vh 1vw'}
											key={index}
											borderBottom={'0'}
											className="table-head">
											{header}
										</Th>
									</>
								);
							})}
						</Tr>
					</Thead>
					<Tbody>
						{cases.map((Case, index) => (
							<Tr key={index}>
								{Object.values(Case).map((value, index) => {
									if (value) {
										return (
											<>
												<Td
													maxWidth={'4vw'}
													p={'4vh 1vw 4vh 1vw'}
													key={index}
													borderBottom={'0'}
													className="table-data">
													{value}
												</Td>
											</>
										);
									} else {
										return (
											<Td
												maxWidth={'4vw'}
												p={'4vh 1vw 4vh 1vw'}
												key={index}
												borderBottom={'0'}
												className="table-data">
												<Button
													w={'10'}
													size={'10'}
													bg={'secondary'}
													color={'accent'}>
													Raise
												</Button>
											</Td>
										);
									}
								})}
							</Tr>
						))}
					</Tbody>
				</Table>
			</TableContainer>
		</>
	);
};

export default TableComponent;
