import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import { Box, Center, Flex, Stack, Text, Icon, Button } from '@chakra-ui/react';
import { FaPoundSign } from 'react-icons/fa';
import { BiPound } from 'react-icons/bi';

function formatComponentName(name: string): string {
	return name.replace(/([a-z])([A-Z])/g, '$1 $2').replace(/\b\w/g, (c) => c.toUpperCase());
}

const ReplacementParts = ({ replacableParts }: { replacableParts: any[] }) => {
	return (
		<Flex
			direction={'column'}
			alignItems={'center'}>
			{replacableParts &&
				replacableParts.map((part, index) => {
					return (
						<Box
							key={index}
							borderRadius={'md'}
							boxShadow={'lg'}
							w={'90%'}
							p={'1rem'}
							m={'.5rem'}
							h={'auto'}
							bg={'primary'}>
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
				m={'1rem'}
				bg={'secondary'}
				color={'third'}>
				<Text m={'1rem'}> Send Invoice </Text>
				<Text> 200 </Text>
				<Text>
					<Icon
						as={BiPound}
						boxSize={'1.2rem'}
					/>
				</Text>
			</Button>
		</Flex>
	);
};

export default ReplacementParts;
