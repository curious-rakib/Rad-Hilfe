import { Box, Flex, Heading, Text, VStack, Image, Input, Stack, Center } from '@chakra-ui/react';
import image from './../../../assets/background_image.jpg';
import logo from './../../../assets/logo(Lilac).svg';
import { useState } from 'react';
import LoopSlotOrPartsComponent from '../../../components/Time Slots & Bicycle Parts';
import { parts } from '../../../data/partsData';
import { TimeSlot } from '../../../utils/timeSlotgenerator';
import TechnicianProgress from '../../../components/Technician Progress';

const SetUpExpertise = () => {
	const [inputBrand, setInputBrand] = useState<string>('');
	const [brandList, setBrandList] = useState<string[]>([]);
	const bicycleParts = parts;
	const handleClick = (item: TimeSlot | string) => {
		// console.log('selected:', item);
	};
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
						p={' 0 8rem'}>
						<TechnicianProgress pagenumber={1} />
						<Text
							mt={'1.15rem'}
							fontSize={'1.5rem'}
							color={'third'}>
							Bicycle Brands
						</Text>

						<Input
							color={'third'}
							value={inputBrand}
							variant="flushed"
							size={'md'}
							placeholder="Type names of brands you have worked with"
							_placeholder={{ color: 'third', borderColor: 'third' }}
							_focusVisible={{ borderColor: 'third' }}
							onChange={(event) => setInputBrand(event.currentTarget.value)}
							onKeyDown={(event) => {
								if (event.key === 'Enter') {
									event.preventDefault();
									setBrandList((brands) => [...brands, inputBrand]);
									setInputBrand('');
								}
							}}
						/>
						<Flex
							wrap={'wrap'}
							mt={2}>
							{brandList.map((brand, index) => {
								return (
									<LoopSlotOrPartsComponent
										key={index}
										item={brand}
										onClick={() => console.log('first')}
										outline={false}
									/>
								);
							})}
						</Flex>

						<Text
							color={'third'}
							mb={2}
							mt={'1.15rem'}
							fontSize={'1.5rem'}>
							Components Expertise
						</Text>
						<Text
							color={'third'}
							mb={2}
							fontFamily={'Inter'}
							fontWeight={'500'}
							fontSize={'1rem'}>
							Select the components you are comfortable working with
						</Text>
						<Flex
							w={'32vw'}
							wrap={'wrap'}>
							{bicycleParts.map((parts) => {
								return (
									<LoopSlotOrPartsComponent
										key={parts._id}
										item={parts.name}
										onClick={() => handleClick(parts.name)}
										outline={true}
									/>
								);
							})}
						</Flex>
					</Flex>
				</Box>
			</Flex>
		</>
	);
};

export default SetUpExpertise;
