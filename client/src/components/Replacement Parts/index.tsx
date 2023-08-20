import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import { Box, Center, Flex, Stack, Text, Icon, Button } from '@chakra-ui/react';
import { FaPoundSign } from 'react-icons/fa';
import { BiPound } from 'react-icons/bi';
import { formatText } from '../../utils/formatText';

function formatComponentName(name: string): string {
	return name.replace(/([a-z])([A-Z])/g, '$1 $2').replace(/\b\w/g, (c) => c.toUpperCase());
}

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
									justifyContent={'space-between'}>
									<Flex direction={'column'}>
										<Text
											fontSize={'1.25rem'}
											fontWeight={'700'}>
											{formatComponentName(part.subpart.name)}
										</Text>
										<Flex
											justify={'start'}
											alignItems={'center'}>
											<Text
												mt={1}
												fontWeight={'600'}>
												{part.subpart.price}
											</Text>
											<FaPoundSign />
										</Flex>
									</Flex>

									<Center>
										<Flex
											gap={'1rem'}
											alignItems={'center'}>
											<Button bg={'primary'}>
												<AddIcon
													boxSize={'1rem'}
													color="secondary"
												/>
											</Button>

											<Text fontWeight={'600'}> 1 pc</Text>
											<Button bg={'primary'}>
												<MinusIcon
													boxSize={'1rem'}
													color="secondary"
												/>
											</Button>
										</Flex>
									</Center>
								</Stack>
							</Box>
						);
					})}
				<Button
					bg={'#d9d9d9'}
					color={'secondary'}>
					<Text mr={'1rem'}> Send Invoice </Text>
					<Text> 200 </Text>
					<Text>
						<Icon
							as={BiPound}
							boxSize={'1.2rem'}
						/>
					</Text>
				</Button>
			</Flex>
		</>
	);
};

export default ReplacementParts;
