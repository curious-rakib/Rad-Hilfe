import { List, ListItem, Box, Flex } from '@chakra-ui/react';

import FullHealthBar from '../Bicycle Full Health Bar';

const HealthBarListTechnician = ({ bicycleParts }: { bicycleParts: any[] }) => {
	return (
		<>
			<Box>
				<List>
					{bicycleParts &&
						bicycleParts.map((part, index) => {
							return (
								<ListItem
									key={index}
									color={'primary'}>
									{part.name} <FullHealthBar health={part.health} />
								</ListItem>
							);
						})}
				</List>
			</Box>
		</>
	);
};

export default HealthBarListTechnician;
