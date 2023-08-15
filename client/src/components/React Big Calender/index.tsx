import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import './calendar.styles.css';
import { Case } from '../../pages/Technician/Dashboard/Agenda';
import { useEffect, useState } from 'react';
// import './../../../node_modules/react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

// const today = new Date();

// const myEventsList = [
// 	{
// 		start: today,
// 		end: new Date(today.getTime() + 15 * 60 * 1000),
// 		title: 'Sk. Zaber Ahmed',
// 	},
// 	{
// 		start: new Date(today.getTime() + 2 * 60 * 60 * 1000),
// 		end: new Date(today.getTime() + 2.5 * 60 * 60 * 1000),
// 		title: 'Zinedine Zidan',
// 	},
// 	{
// 		start: moment(today).add(1, 'days').toDate(),
// 		end: moment(today).add(1, 'days').add(15, 'minutes').toDate(),
// 		title: 'Ulrich Jenstchura',
// 	},
// 	{
// 		start: moment(today).add(1, 'days').add(2, 'hours').toDate(),
// 		end: moment(today).add(1, 'days').add(2.5, 'hours').toDate(),
// 		title: 'Paul Labille Pogba',
// 	},
// 	{
// 		start: moment(today).add(1, 'days').add(3, 'hours').toDate(),
// 		end: moment(today).add(1, 'days').add(3.25, 'hours').toDate(),
// 		title: 'Richard Feynnman',
// 	},
// ];
export interface Event {
	start: Date;
	end: Date;
	title: string;
}

const AgendaCalendar = ({ cases }: { cases: Case[] }) => {
	const [myEventsList, setMyEventList] = useState<Event[]>([]);

	useEffect(() => {
		const events = cases
			.filter((caseItem) => caseItem.supportTime) // Filter out cases without supportTime
			.map((caseItem) => {
				const [startTimeStr, endTimeStr] = caseItem.supportTime.slotTime.split('-');
				const startTime = moment(startTimeStr.trim(), 'HH:mm').toDate();
				const endTime = moment(endTimeStr.trim(), 'HH:mm').toDate();

				return {
					start: startTime,
					end: endTime,
					title: `Client Name: ${caseItem.clientName} has a ${caseItem.type} case`,
				};
			});

		setMyEventList(events);
	}, [cases]);

	return (
		<>
			<Calendar
				selectable
				localizer={localizer}
				events={myEventsList}
				startAccessor="start"
				endAccessor="end"
				style={{ height: '75vh', width: '40rem' }}
				defaultDate={new Date()}
				defaultView="day"
				views={['day']}
				step={60}
				timeslots={1}
				toolbar={false}
				formats={{
					timeGutterFormat: 'HH:mm A',
				}}
			/>
		</>
	);
};

export default AgendaCalendar;
