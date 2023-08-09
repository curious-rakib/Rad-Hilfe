import { Box, Flex, HStack, Heading, Spacer, Stack, Text, VStack, Image } from '@chakra-ui/react';
import TableComponent from '../../../components/Table';
import logo from './../../../assets/logo.svg';
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
			<Box //parent div
				bg="primary"
				p={2}
				color="secondary"
				h={'100vh'}
				w={'87vw'}>
				<VStack>
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
								fontSize="24px"
								fontFamily={'Inter'}>
								Support Cases
							</Text>
							<Text
								as="b"
								fontSize="20px"
								color={'#E180E7'}
								fontFamily={'Inter'}>
								Total:{cases.length}
							</Text>
						</Flex>
						<Flex gap={3}>
							<Text
								as="b"
								fontSize="48px"
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
					{/* <PaginationComponent
							currentPage={1}
							totalPages={3}
							onPageChange={undefined}
						/> */}
				</VStack>
			</Box>
		</>
	);
};

export default Cases;
