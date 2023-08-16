import { Box, Text, Divider } from '@chakra-ui/react';

const Maintenance = () => {
  const parts = [
    { title: 'Body frame', date: '23 Aug 2022', color: '#EDCBEF' },
    { title: 'Brakes', date: '23 Aug 2022', color: '#E3DD39' },
    { title: 'Wheel', date: '23 Aug 2022', color: '#3B82F6' },
    { title: 'Chain ring', date: '15 Jan 2022', color: '#17C05B' },
    { title: 'Crank arm', date: '7 May 2021', color: '#17C05B' },
    { title: 'Brakes', date: '7 Aug 2022', color: '#EDCB20' },
  ];

  return (
    <Box>
      <Text color={'#C1FAA6'} mt={8} mb={8} p={4} fontWeight={'600'} fontSize={'3xl'}>
        Maintenance log
      </Text>
      {parts.map((part, index) => (
        <Box key={index} p={'0 .25rem'}>
          <Box display='flex' justifyContent='space-between' p={4}>
            <Box display='flex' alignItems='center' gap={2}>
              <Box h='22px' w='28px' rounded='12px' backgroundColor={part.color}></Box>
              <Text>{part.title}</Text>
            </Box>
            <Text>{part.date}</Text>
          </Box>
          <Divider m={'0 auto'} width={'95%'} color={'#E2E8F0'} />
        </Box>
      ))}
    </Box>
  );
};

export default Maintenance;
