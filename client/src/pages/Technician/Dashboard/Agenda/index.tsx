import { Flex, Text, Image, Box } from '@chakra-ui/react';
import logo from './../../../../assets/logo(Midnight Blue).svg';
import AgendaCalendar from '../../../../components/React Big Calender';
import moment from 'moment';

const Agenda = () => {
	const currentDate = moment().format('Do MMMM, YYYY');
	const currentDay = moment().format(' dddd');

	return (
		<Box>
			<Flex
				color={'secondary'}
				w={'100%'}
				direction={'row'}
				p={2}
				m={2}
				justifyContent={'space-between'}>
				<Flex
					direction={'column'}
					justify={'flex-start'}>
					<Text
						color={'secondary'}
						as="b"
						fontSize="1.5rem"
						fontFamily={'Inter'}>
						{currentDate}
					</Text>
					<Text
						color={'secondary'}
						as="b"
						fontSize="1.25rem"
						fontFamily={'Inter'}>
						{currentDay}
					</Text>
					<Text
						as="b"
						fontSize="1.25rem"
						color={'#E180E7'}
						fontFamily={'Inter'}>
						Total:{'10'}
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
			<Flex>
				<AgendaCalendar />
				<Box color={'secondary'}>Zaber</Box>
			</Flex>
		</Box>
	);
};

export default Agenda;
