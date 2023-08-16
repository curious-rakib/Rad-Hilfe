import { List, ListItem, Box, Flex, Text } from '@chakra-ui/react';

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
										justifyContent="space-between">
										<Text flex={0.5}>{formatText(part.subpart.name)}</Text>
										<Box flex={0.5}>
											<FullHealthBar health={part.health} />
										</Box>
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
