import { Box, Button, Center, Flex, Text } from '@chakra-ui/react';

const IndividualCase = () => {
	return (
		<Box color={'secondary'}>
			<Flex
				gap={'4rem'}
				m={'1rem'}
				justify={'center'}>
				<Button color={'secondary'}>Back</Button>
				<Box>
					<Text> Case No</Text>
					<Text> #2354</Text>
				</Box>
				<Box>
					<Text> Case Status</Text>
					<Text> Open</Text>
				</Box>
				<Box>
					<Text> Case Type</Text>
					<Text> Active</Text>
				</Box>
				<Box>
					<Text> Bike Brand</Text>
					<Text> Veloce</Text>
				</Box>
				<Box>
					<Text> Bike Model</Text>
					<Text> Legion 50</Text>
				</Box>
				<Button color={'secondary'}>Raise Case</Button>
			</Flex>
			<Box m={'1rem'}>
				<Flex>
					<Box flex={0.5}>
						<Center>
							<Box> Zaber</Box>
						</Center>
					</Box>
					<Box flex={0.5}>Ahmed</Box>
				</Flex>
			</Box>
		</Box>
	);
};

export default IndividualCase;
