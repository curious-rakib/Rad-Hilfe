import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import './calendar.styles.css';
// import './../../../node_modules/react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const today = new Date();

const myEventsList = [
	{
		start: today,
		end: new Date(today.getTime() + 15 * 60 * 1000), // Adding 15 minutes to start time
		title: 'Sk. Zaber Ahmed',
	},
	{
		start: new Date(today.getTime() + 2 * 60 * 60 * 1000), // Adding 2 hours to current time
		end: new Date(today.getTime() + 2.5 * 60 * 60 * 1000), // Adding 2.5 hours to current time
		title: 'Zinedine Zidan',
	},
	{
		start: moment(today).add(1, 'days').toDate(),
		end: moment(today).add(1, 'days').add(15, 'minutes').toDate(), // Adding 15 minutes to start time
		title: 'Ulrich Jenstchura',
	},
	{
		start: moment(today).add(1, 'days').add(2, 'hours').toDate(), // Adding 2 hours to start time
		end: moment(today).add(1, 'days').add(2.5, 'hours').toDate(), // Adding 2.5 hours to start time
		title: 'Paul Labille Pogba',
	},
	{
		start: moment(today).add(1, 'days').add(3, 'hours').toDate(), // Adding 3 hours to start time
		end: moment(today).add(1, 'days').add(3.25, 'hours').toDate(), // Adding 3.25 hours to start time
		title: 'Richard Feynnman',
	},
];

const AgendaCalendar = () => {
	return (
		<>
			<Calendar
				selectable
				localizer={localizer}
				events={myEventsList}
				startAccessor="start"
				endAccessor="end"
				style={{ height: '30rem', width: '40rem' }}
				defaultDate={new Date()}
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
