import { Box, Button, Circle, HStack, Stack } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useAppDispatch } from '../../app/hooks';
import { commuteDays } from '../../features/cyclist/commuteDetails-slice';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';

interface Day {
    id: string,
    label: string,
    chosen: boolean
}
const Days = ({
    colorScheme,

}: { colorScheme: string }) => {


    const allDays = [
        {
            label: 'M',
            id: 'Mon',
            chosen: false

        },
        {
            label: 'T', id: 'Tues',
            chosen: false

        },
        {
            label: 'W', id: 'Wed',
            chosen: false

        },
        {
            label: 'T', id: 'Thurs',
            chosen: false

        },
        {
            label: 'F', id: 'Fri',
            chosen: false

        },
        {
            label: 'S', id: 'Sat',
            chosen: false

        },
        {
            label: 'S', id: 'Sun',
            chosen: false

        },



    ]
    const [sevenDays, setSevenDays] = useState<Day[]>(allDays)



    const handleChange = (day: Day) => {

        const updatedSevenDays = sevenDays.map((d) => d.id === day.id ? { ...d, chosen: !day.chosen } : d)

        setSevenDays(updatedSevenDays)


    }
    const dispatch = useAppDispatch();
    const chosenLabels = allDays.filter(item => item.chosen).map(item => item.label);
    const dataObj = { days: chosenLabels }
    console.log('dataObj', dataObj);
    dispatch(commuteDays(dataObj));
    // const commuteState = useSelector((state: RootState) => state.commute);
    // console.log("::commute", commuteState);


    return (
        <HStack>
            {sevenDays.map((day, index) => (

                <Circle

                    key={index}
                    bg={day.chosen ? colorScheme : 'transparent'}
                    color={day.chosen ? 'secondary' : colorScheme}

                    border={day.chosen ? 'none' : `2px solid`}
                    borderColor={day.chosen ? 'none' : colorScheme}
                    onClick={() => handleChange(day)}
                    size={'45px'}


                >
                    {day.label}
                </Circle>
            ))}
        </HStack>
    );
};

export default Days;
