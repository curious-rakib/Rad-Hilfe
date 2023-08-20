import { Box, Button, Center } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { Text } from '@chakra-ui/react';
import { months } from '../../data/months';
import { getCyclistName } from '../../services/authentication';
import { parts } from '../../data/partsData';
import { getAllSubpart } from '../../services/bikeDetails';
import { getTimeSlots } from '../../services/order';
import { getCaseNumber } from '../../services/cases';

let arr: any[] = [
  {
    type: 'text',
    data: ['Hi', 'Select which issues you are facing so that we can help'],
    from: 'bot',
  },
  {
    type: 'option',
    data: [
      {
        selected: false,
        value: 'Bike damaged',
      },
      {
        selected: false,
        value: 'Part replacement',
      },
      {
        selected: false,
        value: 'Maintenance',
      },
      {
        selected: false,
        value: 'Other',
      },
    ],
    from: 'user',
  },
  {
    type: 'text',
    data: [
      'We are opening an Active case number 17',
      'Which part or parts need to be replaced or repaired',
    ],
    from: 'bot',
  },
  {
    type: 'option',
    data: [
      {
        selected: false,
        value: 'Wheel',
      },
      {
        selected: false,
        value: 'Drive Mechanics',
      },
      {
        selected: false,
        value: 'Frame',
      },
      {
        selected: false,
        value: 'Brake',
      },
    ],
    from: 'user',
  },
  {
    type: 'text',
    data: ['Which drive mechanics part do you need to replace or repaired'],
    from: 'bot',
  },
  {
    type: 'option',
    data: [],
    from: 'user',
  },
  {
    type: 'text',
    data: ['Let’s book a time with support. Which day works for you?'],
    from: 'bot',
  },
  {
    type: 'option',
    data: [
      {
        selected: false,
        value: 'Sun',
      },
      {
        selected: false,
        value: 'Mon',
      },
      {
        selected: false,
        value: 'Tue',
      },
      {
        selected: false,
        value: 'Wed',
      },
    ],
    from: 'user',
  },
  {
    type: 'text',
    data: ['These slots are available on your selected day. Select one'],
    from: 'bot',
  },
  {
    type: 'option',
    data: [
      {
        selected: false,
        value: '09:00',
      },
      {
        selected: false,
        value: '13:00',
      },
      {
        selected: false,
        value: '14:00',
      },
      {
        selected: false,
        value: '17:00',
      },
    ],
    from: 'user',
  },
  {
    type: 'text',
    data: [
      'Great. You have a call booked for Wed, 08 Aug at 15:00',
      'Download the meeting link to have it in your calendar',
    ],
    from: 'bot',
  },
];

const Chat: React.FC = () => {
  const [curindex, setCurindex] = useState<number>(0);
  const [messages, setMessages] = useState<any[]>([]);
  const [getSubpart, setGetSubpart] = useState<any[]>([]);

  useEffect(() => {
    const getData = async () => {
      const cyclistName = await getCyclistName();
      if (cyclistName) {
        arr[0].data[0] = 'Hi ' + cyclistName.name;
      }

      const allSubparts = await getAllSubpart();
      if (allSubparts) {
        setGetSubpart(allSubparts);
      }

      const caseNum = await getCaseNumber();
      if (caseNum) {
        arr[2].data[0] = `We are opening an Active case number ${caseNum.caseNumber}`;
      }
    };
    getData();
  }, []);

  const addNewMessage = () => {
    if (curindex + 1 === arr.length) {
      return;
    }

    if (curindex === 4) {
      const category = messages[3].data.reduce((accumulator: any[], data: any) => {
        if (data.selected) {
          accumulator.push(data.value.split(' ').join(''));
        }

        return accumulator;
      }, []);

      let subpartData: any[] = [];

      category.forEach((name: any) => {
        const subparts = parts.reduce((accumulator: any[], part) => {
          if (part.category === name) {
            accumulator.push({ selected: false, value: part.name });
          }

          return accumulator;
        }, []);
        subpartData.push(...subparts);

        arr[5].data = subpartData;
      });
    }

    if (curindex === 6) {
      const subpart = messages[5].data.filter((part: any) => part.selected);

      const subparts = subpart.reduce((accumulator: any[], value: any) => {
        const part = getSubpart.filter(
          (subpart) => String(subpart.name) === String(value.value.split(' ').join(''))
        );

        accumulator.push(part[0]._id);
        return accumulator;
      }, []);

      (async function getData() {
        const timeSlot = await getTimeSlots(subparts);

        console.log(timeSlot);
      })();
    }

    setMessages((prev) => [...prev, arr[curindex]]);

    setTimeout(() => {
      setMessages((prev) => [...prev, arr[curindex + 1]]);
      setCurindex(curindex + 2);
    }, 1000);
  };

  const handleclick = (step: number, option: number) => {
    const updatedArr = [...messages];
    updatedArr[step].data[option].selected = !updatedArr[step].data[option].selected;
    setMessages(updatedArr);
  };

  useEffect(() => {
    addNewMessage();
  }, []);

  return (
    <Box className='overflow-y-auto' fontWeight={'500'}>
      <Text m={'1rem auto'} textAlign={'center'}>{`${new Date().getDate()} ${
        months[new Date().getMonth()]
      }, ${new Date().getUTCFullYear()}`}</Text>

      {messages.map((item, index1) => (
        <Box
          key={index1}
          display={'flex'}
          flexDir={item.from === 'bot' ? 'column' : 'row'}
          alignItems={'bot' ? 'flex-end' : 'flex-end'}
        >
          {item.type === 'text' ? (
            item.data.map((chat: any, index2: number) => (
              <Box
                key={index2}
                bg={item.from === 'bot' ? '#EDCBEF' : 'transparent'}
                color='#001F3F'
                p={3}
                m={item.from === 'bot' ? 3 : 2}
                w={item.from === 'bot' ? '70%' : '100%'}
                rounded='xl'
                className={item.from === 'bot' ? 'text-[#001F3F]' : ''}
              >
                {chat}
              </Box>
            ))
          ) : (
            <Box
              key={index1}
              bg={item.from === 'bot' ? '#EDCBEF' : 'transparent'}
              color='#001F3F'
              display={'flex'}
              flexWrap={'wrap'}
              m={item.from === 'bot' ? 3 : 2}
              w={item.from === 'bot' ? '70%' : '100%'}
              rounded='xl'
              className={item.from === 'bot' ? 'text-[#001F3F]' : ''}
            >
              {item.data.map((option: any, index2: number) => (
                <Box
                  display={'inline-flex'}
                  alignItems={'center'}
                  justifyContent={'center'}
                  key={index2}
                  onClick={() => handleclick(index1, index2)}
                  bg={option.selected ? '#C1FAA6' : 'transparent'}
                  color={option.selected ? '#001F3F' : '#C1FAA6'}
                  rounded='xl'
                  h={'4rem'}
                  p={'0.5rem'}
                  m={2}
                  w='9rem'
                  border='1px solid #C1FAA6'
                  textAlign='center'
                >
                  {option.value}
                </Box>
              ))}
            </Box>
          )}
        </Box>
      ))}

      <Center>
        <Button
          onClick={addNewMessage}
          bg='#C1FAA6'
          color='#001F3F'
          rounded='xl'
          h='40px'
          w='81.5%'
          border='1px solid #C1FAA6'
          textAlign='center'
          mb={'3rem'}
        >
          Confirm
        </Button>
      </Center>
    </Box>
  );
};

export default Chat;
