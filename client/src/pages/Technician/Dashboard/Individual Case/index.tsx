import { Box, Button, Center, Flex, Text, Icon } from '@chakra-ui/react';
import VideoContainer from '../../../../components/Video Container';
import TechnicianTab from '../../../../components/Tab component';
import TechnicianArticles from '../../../../components/Technician Articles';
import { AiOutlineRight } from 'react-icons/ai';
import { AiOutlineLeft } from 'react-icons/ai';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { useEffect, useState } from 'react';

const articles = [
	{
		title: 'Getting Started with React Hooks',
		author: 'John Smith',
		date: '2023-08-16',
	},
	{
		title: 'Introduction to Machine Learning Algorithms',
		author: 'Jane Doe',
		date: '2023-08-15',
	},
	{
		title: 'The Art of Writing Clean Code',
		author: 'Alex Johnson',
		date: '2023-08-14',
	},
	{
		title: 'Exploring New Frontiers in Space Travel',
		author: 'Emily Williams',
		date: '2023-08-13',
	},
];

const IndividualCase = () => {
	const [Case, setCase] = useState([]);

	useEffect(() => {
		const fetchIndividualCaseData = async () => {
			try {
				const result = await
			} catch (error) {
				console.error('Error in component while fetching !');
			}
		};
		fetchIndividualCaseData();
	}, []);

	return (
		<Box color={'secondary'}>
			<Flex
				gap={'4rem'}
				m={'1rem'}
				justify={'center'}
				alignItems={'center'}>
				<Button
					bg={'#d9d9d9'}
					borderRadius={'45%'}
					color={'secondary'}>
					<Icon as={IoMdArrowRoundBack} />
				</Button>
				<Box
					fontSize={'1.40rem'}
					textAlign={'center'}>
					<Text> Case No</Text>
					<Text fontWeight={'700'}> #2354</Text>
				</Box>
				<Box
					fontSize={'1.40rem'}
					textAlign={'center'}>
					<Text> Case Status</Text>
					<Text fontWeight={'700'}> Open</Text>
				</Box>
				<Box
					fontSize={'1.40rem'}
					textAlign={'center'}>
					<Text> Case Type</Text>
					<Text fontWeight={'700'}> Active</Text>
				</Box>
				<Box
					fontSize={'1.40rem'}
					textAlign={'center'}>
					<Text> Bike Brand</Text>
					<Text fontWeight={'700'}> Veloce</Text>
				</Box>
				<Box
					fontSize={'1.40rem'}
					textAlign={'center'}>
					<Text> Bike Model</Text>
					<Text fontWeight={'700'}> Legion 50</Text>
				</Box>
				<Button
					fontSize={'1.30rem'}
					bg={'red'}
					color={'primary'}>
					<Text fontWeight={'700'}>Raise Case</Text>
				</Button>
			</Flex>
			<Box m={'.5rem'}>
				<Flex>
					<Box w={'50rem'}>
						<Flex direction={'column'}>
							<Box
								w={'50%'}
								ml={'6rem'}>
								<VideoContainer bookMark={false} />
							</Box>
							<Box
								ml={'2rem'}
								w={'30rem'}
								mt={5}>
								<TechnicianTab />
							</Box>
						</Flex>
					</Box>
					<Box
						w={'35rem'}
						boxShadow={'2xl'}>
						<Flex
							mt={'1rem'}
							direction={'column'}
							alignItems={'center'}
							justify={'center'}>
							<Flex
								alignItems={'center'}
								w={'100%'}
								justify={'center'}>
								<Button
									mr={'1rem'}
									bg={'#d9d9d9'}
									borderRadius={'45%'}
									color={'secondary'}>
									<AiOutlineLeft size={20} />
								</Button>
								<Box w={'60%'}>
									<VideoContainer bookMark={true} />
								</Box>
								<Button
									ml={'1rem'}
									bg={'#d9d9d9'}
									borderRadius={'45%'}
									color={'secondary'}>
									<AiOutlineRight size={20} />
								</Button>
							</Flex>

							<TechnicianArticles articles={articles} />

							<Button
								m={2}
								borderRadius={'.75rem'}
								bg={'secondary'}>
								Add Suggestions
							</Button>
						</Flex>
					</Box>
				</Flex>
			</Box>
		</Box>
	);
};

export default IndividualCase;
