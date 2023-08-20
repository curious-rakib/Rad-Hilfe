import { Box, Button, Center, Flex, Text, Icon, Select } from '@chakra-ui/react';
import VideoContainer from '../../../../components/Video Container';
import TechnicianTab from '../../../../components/Tab component';
import TechnicianArticles from '../../../../components/Technician Articles';
import { AiOutlineRight } from 'react-icons/ai';
import { AiOutlineLeft } from 'react-icons/ai';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { useEffect, useState } from 'react';
import { TechnicianGetCaseByIdService } from '../../../../services/technician/case';
import { formatText } from '../../../../utils/formatText';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch } from '../../../../app/hooks';
import { bikeDetails } from '../../../../features/cyclist/bikeDetails-slice';
import { BsBookmark, BsBookmarkFill } from 'react-icons/bs';
import TechnicianAccordian from '../../../../components/TechnicianAccordian';
import VideoCarousol from '../../../../components/VideoCarousol';
import ActiveTags from '../../../../components/ActiveTags';

const articles = [
	{
		title: 'https://www.thecrucible.org/guides/bike-maintenance/repair-a-bike/',
		author: 'John Smith',
		date: '2023-08-16',
	},
	{
		title: 'https://www.wikihow.com/Fix-Brakes-on-a-Bike',
		author: 'Jane Doe',
		date: '2023-08-15',
	},
	{
		title: 'https://www.cycleplan.co.uk/cycle-savvy/how-to-adjust-bike-brakes/',
		author: 'Alex Johnson',
		date: '2023-08-14',
	},
];

const IndividualCase = () => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const [Case, setCase] = useState<any[]>([]);
	const [bookMark, setBookMark] = useState<boolean>(false);
	const [bicycleParts, setBicycleParts] = useState<any[]>([]);
	const id = useParams();

	useEffect(() => {
		const fetchIndividualCaseData = async () => {
			try {
				const result = await TechnicianGetCaseByIdService('64e0aa916996e744b1cfa9c4');

				setCase(result);
				setBicycleParts(result[0].bicycle.bicycleParts);
				dispatch(bikeDetails(result[0].bicycle));
			} catch (error) {
				console.error('Error in component while fetching !');
			}
		};
		fetchIndividualCaseData();
	}, [id]);

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
							<Text fontWeight={'700'}>#{Case[0].caseNumber}</Text>
						</Box>
						<Box
							fontSize={'1.40rem'}
							textAlign={'center'}>
							<Text whiteSpace={'nowrap'}> Case Status</Text>
							<Text fontWeight={'700'}>{formatText(Case[0].status)}</Text>
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
							<Text fontWeight={'700'}>{formatText(Case[0].bicycle.brand)}</Text>
						</Box>
						<Box
							fontSize={'1.40rem'}
							textAlign={'center'}>
							<Text> Bike Model</Text>
							<Text fontWeight={'700'}>{formatText(Case[0].bicycle.model)}</Text>
						</Box>
						<Box
							fontSize={'1.30rem'}
							bg={'red'}
							color={'primary'}
							rounded={'xl'}
							_hover={{ outline: '1px solid red', backgroundColor: 'primary', color: 'red' }}>
							<Select
								fontWeight={'700'}
								defaultValue="default">
								<option
									value="default"
									disabled>
									Select status
								</option>
								<option
									value="option1"
									style={{ color: '#C1FAA6' }}>
									Raise
								</option>
								<option value="option2">Close</option>
							</Select>
						</Box>
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
									<ActiveTags></ActiveTags>
									<Box
										ml={'2rem'}
										w={'30rem'}
										mt={5}>
										{/* <TechnicianTab /> */}
										<TechnicianAccordian></TechnicianAccordian>
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
										<div
											onClick={() => setBookMark(!bookMark)}
											style={{ fontSize: '25px', marginLeft: '1rem', verticalAlign: 'top', marginTop: '-10rem' }}>
											{bookMark ? <BsBookmarkFill /> : <BsBookmark />}
										</div>
										<Button
											ml={'-1.7rem'}
											bg={'#d9d9d9'}
											borderRadius={'45%'}
											color={'secondary'}>
											<AiOutlineRight size={20} />
										</Button>
									</Flex>

									<TechnicianArticles articles={articles} />

									{/* <Button
									m={2}
									borderRadius={'.75rem'}
									bg={'secondary'}
									_hover={{ outline: '1px solid #001f3f' }}>
									Add Suggestions
								</Button> */}
								</Flex>
							</Box>
						</Flex>
					</Box>
				</Box>
			) : (
				<> Couldn't Get Case Details!</>
			)}
		</>
	);
};

export default IndividualCase;
