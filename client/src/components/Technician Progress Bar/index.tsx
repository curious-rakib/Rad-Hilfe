import { HStack, Box, Circle, Center, Flex } from '@chakra-ui/react';

function TechnicianProgressBar({ pagenumber }: { pagenumber: number }) {
	return (
		<Box>
			<HStack gap="1rem">
				<Flex
					justify={'center'}
					alignItems={'center'}
					bgColor={'third'}
					h={'2.5rem'}
					w={'5rem'}
					transform={'skew(30deg)'}>
					<Box
						h={'1.75rem'}
						w={'1.75rem'}
						transform={'skew(-30deg)'}
						border={'.25rem solid '}
						borderColor={'secondary'}
						borderRadius={'50%'}
						textAlign={'center'}
						fontWeight={'700'}>
						1
					</Box>
				</Flex>
				<Flex
					justify={'center'}
					alignItems={'center'}
					bgColor={'third'}
					h={'2.5rem'}
					w={'5rem'}
					transform={'skew(30deg)'}>
					<Box
						h={'1.75rem'}
						w={'1.75rem'}
						transform={'skew(-30deg)'}
						border={'.25rem solid '}
						borderColor={'secondary'}
						borderRadius={'50%'}
						textAlign={'center'}
						fontWeight={'700'}>
						1
					</Box>
				</Flex>
				<Flex
					justify={'center'}
					alignItems={'center'}
					bgColor={'third'}
					h={'2.5rem'}
					w={'5rem'}
					transform={'skew(30deg)'}>
					<Box
						h={'1.75rem'}
						w={'1.75rem'}
						transform={'skew(-30deg)'}
						border={'.25rem solid '}
						borderColor={'secondary'}
						borderRadius={'50%'}
						textAlign={'center'}
						fontWeight={'700'}>
						1
					</Box>
				</Flex>
			</HStack>
		</Box>
	);
}

export default TechnicianProgressBar;
