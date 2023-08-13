import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import './calendar.styles.css';
// import './../../../node_modules/react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const today = new Date();

const myEventsList = [
	{
		start: today,
		end: new Date(today.getTime() + 15 * 60 * 1000),
		title: 'Sk. Zaber Ahmed',
	},
	{
		start: new Date(today.getTime() + 2 * 60 * 60 * 1000),
		end: new Date(today.getTime() + 2.5 * 60 * 60 * 1000),
		title: 'Zinedine Zidan',
	},
	{
		start: moment(today).add(1, 'days').toDate(),
		end: moment(today).add(1, 'days').add(15, 'minutes').toDate(),
		title: 'Ulrich Jenstchura',
	},
	{
		start: moment(today).add(1, 'days').add(2, 'hours').toDate(),
		end: moment(today).add(1, 'days').add(2.5, 'hours').toDate(),
		title: 'Paul Labille Pogba',
	},
	{
		start: moment(today).add(1, 'days').add(3, 'hours').toDate(),
		end: moment(today).add(1, 'days').add(3.25, 'hours').toDate(),
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
				style={{ height: '35rem', width: '40rem' }}
				defaultDate={new Date()}
				defaultView="day"
				views={['day']}
				step={60}
				timeslots={1}
				// toolbar={false}
				formats={{
					timeGutterFormat: 'HH:mm A',
				}}
			/>
		</>
	);
};

export default AgendaCalendar;
