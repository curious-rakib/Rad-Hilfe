import { AccordionIcon, Flex, Progress } from '@chakra-ui/react';
import React from 'react';
import { SlArrowDown } from 'react-icons/sl';

const MyBikeProgressBar = () => {
    return (
        <Flex alignItems='center'>
            <Progress
                value={30}
                colorScheme='yellow'
                size='lg'
                rounded='full'
                w='330px'
            />

            <SlArrowDown
                style={{
                    marginLeft: '10px',
                    backgroundColor: '#C1FAA6',
                    borderRadius: '50%',
                    padding: '4px',
                    transform: 'rotate(270deg)',
                }}
                size={24}
                color='001F3F'
            />
        </Flex>
    );
};

export default MyBikeProgressBar;
