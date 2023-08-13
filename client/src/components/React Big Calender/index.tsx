import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
// import './../../../node_modules/react-big-calendar/lib/css/react-big-calendar.css';
import './../../../node_modules/react-big-calendar/lib/sass/styles';

const localizer = momentLocalizer(moment);

const myEventsList = [
	{
		start: new Date(),
		end: new Date(),
		title: 'Sample Event Zaber',
	},
];

const AgendaCalendar = () => {
	return (
		<div>
			<Calendar
				localizer={localizer}
				events={myEventsList}
				startAccessor="start"
				endAccessor="end"
				style={{ height: 500, width: 700 }}
			/>
		</div>
	);
};

export default AgendaCalendar;
