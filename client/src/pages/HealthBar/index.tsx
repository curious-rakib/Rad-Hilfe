import HealthRadialChart from '../../components/HealthRadialChart';
import HealthBarAccordion from '../../components/HealthBarAccordion';
import SubmitButton from '../../components/Button';
import { Flex } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

function HealthBar() {
  return (
    <>
      <HealthRadialChart />
      <HealthBarAccordion />
      <Flex mt={'2rem'} pb={'2rem'} justifyContent={'center'} fontWeight={'20px'}>
        <Link to='/cart'>
          <SubmitButton
            loadingText='Replace'
            size='lg'
            bg='accent'
            w='12.5rem'
            color='secondary'
            text='Replace now' fontWeight={''} />
        </Link>
      </Flex>
    </>
  );
}

export default HealthBar;
