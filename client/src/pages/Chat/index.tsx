import { Box, Button } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { Input, Flex, Text } from '@chakra-ui/react';
import { months } from '../../data/months';

const arr: any[] = [
  {
    type: 'text',
    data: ['hi......', 'select which issues u r facing so that we can help'],
    from: 'bot',
  },
  {
    type: 'option',
    data: [
      {
        selected: false,
        value: ' Bike damaged',
      },
      {
        selected: false,
        value: ' part replacement',
      },
      {
        selected: false,
        value: 'Maintenance',
      },
      {
        selected: false,
        value: 'other',
      },
    ],
    from: 'user',
  },
  {
    type: 'text',
    data: [
      'we r opening an Active case number 1234',
      'Which part or parts need to be replaced or repaired',
    ],
    from: 'bot',
  },
  {
    type: 'option',
    data: [
      {
        selected: false,
        value: ' Gear shifters',
      },
      {
        selected: false,
        value: ' Hub disc rotors',
      },
      {
        selected: false,
        value: 'chain',
      },
      {
        selected: false,
        value: 'Crank arm',
      },
      {
        selected: false,
        value: ' Derailleur',
      },
      {
        selected: false,
        value: ' pedal',
      },
      {
        selected: false,
        value: 'Chain ring',
      },
      {
        selected: false,
        value: 'casettle',
      },
    ],
    from: 'user',
  },
  {
    type: 'text',
    data: ["Let's book a time with support. Which day works for you?"],
    from: 'bot',
  },
];

const Chat: React.FC = () => {
  const [curindex, setCurindex] = useState<number>(0);
  const [messages, setMessages] = useState<any[]>([]);

  const addNewMessage = () => {
    if (curindex + 1 === arr.length) {
      return;
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
    <Box className='overflow-y-auto'>
      <Text m={'1rem auto'} textAlign={'center'}>{`${new Date().getDate()} ${
        months[new Date().getMonth()]
      }, ${new Date().getUTCFullYear()}`}</Text>

      {messages.map((item, index1) => (
        <Box
          key={index1}
          className={item.from === 'bot' ? 'flex flex-col' : 'flex flex-wrap justify-end'}
        >
          {item.type === 'text' ? (
            item.data.map((chat: any, index2: number) => (
              <Box
                key={index2}
                bg={item.from === 'bot' ? '#EDCBEF' : 'transparent'}
                color='black'
                p={3}
                m={item.from === 'bot' ? 3 : 2}
                w={item.from === 'bot' ? '9/12' : '200px'}
                rounded='xl'
                className={item.from === 'bot' ? 'text-black' : ''}
              >
                {chat}
              </Box>
            ))
          ) : (
            <Box
              key={index1}
              bg={item.from === 'bot' ? '#EDCBEF' : 'transparent'}
              color='black'
              p={3}
              m={item.from === 'bot' ? 3 : 2}
              w={item.from === 'bot' ? '9/12' : '200px'}
              rounded='xl'
              className={item.from === 'bot' ? 'text-black' : ''}
            >
              {item.data.map((option: any, index2: number) => (
                <Button
                  key={index2}
                  onClick={() => handleclick(index1, index2)}
                  bg={option.selected ? '#C1FAA6' : 'transparent'}
                  color={option.selected ? 'black' : '#C1FAA6'}
                  rounded='xl'
                  h='40px'
                  m={2}
                  w='200px'
                  border='1px solid #C1FAA6'
                  textAlign='center'
                >
                  {option.value}
                </Button>
              ))}
            </Box>
          )}
        </Box>
      ))}

      <Button
        onClick={addNewMessage}
        bg='#C1FAA6'
        color='black'
        ml={16}
        rounded='xl'
        h='40px'
        m={2}
        w='81.5%'
        border='1px solid #C1FAA6'
        textAlign='center'
      >
        Confirm
      </Button>

      <Flex className='justify-around p-2 sticky bottom-0'>
        <Box
          bg='#C1FAA6'
          h='9'
          w='9'
          rounded='full'
          display='flex'
          alignItems='center'
          justifyContent='center'
        >
          <Text className='text-black text-2xl font-semibold text-center'>+</Text>
        </Box>
        <Box>
          <Input
            className='border border-[#C1FAA6] rounded-xl bg-[#001F3F] w-[300px] p-2 px-3'
            type='text'
            bg='#001F3F'
            border='1px solid #C1FAA6'
            rounded='xl'
            w='300px'
            p={2}
            pl={3}
            color='white'
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default Chat;
