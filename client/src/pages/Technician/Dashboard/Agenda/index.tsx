import { Flex, Text, Image, Box, HStack, Stack, Heading, Divider, Center } from '@chakra-ui/react';
import logo from './../../../../assets/logo(Midnight Blue).svg';
import AgendaCalendar from '../../../../components/React Big Calender';
import moment from 'moment';
import { useMemo } from 'react';

const caseData = [
	{
		caseType: 'Active',
		date: 'Aug 13, 2023',
		clientName: 'Mr. Heimdall',
		time: '2:00-3:00',
	},
	{
		caseType: 'Pending',
		date: 'Aug 14, 2023',
		clientName: 'Ms. Freyja',
		time: '10:00-11:30',
	},
	{
		caseType: 'Closed',
		date: 'Aug 15, 2023',
		clientName: 'Mr. Odin',
		time: '15:30-16:30',
	},
];

const Agenda = () => {
	const currentDate = useMemo(() => moment().format('Do MMMM, YYYY'), []);
	const currentDay = useMemo(() => moment().format(' dddd'), []);

	return (
		<Box>
			<Flex
				color={'secondary'}
				w={'100%'}
				direction={'row'}
				p={2}
				m={2}
				justifyContent={'space-between'}>
				<Flex direction={'column'}>
					<Text
						color={'secondary'}
						as="b"
						fontSize="1.5rem"
						fontFamily={'Inter'}>
						{currentDate}
					</Text>
					<Text
						color={'secondary'}
						// as="b"
						fontSize="1.5rem"
						fontFamily={'Inter'}>
						{currentDay}
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
			<Stack
				mt={'2rem'}
				p={'1rem'}
				color={'secondary'}
				direction={'row'}
				spacing={'1rem'}>
				<AgendaCalendar />
				<Box
					w={'33rem'}
					color={'secondary'}
					borderRadius={'.5rem'}
					bg={'#e2e8f0'}>
					<Center>
						<Text
							fontSize={'1.65rem'}
							fontWeight={'700'}
							p={'1rem'}>
							Upcoming
						</Text>
					</Center>

					<Divider
						size={'1rem'}
						orientation={'horizontal'}
						borderColor={'secondary'}
					/>
					{/*
					{caseData.map((Case,index)=>{
						return (
							<Casebox key={index} caseType={Case.caseType} case  />
						)
					})} */}
				</Box>
			</Stack>
		</Box>
	);
};

export default Agenda;
