import { List, ListItem, Box, Flex, Text, Button } from '@chakra-ui/react';

import FullHealthBar from '../Bicycle Full Health Bar';
import { formatText } from '../../utils/formatText';

const HealthBarListTechnician = ({ bicycleParts }: { bicycleParts: any[] }) => {
	return (
		<>
			<Box
				p={'1rem'}
				bg={'primary'}
				borderRadius={'1rem'}>
				<List>
					{bicycleParts &&
						bicycleParts.map((part, index) => {
							return (
								<ListItem
									mt={'1rem'}
									key={index}
									color={'primary'}
									fontWeight={'700'}
									textColor={'secondary'}>
									<Flex
										alignItems="center"
										justifyContent="space-between"
										gap={'1rem'}>
										<Text flex={0.5}>{formatText(part.subpart.name)}</Text>
										<Box flex={0.5}>
											<FullHealthBar health={part.health} />
										</Box>
										<Button
											bg={'#099b09'}
											borderRadius={'1.25rem'}
											h={'2rem'}
											w={'5rem'}
											_hover={{
												bg: 'white',
												color: '#099b09',
												border: '2px solid #099b09',
											}}>
											Restore
										</Button>
										<Button
											bg={'red'}
											borderRadius={'1.25rem'}
											h={'2rem'}
											w={'5rem'}
											_hover={{
												bg: 'white',
												color: 'red',
												border: '2px solid red',
											}}>
											Deplete
										</Button>
									</Flex>
								</ListItem>
							);
						})}
				</List>
			</Box>
		</>
	);
};

export default HealthBarListTechnician;
