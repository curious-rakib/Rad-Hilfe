import { Box, Button, Text, Image, Flex, VStack, Center } from '@chakra-ui/react';
import rotateBike from '../../assets/rotateBike.svg';
import check from '../../assets/checkMark.svg';
import { useEffect, useState } from 'react';
import { getPlan, selectPlan } from '../../services/order';
import { Link } from 'react-router-dom';

const CarePlan = () => {
  const [carePlan, setCarePlan] = useState('basic');

  useEffect(() => {
    const getData = async () => {
      // console.log('from useEffect', carePlan);
      // const plan = await getPlan();
      const planService = await selectPlan({ plan: carePlan });
      const plan = planService.plan
      // console.log('from useEffect', plan);

      setCarePlan(plan);
    };

    getData();
  }, [carePlan]);

  useEffect(() => {
    console.log('by clicking', carePlan);
  }, [carePlan]);

  return (
    <Box
      bg='third'
      h={'100vh'}
      top={'-1px'}
      zIndex={'0'}
      position={'relative'}
      overflow={'hidden'}
    >
      <Box>
        <Image
          src={rotateBike}
          boxSize='420px'
          position={'relative'}
          mt={'-50px'}
          transform={'scale(1.3) rotate(-14.5deg) translateX(-1rem) translateY(-0.2rem)'}
          zIndex={'-1'}
        />
        <Box
          onClick={() => setCarePlan('basic')}
          color={'third'}
          position={'relative'}
          bg={'secondary'}
          p={4}
          m={4}
          rounded={'xl'}
          mt={'-29px'}
        >
          {carePlan === 'basic' && (
            <Image
              src={check}
              alt='check'
              position={'absolute'}
              top={'-0.8rem'}
              right={'-0.8rem'}
              height={'2rem'}
              width={'2rem'}
            />
          )}

          <Flex justifyContent={'space-between'} alignItems={'center'}>
            <Box>
              <Text fontWeight={'bold'}>Basic Plan</Text>
              <Text>Free</Text>
            </Box>
            <Text fontWeight={'bold'} fontSize={'2xl'}>
              €0
            </Text>
          </Flex>
        </Box>
      </Box>

      <Flex>
        <VStack
          onClick={() => {

            setCarePlan('qover');
          }}
          position={'relative'}
          bg={'#52D4A5'}
          p={3}
          ml={4}
          mr={5}
          rounded={'xl'}
          color={'#001F3F'}
        >
          {carePlan === 'qover' && (
            <Image
              src={check}
              alt='check'
              position={'absolute'}
              top={'-0.8rem'}
              right={'-0.8rem'}
              height={'2rem'}
              width={'2rem'}
            />
          )}
          <Text style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>Qover Care Plan</Text>
          <Text mt={'14px'}>
            <span style={{ fontWeight: 'bold', fontSize: '2rem' }}>€8</span> / month
          </Text>
          <Text mt={4}>
            <span style={{ fontWeight: 'bold', fontSize: '0.9rem' }}>€96</span> billed annually
          </Text>
        </VStack>
        <VStack
          onClick={() => setCarePlan('jobrad')}
          position={'relative'}
          bg={'fourth'}
          p={3}
          mr={4}
          rounded={'xl'}
          color={'#001F3F'}
        >
          {carePlan === 'jobrad' && (
            <Image
              src={check}
              alt='check'
              position={'absolute'}
              top={'-0.8rem'}
              right={'-0.8rem'}
              height={'2rem'}
              width={'2rem'}
            />
          )}
          <Text style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>Slipstream Care</Text>
          <p style={{ fontSize: '11px', marginTop: '-7px' }}>MOST POPULAR</p>
          <Text>
            <span style={{ fontWeight: 'bold', fontSize: '2rem' }}>€30</span> / month
          </Text>
          <Text mt={4}>
            <span style={{ fontWeight: 'bold', fontSize: '0.9rem' }}>€360</span> billed annually
          </Text>
        </VStack>
      </Flex>
      <Center bg='third' mt='' h='20vh'>
        <Link to={'/cart'}>
          <Button
            loadingText='Submitting'
            size='lg'
            bg='accent'
            w='200px'
            color='secondary'
            fontWeight={'bold'}
          >
            Get Plan
          </Button>
        </Link>
      </Center>
    </Box>
  );
};

export default CarePlan;
