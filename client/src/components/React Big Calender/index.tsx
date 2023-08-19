import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import './calendar.styles.css';
import { useEffect, useState } from 'react';
import { Case } from '../../interfaces/case.interface';
const localizer = momentLocalizer(moment);

export interface Event {
	start: Date;
	end: Date;
	title: string;
}

const AgendaCalendar = ({ cases }: { cases: Case[] }) => {
	const [myEventsList, setMyEventList] = useState<Event[]>([]);

	useEffect(() => {
		const events = cases
			.filter((caseItem) => caseItem.supportTime)
			.map((caseItem) => {
				const [startTimeStr, endTimeStr] = caseItem.supportTime.slotTime.split('-');
				const startTime = moment(startTimeStr.trim(), 'HH:mm').toDate();
				const endTime = moment(endTimeStr.trim(), 'HH:mm').toDate();

				return {
					start: startTime,
					end: endTime,
					title: `Call with ${caseItem.clientName} \n ${caseItem.type} case`,
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
				min={moment().startOf('day').add(7, 'hours').toDate()}
				max={moment().startOf('day').add(20, 'hours').toDate()}
				defaultView="day"
				views={['day']}
				step={60}
				timeslots={1}
				toolbar={false}
				formats={{
					timeGutterFormat: 'HH:mm',
				}}
			/>
		</>
	);
};

export default AgendaCalendar;
