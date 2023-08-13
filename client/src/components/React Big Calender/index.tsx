import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import './calendar.styles.css';
// import './../../../node_modules/react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const myEventsList = [
	{
		start: new Date(),
		end: new Date(),
		title: 'Sample Event Zaber',
	},
	{
		start: moment(new Date()).add(1, 'days').toDate(),
		end: moment(new Date()).add(1, 'days').toDate(),
		title: 'Sample Event 2',
	},
	{
		start: moment(new Date()).add(2, 'days').toDate(),
		end: moment(new Date()).add(2, 'days').toDate(),
		title: 'Sample Event 3',
	},
	{
		start: moment(new Date()).add(3, 'days').toDate(),
		end: moment(new Date()).add(3, 'days').toDate(),
		title: 'Sample Event 4',
	},
	{
		start: moment(new Date()).add(4, 'days').toDate(),
		end: moment(new Date()).add(4, 'days').toDate(),
		title: 'Sample Event 5',
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
				style={{ height: 500, width: 800 }}
				defaultDate={new Date()}
				defaultView="day"
				views={['day']}
				step={60}
				toolbar={false}
			/>
		</>
	);
};

export default AgendaCalendar;
