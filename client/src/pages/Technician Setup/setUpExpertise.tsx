import { Box, Flex, Heading, Text, VStack, Image, Input, Stack, Center } from '@chakra-ui/react';
import image from './../../assets/background_image.jpg';
import logo from './../../assets/logo(Lilac).svg';
import { useState } from 'react';
import LoopSlotOrPartsComponent from '../../components/Time Slots & Bike Parts';

const TechnicianSetUp = () => {
	const [inputBrand, setInputBrand] = useState<string>('');
	const [brandList, setBrandList] = useState<string[]>([]);
	return (
		<>
			<Flex
				w={'100vw'}
				h={'100vh'}
				bgImage={image}>
				<Box flex={0.5}></Box>
				<Box
					bg={'secondary'}
					flex={0.5}>
					<Flex
						alignItems={'center'}
						justifyContent={'center'}
						gap={'1rem '}>
						<Heading
							fontSize={'2.5rem'}
							color={'third'}>
							Slipstream
						</Heading>
						<Image
							src={logo}
							alt="Slipstream logo"></Image>
					</Flex>

					<Flex
						direction={'column'}
						alignItems={'center'}>
						<Text
							mt={'1.15rem'}
							fontSize={'1.5rem'}
							color={'third'}>
							Bicycle Brands
						</Text>
						<Flex
							w={'31vw'}
							direction={'column'}>
							<Input
								value={inputBrand}
								variant="flushed"
								size={'md'}
								placeholder="Type names of brands you have worked with"
								_placeholder={{ color: 'third', borderColor: 'third' }}
								_focusVisible={{ borderColor: 'secondary' }}
								onChange={(event) => setInputBrand(event.currentTarget.value)}
								onKeyDown={(event) => {
									if (event.key === 'Enter') {
										event.preventDefault();
										setBrandList((brands) => [...brands, inputBrand]);
										setInputBrand('');
									}
								}}
							/>
							<Flex wrap={'wrap'}>
								{brandList.map((brand, index) => {
									return (
										<LoopSlotOrPartsComponent
											key={index}
											item={brand}
											onClick={() => console.log('first')}
										/>
									);
								})}
							</Flex>
						</Flex>
					</Flex>
				</Box>
			</Flex>
		</>
	);
};

export default TechnicianSetUp;
