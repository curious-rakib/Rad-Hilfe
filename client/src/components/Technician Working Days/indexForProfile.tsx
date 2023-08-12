import { Circle, HStack, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

interface Day {
	id: string;
	label: string;
	chosen: boolean;
}
const TechnicianWorkingDays = ({ colorScheme, outline }: { colorScheme: string; outline: boolean }) => {
	const [sevenDays, setSevenDays] = useState<Day[]>([]);
	const allDays = [
		{
			label: 'M',
			id: 'Mon',
			chosen: false,
		},
		{
			label: 'T',
			id: 'Tues',
			chosen: false,
		},
		{
			label: 'W',
			id: 'Wed',
			chosen: false,
		},
		{
			label: 'T',
			id: 'Thurs',
			chosen: false,
		},
		{
			label: 'F',
			id: 'Fri',
			chosen: false,
		},
		{
			label: 'S',
			id: 'Sat',
			chosen: false,
		},
		{
			label: 'S',
			id: 'Sun',
			chosen: false,
		},
	];
	useEffect(() => {
		setSevenDays(allDays);
	}, []);

	const handleChange = (day: Day) => {
		const updatedSevenDays = sevenDays.map((d) => (d.id === day.id ? { ...d, chosen: !day.chosen } : d));

		setSevenDays(updatedSevenDays);
	};

	return (
		<HStack>
			{sevenDays.map((day, index) => (
				<Circle
					key={index}
					bg={day.chosen ? 'secondary' : colorScheme}
					color={day.chosen ? colorScheme : 'secondary'}
					border={day.chosen ? 'none' : '.01rem solid'}
					borderColor={day.chosen ? 'none' : colorScheme}
					outline={outline ? '.01rem solid' : 'none'}
					outlineColor={outline && day.chosen ? 'accent' : 'none'}
					onClick={() => handleChange(day)}
					size={'3rem'}>
					<Text
						as="b"
						fontSize={'1.75rem'}
						fontWeight={'600'}
						fontFamily={'Inter'}>
						{day.label}
					</Text>
				</Circle>
			))}
		</HStack>
	);
};

export default TechnicianWorkingDays;
