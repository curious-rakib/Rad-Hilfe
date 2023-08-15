import { Flex, Text, Image, Box, HStack, Stack, Heading, Divider, Center } from '@chakra-ui/react';
import logo from './../../../../assets/logo(Midnight Blue).svg';
import AgendaCalendar from '../../../../components/React Big Calender';
import moment from 'moment';
import { useEffect, useMemo, useState } from 'react';
import Casebox from '../../../../components/Case Box';
import { TechnicianGetAllCasesService } from '../../../../services/technician/case';
import { ObjectId } from 'mongoose';
import { useAppDispatch } from '../../../../app/hooks';
import { createCases } from '../../../../features/technician/slices/technicianCasesSlice';

export interface Case {
	_id?: string;
	caseNumber?: number;
	createdTime?: Date;
	status: string;
	cyclist: Cyclist | ObjectId | undefined;
	technician: ObjectId | undefined;
	bicycle: ObjectId | Bicycle | undefined;
	type: string;
	tags: string[];
	order?: ObjectId;
	note?: Note[];
	supportTime: SupportTime;
	interventionDetails: InterventionDetails;
	videoURL?: string;
	clientName: string;
}

export interface Note {
	text: string;
	timeStamp: Date;
}

export interface SupportTime {
	slotName: string;
	slotTime: string;
	timeStamp: Date;
}
export interface InterventionDetails {
	firstCall: string | Date;
	followUpCall: string | Date;
	supportQuality: Number;
}

export interface Cyclist {
	bicycle: string | ObjectId;
	cases: Case[];
	email: string;
	homeAddress: string;
	name: string;
	orders: string[] | ObjectId[];
	password: string;
	phone: string;
	plan: string;
	role: string;
	workAddress: string;
	__v: number;
	_id: ObjectId | string;
}

export interface Bicycle {
	bicycleParts: any[];
	brand: string;
	dailyCommute: {
		days: string[];
		unpavedRoad: number;
		totalDistance: number;
		_id: string | ObjectId;
	};
	isRevised: boolean;
	model: string;
	purchaseMonth: number;
	purchaseYear: number;
	recreationalCommute: {
		days: string[];
		activityType: string[];
		lengthOfRide: number;
		_id: string | ObjectId;
	};
	revisionMonth: number | null;
	revisionYear: number | null;
	serialNumber: string;
	totalHealth: number;
	__v: number;
	_id: string | ObjectId;
}

const Agenda = () => {
	const dispatch = useAppDispatch();
	const currentDate = useMemo(() => moment().format('Do MMMM, YYYY'), []);
	const currentDay = useMemo(() => moment().format(' dddd'), []);
	const [caseData, setCaseData] = useState<Case[]>([]);

	useEffect(() => {
		const fetchCaseData = async () => {
			try {
				const result = await TechnicianGetAllCasesService();

				dispatch(createCases(result));
				localStorage.setItem('cases', result);
				setCaseData(result);
			} catch (error) {
				console.error('Error while fetching!');
			}
		};
		fetchCaseData();
	}, []);

	const today = moment().startOf('day');
	const todayCases = caseData.filter((Case) => moment(Case.createdTime!).isSame(today, 'day'));
	const futureCases = caseData.filter((Case) => moment(Case.createdTime!).isAfter(today, 'day'));

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
				spacing={'3rem'}>
				<AgendaCalendar cases={todayCases} />

				<Box
					w={'30rem'}
					h={'75vh'}
					color={'secondary'}
					borderRadius={'.5rem'}
					bg={'#e2e8f0'}
					overflowY={'scroll'}
					__css={{
						scrollbarWidth: 'thin',
						scrollbarColor: 'var(--scrollbar-thumb) var(--scrollbar-bg)',
						'&::-webkit-scrollbar': {
							width: '6px',
						},
						'&::-webkit-scrollbar-thumb': {
							backgroundColor: 'var(--scrollbar-thumb)',
							borderRadius: '3px',
						},
						'&::-webkit-scrollbar-track': {
							backgroundColor: 'var(--scrollbar-bg)',
							borderRadius: '3px',
						},
					}}>
					<Center>
						<Text
							fontSize={'1.65rem'}
							fontWeight={'700'}
							p={'1rem'}>
							Upcoming Cases
						</Text>
					</Center>

					<Flex
						direction={'column'}
						alignItems={'center'}>
						{futureCases &&
							futureCases.map((Case, index) => {
								return (
									<Casebox
										key={index}
										caseType={Case.type}
										date={Case.createdTime!}
										clientName={Case.clientName}
										time={Case.supportTime.slotTime}
									/>
								);
							})}
					</Flex>
				</Box>
			</Stack>
		</Box>
	);
};

export default Agenda;
