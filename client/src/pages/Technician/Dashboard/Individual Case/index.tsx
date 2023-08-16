import { Box, Button, Center, Flex, Text } from '@chakra-ui/react';
import VideoContainer from '../../../../components/Video Container';
import TechnicianTab from '../../../../components/Tab component';

const IndividualCase = () => {
	return (
		<Box color={'secondary'}>
			<Flex
				gap={'4rem'}
				m={'1rem'}
				justify={'center'}>
				<Button color={'secondary'}>Back</Button>
				<Box fontSize={'1.40rem'}>
					<Text> Case No</Text>
					<Text fontWeight={'700'}> #2354</Text>
				</Box>
				<Box fontSize={'1.40rem'}>
					<Text> Case Status</Text>
					<Text fontWeight={'700'}> Open</Text>
				</Box>
				<Box fontSize={'1.40rem'}>
					<Text> Case Type</Text>
					<Text fontWeight={'700'}> Active</Text>
				</Box>
				<Box fontSize={'1.40rem'}>
					<Text> Bike Brand</Text>
					<Text fontWeight={'700'}> Veloce</Text>
				</Box>
				<Box fontSize={'1.40rem'}>
					<Text> Bike Model</Text>
					<Text fontWeight={'700'}> Legion 50</Text>
				</Box>
				<Button
					fontSize={'1.30rem'}
					bg={'red'}
					color={'primary'}>
					<Text fontWeight={'700'}>Raise Case</Text>
				</Button>
			</Flex>
			<Box m={'.5rem'}>
				<Flex>
					<Box w={'50rem'}>
						<Box
							w={'50%'}
							ml={'4.5rem'}>
							<VideoContainer />
						</Box>

						<Flex mt={5}>
							<TechnicianTab />
						</Flex>
					</Box>

					<Box flex={0.5}>
						<Button color={'secondary'}>Left</Button>
						<Box w={'50%'}>
							<VideoContainer />
						</Box>
						<Button color={'secondary'}>Right</Button>

						<Text>Articles</Text>
					</Box>
				</Flex>
			</Box>
		</Box>
	);
};

export default IndividualCase;
