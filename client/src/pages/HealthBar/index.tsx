import HealthRadialChart from '../../components/HealthRadialChart';
import HealthBarAccordion from '../../components/HealthBarAccordion';
import SubmitButton from '../../components/Button';
import { Flex } from '@chakra-ui/react';

function HealthBar() {
  return (
    <>
      <HealthRadialChart />
      <HealthBarAccordion />
      <Flex mt={'2rem'} pb={'2rem'} justifyContent={'center'} fontWeight={'20px'}>
        <SubmitButton
          loadingText='Replace'
          size='lg'
          bg='accent'
          w='12.5rem'
          color='secondary'
          text='Replace now'
        />
      </Flex>
    </>
  );
}

export default HealthBar;
