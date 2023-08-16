import { Box, Flex, Text } from '@chakra-ui/react';

const ReplacementParts = ({ replacableParts }: { replacableParts: any[] }) => {
	return (
		<>
			{replacableParts &&
				replacableParts.map((part) => {
					return (
						<Box
							p={'1rem'}
							m={'1rem'}
							bg={'accent'}
							h={'5rem'}>
							<Flex>
								<>
									<Text>{part.name}</Text>
									<Text>{part.price}</Text>
								</>
								<Text> {part.qty}</Text>
							</Flex>
						</Box>
					);
				})}
		</>
	);
};

export default ReplacementParts;
