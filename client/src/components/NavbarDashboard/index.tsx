import { Flex, Box, VStack, HStack, Text, Image } from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react';
import { ChevronLeftIcon, HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { Outlet } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState } from 'react';
import caseCyclist from '../../assets/cases-cyclist.svg';
import maintenance from '../../assets/maintence.svg';
import profile from '../../assets/profile.svg';
import { themes } from '../../data/navbarTheme';
import { themeCollections } from '../../data/navbarTheme';
import avatar from '../../assets/avatar.svg';
function NavbarDashboard({ theme }: { theme: keyof themeCollections }) {
	const { getButtonProps, getDisclosureProps, isOpen } = useDisclosure();
	const [hidden, setHidden] = useState(!isOpen);

	return (
		<>
			{/* <Flex
				backgroundColor={themes[theme].navbarBackgroundColor}
				p={'3vh 4vw 3vh 4vw'}
				justifyContent={'space-between'}>
				<Box
					border={'1px solid'}
					borderRadius="25px"
					borderColor={themes[theme].textColor}>
					<ChevronLeftIcon
						color={themes[theme].textColor}
						fontSize="xxx-large"
					/>
				</Box>
				<Box>
					<HamburgerIcon
						color={themes[theme].textColor}
						fontSize="xxx-large"
						{...getButtonProps()}
					/>
				</Box>
			</Flex> */}
			<HStack>
				<Box p={'3vh 4vw 3vh 4vw'}>
					<CloseIcon
						color={themes[theme].cross}
						fontSize="xx-large"
						{...getButtonProps()}
					/>
					<HStack mt="30px">
						<Image
							src={avatar}
							boxSize="80px"
						/>
						<VStack>
							<Text>
								<span
									style={{
										marginLeft: '80px',
										fontWeight: 'bold',
										fontSize: '18px',
									}}>
									Anna
								</span>
								<br />
								<span
									style={{
										marginLeft: '10px',
										fontWeight: 'bold',
										fontSize: '14px',
									}}>
									{' '}
									anna@gmail.com
								</span>
							</Text>
						</VStack>
					</HStack>

					<VStack>
						<HStack>
							<Image src={caseCyclist} />
							<Text fontWeight={'bold'}>Cases</Text>
						</HStack>
						<br />
						<HStack>
							<Image src={maintenance} />
							<Text fontWeight={'bold'}>Maintenance</Text>
						</HStack>
						<br />
						<HStack>
							<Image src={profile} />
							<Text fontWeight={'bold'}>Profile</Text>
						</HStack>
					</VStack>
				</Box>
				<Box maxWidth={'90vw'}>
					<div>
						<Outlet />
					</div>
				</Box>
			</HStack>
		</>
	);
}

export default NavbarDashboard;
