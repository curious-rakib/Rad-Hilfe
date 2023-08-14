import { Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/table';
import './table.styles.css';
import { Box, Button, Center, Text } from '@chakra-ui/react';
import { statusColor } from '../../data/statusColor';
import FullHealthBar from '../Bicycle Full Health Bar';
// import { cases } from '../../pages/Technician/Dashboard/Dummy Data/dummyCaseData';
import { Case } from '../../pages/Technician/Dashboard/Agenda';

const TableComponent = ({ cases }: { cases: Case[] }) => {
	return (
		<>
			<TableContainer
				bg="primary"
				borderRadius={'.5rem'}
				boxShadow={'0 .5rem .5rem 0 rgba(0, 0, 0, 0.25);'}
				overflow={'hidden'}>
				<Table
					variant="simple"
					size="md">
					<Thead
						bg={'#e2e8f0'}
						height={'8.5vh'}>
						<Tr>
							{Object.keys(cases[0]).map((header, index) => {
								return (
									<>
										<Th
											maxWidth={'1vw'}
											p={'1vh 1vw 1vh 1vw'}
											key={index}
											borderBottom={'0'}
											textTransform="capitalize"
											letterSpacing={0}
											color="secondary"
											textAlign="center"
											fontFamily="Inter"
											fontSize="1.25rem"
											fontWeight="600"
											lineHeight="0.5rem">
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
									if (typeof value === 'string') {
										return (
											<Td
												key={index}
												p={'1rem 1rem 1rem 1rem'}
												w={'11.65vw'}
												borderBottom={'0'}>
												<Box
													bg={(statusColor as { [key: string]: string })[value] || 'transparent'}
													fontFamily="Inter"
													fontSize="1.20rem"
													fontStyle={'normal'}
													fontWeight={'400'}
													lineHeight={'2rem'}
													borderRadius={'1rem'}>
													<Center>{index === 2 ? <Text as="b">{value}</Text> : <Text>{value}</Text>}</Center>
												</Box>
											</Td>
										);
									} else if (typeof value === 'number') {
										return (
											<Td
												p={'1rem 1rem 1rem 1rem'}
												w={'11.65vw'}
												borderBottom={0}>
												<FullHealthBar health={value} />
											</Td>
										);
									} else {
										return (
											<Td
												w={'10vw'}
												p={'2.5vh 1vw 2.5vh 1vw'}
												key={index}
												borderBottom={'0'}>
												<Button
													_hover={{ background: '#d1fbbd', color: 'secondary', outlineColor: 'secondary' }}
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
		</>
	);
};

export default TableComponent;
