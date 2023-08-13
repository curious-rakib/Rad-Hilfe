import { Box, Text, Flex } from '@chakra-ui/react';
import React from 'react';

const Casebox = () => {
	return (
		<>
			<Box
				m={'1.5rem'}
				p={'1rem'}
				w={'25rem'}
				bg={'third'}
				borderRadius={'1rem'}>
				<Flex
					justify={'space-between'}
					alignItems={'center'}>
					<Text
						fontSize={'1.5rem'}
						fontWeight={'600'}>
						Case Type: {' Active'}
					</Text>
					<Text>Aug 13,2023</Text>
				</Flex>
				<Flex
					justify={'space-between'}
					alignItems={'center'}>
					<Text
						mt={'1rem'}
						fontSize={'1rem'}>
						Call with Mr. Heimdall
					</Text>
					<Text mt={'1rem'}> 2:00-3:00</Text>
				</Flex>
			</Box>
		</>
	);
};

export default Casebox;
