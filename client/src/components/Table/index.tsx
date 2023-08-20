import { Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/table';
import { Box, Button, Center, Text } from '@chakra-ui/react';
import { statusColor } from '../../data/statusColor';
import FullHealthBar from '../Bicycle Full Health Bar';
import { formatText } from './../../utils/formatText';
import { useAppSelector } from '../../app/hooks';
import { useNavigate } from 'react-router-dom';

const TableComponent = () => {
	const cases = useAppSelector((state: any) => state.presentableCases);
	const navigate = useNavigate();

	if (cases.length === 0) {
		return (
			<Text
				fontSize="1.5rem"
				textAlign="center"
				mt={8}>
				No cases found!
			</Text>
		);
	}

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
								if (header !== 'Case Id') {
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
								}
							})}
						</Tr>
					</Thead>
					<Tbody>
						{cases.map((Case: any, index: number) => (
							<Tr key={index}>
								{Object.values(Case).map((value, index) => {
									if (index !== 0) {
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
														<Center>{index === 3 ? <Text as="b">{formatText(value)}</Text> : <Text>{formatText(value)}</Text>}</Center>
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
														onClick={() => navigate(`/individual-case/`)}
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
