import { Box, Flex, Text, VStack, Image } from '@chakra-ui/react';
import TableComponent from '../../../../components/Table';
import logo from './../../../../assets/logo(Midnight Blue).svg';
import SearchBox from '../../../../components/Search Box';
import FilterComponent from '../../../../components/Filter';
import PaginationComponent from '../../../../components/Pagination';
import { useEffect, useState } from 'react';
import { Case } from './../../../../interfaces/case.interface';
import { TechnicianGetAllCasesService } from '../../../../services/technician/case';
import { createCases } from '../../../../features/technician/slices/technicianCasesSlice';
import { useAppDispatch } from '../../../../app/hooks';
import { createPresentableCases } from '../../../../features/technician/slices/casesPresentationSlice';
import moment from 'moment';

export const extractCaseData = (cases: Case[]) => {
	return cases.map((caseItem: any) => ({
		'Case Id': caseItem._id,
		'Case No': `#${caseItem.caseNumber}`,
		'Case Type': caseItem.type,
		Status: caseItem.status,
		'Client Name': caseItem.cyclist?.name,
		'Date Created': moment(caseItem.createdTime).format('DD-MMM-YYYY'),
		'Bicycle Health': caseItem.bicycle?.totalHealth,
		Action: null,
	}));
};

const Cases = () => {
	const dispatch = useAppDispatch();
	const [cases, setCases] = useState<Case[]>([]);

	const handleStatusFilter = (selectedStatus: string) => {
		if (selectedStatus.length === 0) {
			dispatch(createPresentableCases(extractCaseData(cases)));
			return;
		}

		const filteredData = cases.filter((caseItem: Case) => {
			return caseItem.status === selectedStatus;
		});
		console.log(filteredData);
		dispatch(createPresentableCases(extractCaseData(filteredData)));
	};
	const handleTypeFilter = (selectedType: string) => {
		if (selectedType.length === 0) {
			dispatch(createPresentableCases(extractCaseData(cases)));
			return;
		}
		const filteredData = cases.filter((caseItem: Case) => {
			return caseItem.type === selectedType;
		});
		console.log(filteredData);
		dispatch(createPresentableCases(extractCaseData(filteredData)));
	};

	useEffect(() => {
		const fetchCaseData = async () => {
			try {
				const result = await TechnicianGetAllCasesService();

				dispatch(createCases(result));
				dispatch(createPresentableCases(extractCaseData(result)));

				setCases(result);
			} catch (error) {
				console.error('Error while fetching!');
			}
		};
		fetchCaseData();
	}, []);

	return (
		<>
			<VStack color={'secondary'}>
				<Flex
					w={'100%'}
					direction={'row'}
					p={2}
					m={2}
					justifyContent={'space-between'}>
					<Flex
						direction={'column'}
						justify={'flex-start'}>
						<Text
							as="b"
							fontSize="1.5rem"
							fontFamily={'Inter'}>
							Support Cases
						</Text>
						<Text
							as="b"
							fontSize="1.25rem"
							color={'#E180E7'}
							fontFamily={'Inter'}>
							Total:{cases.length}
						</Text>
					</Flex>
					<Flex gap={'.45rem'}>
						<Text
							as="b"
							fontSize="3rem"
							fontFamily={'Inter'}>
							SlipStream
						</Text>

						<Image
							src={logo}
							alt="Slipstream logo"></Image>
					</Flex>
				</Flex>

				<Box
					w={'100%'}
					h={'100%'}>
					<Flex
						w={'100%'}
						direction={'row'}
						justifyContent={'space-between'}
						alignItems={'center'}
						mb={2}>
						<SearchBox />
						<Flex mr={3}>
							<FilterComponent
								name={'Status'}
								options={['Open', 'In Progress', 'Closed']}
								onChange={handleStatusFilter}
							/>
							<FilterComponent
								name={'Case Type'}
								options={['Active', 'Passive']}
								onChange={handleTypeFilter}
							/>
						</Flex>
					</Flex>
					<TableComponent />
				</Box>
				<Box
					h={'6vh'}
					mt={'1rem'}>
					<PaginationComponent
						currentPage={1}
						totalPages={Math.floor(cases.length / 5)}
						onPageChange={undefined}
					/>
				</Box>
			</VStack>
		</>
	);
};

export default Cases;
