import React from 'react';
import { Progress, Flex, Text, Grid, GridItem } from '@chakra-ui/react';

function HealthBar({ health, partname }: { health: number; partname: string }) {
	return (
		<Grid templateColumns="repeat(10, 1fr)">
			<GridItem colSpan={6}>
				<Text>{partname}</Text>
			</GridItem>
			<GridItem
				colSpan={4}
				alignItems={'center'}
				marginTop={'auto'}
				marginBottom={'auto'}>
				<Progress
					value={health}
					colorScheme="yellow"
					borderRadius={'8px'}
				/>
			</GridItem>
		</Grid>
	);
}

export default HealthBar;
