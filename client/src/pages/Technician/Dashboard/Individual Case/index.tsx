import { Box, Button, Center, Flex, Text, Icon } from '@chakra-ui/react';
import VideoContainer from '../../../../components/Video Container';
import TechnicianTab from '../../../../components/Tab component';
import TechnicianArticles from '../../../../components/Technician Articles';
import { AiOutlineRight } from 'react-icons/ai';
import { AiOutlineLeft } from 'react-icons/ai';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { useEffect, useState } from 'react';
import { TechnicianGetCaseByIdService } from '../../../../services/technician/case';
import { Case } from '../Agenda';
import { formatText } from '../../../../utils/formatText';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../../app/hooks';
import { bikeDetails } from '../../../../features/cyclist/bikeDetails-slice';

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
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const [Case, setCase] = useState<any[]>([]);
	const [bicycleParts, setBicycleParts] = useState<any[]>([]);
	const id = '64dc5a3bccaa7c80383f3ef7';

	useEffect(() => {
		const fetchIndividualCaseData = async () => {
			try {
				const result = await TechnicianGetCaseByIdService(id);
				// console.log('case details: ', result[0].bicycle);
				setCase(result);
				setBicycleParts(result[0].bicycle.bicycleParts);
				dispatch(bikeDetails(result[0].bicycle));
			} catch (error) {
				console.error('Error in component while fetching !');
			}
		};
		fetchIndividualCaseData();
	}, []);

	return (
		<>
			{Case.length > 0 ? (
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
							<Text whiteSpace={'nowrap'}> Case No</Text>
							<Text fontWeight={'700'}> #{Case[0].caseNumber}</Text>
						</Box>
						<Box
							fontSize={'1.40rem'}
							textAlign={'center'}>
							<Text whiteSpace={'nowrap'}> Case Status</Text>
							<Text fontWeight={'700'}> {formatText(Case[0].status)} </Text>
						</Box>
						<Box
							fontSize={'1.40rem'}
							textAlign={'center'}>
							<Text whiteSpace={'nowrap'}> Case Type</Text>
							<Text fontWeight={'700'}>{formatText(Case[0].type)}</Text>
						</Box>
						<Box
							fontSize={'1.40rem'}
							textAlign={'center'}>
							<Text whiteSpace={'nowrap'}> Bike Brand</Text>
							<Text fontWeight={'700'}> {formatText(Case[0].bicycle.brand)}</Text>
						</Box>
						<Box
							fontSize={'1.40rem'}
							textAlign={'center'}>
							<Text> Bike Model</Text>
							<Text fontWeight={'700'}>{formatText(Case[0].bicycle.model)}</Text>
						</Box>
						<Button
							fontSize={'1.30rem'}
							bg={'red'}
							color={'primary'}
							_hover={{ outline: '1px solid red', backgroundColor: 'primary', color: 'red' }}>
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
										bg={'secondary'}
										_hover={{ outline: '1px solid #001f3f' }}>
										Add Suggestions
									</Button>
								</Flex>
							</Box>
						</Flex>
					</Box>
				</Box>
			) : (
				<> No case for you !</>
			)}
		</>
	);
};

export default IndividualCase;
