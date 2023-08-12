import {
  Box,
  Slider,
  SliderFilledTrack,
  SliderMark,
  SliderThumb,
  SliderTrack,
  Tooltip,
} from '@chakra-ui/react';

import React, { useEffect, useState } from 'react';
import { useAppDispatch } from '../../app/hooks';
import { unpavedRoad } from '../../features/cyclist/commuteDetails-slice';

const SetSlider = () => {
  const dispatch = useAppDispatch();
  const [sliderValue, setSliderValue] = useState(50);
  useEffect(() => {
    const dataObj = { unpavedRoad: sliderValue };

    const fetch = async () => {
      await dispatch(unpavedRoad(dataObj));
    };

    fetch();
  }, [sliderValue, dispatch]);

  const labelStyles = {
    mt: '2',
    ml: '-2.5',
    fontSize: 'sm',
  };
  return (
    <Box mt={'3rem'} pt={6} pb={2} color={'accent'}>
      <Slider colorScheme='#C1FAA6' onChange={(val) => setSliderValue(val)}>
        <SliderMark value={25} {...labelStyles}>
          25%
        </SliderMark>
        <SliderMark value={50} {...labelStyles}>
          50%
        </SliderMark>
        <SliderMark value={75} {...labelStyles}>
          75%
        </SliderMark>
        <SliderMark
          value={sliderValue}
          fontWeight={'bold'}
          textAlign='center'
          bg='accent'
          color='secondary'
          mt='-10'
          ml='-5'
          w='12'
          borderRadius={'0.5rem'}
        >
          {sliderValue}%
        </SliderMark>
        <SliderTrack>
          <SliderFilledTrack bg={'accent'} />
        </SliderTrack>
        <SliderThumb />
      </Slider>
    </Box>
  );
};

export default SetSlider;
