import { Box, Center, Flex, Stack, Text } from '@chakra-ui/react';
import { FaPoundSign } from 'react-icons/fa';

const ReplacementParts = ({ replacableParts }: { replacableParts: any[] }) => {
	return (
		<>
			<Flex
				direction={'column'}
				alignItems={'center'}>
				{replacableParts &&
					replacableParts.map((part) => {
						return (
							<Box
								w={'80%'}
								borderRadius={'1rem'}
								p={'1rem'}
								m={'.5rem'}
								bg={'accent'}
								h={'5rem'}>
								<Stack
									direction={'row'}
									spacing={'10rem'}>
									<Flex direction={'column'}>
										<Text
											fontSize={'1.25rem'}
											fontWeight={'700'}>
											{part.name}
										</Text>
										<Flex
											justify={'center'}
											alignItems={'center'}>
											<Text
												mt={1}
												fontWeight={'600'}>
												{part.price}
											</Text>
											<FaPoundSign />
										</Flex>
									</Flex>

									<Center>
										<Box>
											<Text fontWeight={'600'}> {part.quantity} pc</Text>
										</Box>
									</Center>
								</Stack>
							</Box>
						);
					})}
			</Flex>
		</>
	);
};

export default ReplacementParts;
