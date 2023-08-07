import { Box, Flex, HStack, Heading, Spacer, Stack, Text, VStack, Image } from '@chakra-ui/react';
import TableComponent from '../../../components/Table';
import logo from './../../../assets/logo.svg';
import './cases.styles.css';
import { cases } from '../Dummy Data/dummyCaseData';

const Cases = () => {
	return (
		<>
			<HStack>
				<Box
					h={'100vh'}
					maxW={'12vw'}
					flex={1}>
					<Text>Navbar</Text>
				</Box>

				<Box
					bg="primary"
					p={2}
					color="secondary"
					h={'100vh'}
					flex={2}>
					<VStack>
						<HStack
							p={2}
							m={2}>
							<Flex
								direction={'column'}
								justify={'flex-start'}>
								<Text
									as="b"
									fontSize="24px"
									fontFamily={'Inter'}>
									Support Cases
								</Text>
								<Text
									as="b"
									fontSize="20px"
									color={'#E180E7'}
									fontFamily={'Inter'}>
									Total:{cases.length}
								</Text>
							</Flex>
							<Flex gap={3}>
								<Text
									as="b"
									fontSize="48px"
									fontFamily={'Inter'}>
									SlipStream
								</Text>

								<Image
									src={logo}
									alt="Slipstream logo"></Image>
							</Flex>
						</HStack>

						<Box w={'100%'}>
							<TableComponent />
						</Box>
					</VStack>
				</Box>
			</HStack>
		</>
	);
};

export default Cases;
