export interface TimeSlot {
	slotName: string;
	slotTime: string;
	choosen: boolean;
}
export function timeSlotGenerator(start: number, end: number) {
	const timeSlots: TimeSlot[] = [];
	for (let hour = 7; hour <= 20; hour++) {
		const slotStartTime = `${hour.toString().padStart(2, '0')}:00`;
		const slotEndTime = `${(hour + 1).toString().padStart(2, '0')}:00`;
		const slotName = String.fromCharCode(65 + hour - 7); // A, B, C, ...
		const slotTime = `${slotStartTime}-${slotEndTime}`;

		timeSlots.push({
			slotName: slotName,
			slotTime: slotTime,
			choosen: false,
		});
	}

	return timeSlots;
}
