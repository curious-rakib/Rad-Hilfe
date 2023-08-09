import { Box, Flex, HStack, Heading, Spacer, Stack, Text, VStack, Image } from '@chakra-ui/react';
import TableComponent from '../../../components/Table';
import logo from './../../../assets/logo(Midnight Blue).svg';
import './cases.styles.css';
import { cases } from '../Dummy Data/dummyCaseData';
import SearchBox from '../../../components/Search Box';
import FilterComponent from '../../../components/Filter';
import PaginationComponent from '../../../components/Pagination';
import { useState } from 'react';

const Cases = () => {
	const [filteredCases, setFilteredCases] = useState(cases);

	const handleStatusFilter = (selectedStatus: string) => {
		const filteredData = cases.filter((caseItem) => {
			console.log(selectedStatus);
			return selectedStatus.includes(caseItem['Status']);
		});
		setFilteredCases(filteredData);
	};
	const handleTypeFilter = (selectedType: string) => {
		const filteredData = cases.filter((caseItem) => {
			return selectedType.includes(caseItem['Case Type']);
		});
		setFilteredCases(filteredData);
	};

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
				<Box mt={'2.5rem'}>
					<PaginationComponent
						currentPage={1}
						totalPages={3}
						onPageChange={undefined}
					/>
				</Box>
			</VStack>
		</>
	);
};

export default Cases;
