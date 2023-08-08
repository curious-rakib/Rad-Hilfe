import { TableCaption, Table, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from '@chakra-ui/table';
import './table.styles.css';
import { cases } from '../../pages/Dashboard/Dummy Data/dummyCaseData';
import { Box, Button, Center, Text } from '@chakra-ui/react';
import { statusColor } from '../../data/statusColor';

const TableComponent = () => {
	return (
		<>
			<TableContainer
				bg="primary"
				w={'100vw'}
				borderRadius={'5px'}
				boxShadow={'0px 4px 4px 0px rgba(0, 0, 0, 0.25);'}>
				{/* <Flex
					justifyContent={'space-between'}
					p={2}>
					<SearchBox />
					<Flex
						mt={5}
						mr={5}>
						<FilterComponent
							name={'Status'}
							options={['Open', 'In Progress', 'Closed']}
						/>
						<FilterComponent
							name={'Case Type'}
							options={['Active', 'Passive']}
						/>
					</Flex>
				</Flex> */}

				<Table
					variant="simple"
					size="md"
					w={'100vw'}>
					<Thead
						bg={'#e2e8f0'}
						height={'11.5vh'}
						w={'100vw'}>
						<Tr>
							{Object.keys(cases[0]).map((header, index) => {
								return (
									<>
										<Th
											maxWidth={'2vw'}
											p={'1.5vh 1vw 1.5vh 1vw'}
											key={index}
											borderBottom={'0'}
											textTransform="capitalize"
											letterSpacing={0}
											color="secondary"
											textAlign="center"
											fontFamily="Inter"
											fontSize="20px"
											fontStyle="normal"
											fontWeight="600"
											lineHeight="20px">
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
											<Td
												borderRadius={'10px'}
												p={'2.5vh 1vw 2.5vh 1vw'}
												maxWidth={'1vw'}
												borderBottom={'0'}>
												<Box
													bg={(statusColor as { [key: string]: string })[value] || 'transparent'}
													fontFamily="Inter"
													fontSize="18px"
													fontStyle={'normal'}
													fontWeight={'400'}
													lineHeight={'32px'}
													borderRadius={'10px'}>
													<Center>{index === 2 ? <Text as="b">{value}</Text> : <Text>{value}</Text>}</Center>
												</Box>
											</Td>
										);
									} else {
										return (
											<Td
												maxWidth={'1vw'}
												p={'2.5vh 1vw 2.5vh 1vw'}
												key={index}
												borderBottom={'0'}>
												<Button
													_hover={{ background: 'primary', color: '#93ef67', outlineColor: 'secondary' }}
													w={'20'}
													h={'10'}
													size={'10'}
													mr={'2'}
													borderRadius={15}
													bg={'secondary'}
													color={'accent'}>
													Raise
												</Button>
												<Button
													_hover={{ background: 'primary', color: 'secondary', outlineColor: 'third' }}
													w={'20'}
													h={'10'}
													size={'10'}
													bg={'third'}
													borderRadius={15}
													color={'secondary'}>
													View
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
			{/* <PaginationComponent
				currentPage={1}
				totalPages={10}
				onPageChange={undefined}
			/> */}
		</>
	);
};

export default TableComponent;
