import {
    Flex,
    Box,
    VStack,
    HStack,
    Text,
    Center,
    Image,
    SimpleGrid,
    Grid,
    GridItem,
} from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react';
import { ChevronLeftIcon, HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { Outlet } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState } from 'react';
import caseCyclist from '../../assets/cases-cyclist.svg';
import maintenance from '../../assets/maintence.svg';
import profile from '../../assets/profile.svg';
import avatar from '../../assets/avatar.svg';
import signout from '../../assets/signout.svg';
import { themes } from '../../data/navbarTheme';
import { themeCollections } from '../../data/navbarTheme';
function Navbar({ theme }: { theme: keyof themeCollections }) {
    const { getButtonProps, getDisclosureProps, isOpen } = useDisclosure();
    const [hidden, setHidden] = useState(!isOpen);

    return (
        <>
            <Flex
                backgroundColor={themes[theme].navbarBackgroundColor}
                p={'3vh 4vw 3vh 4vw'}
                justifyContent={'space-between'}
            >
                <Box
                    border={'2px solid'}
                    height={'31px'}
                    width={'31px'}
                    borderRadius='45px'
                    borderColor={themes[theme].textColor}
                >
                    <ChevronLeftIcon
                        marginLeft={'2px'}
                        color={themes[theme].textColor}
                        fontSize='x-large'

                    />
                </Box>
                <Box>
                    <HamburgerIcon
                        color={themes[theme].textColor}
                        fontSize='xx-large'
                        {...getButtonProps()}
                    />
                </Box>
            </Flex>
            <motion.div
                {...getDisclosureProps()}
                hidden={hidden}
                initial={false}
                onAnimationStart={() => setHidden(false)}
                onAnimationComplete={() => setHidden(!isOpen)}
                animate={{ width: isOpen ? 250 : 0 }}
                style={{
                    background: `${themes[theme].drawerColor}`,
                    overflow: 'hidden',
                    whiteSpace: 'nowrap',
                    position: 'absolute',
                    right: '0',
                    height: '100vh',
                    top: '0',
                    zIndex: 100,
                }}
            >
                <Box color={themes[theme].cross} p={'3vh 4vw 3vh 4vw'}>
                    <CloseIcon
                        color={themes[theme].cross}
                        fontSize='large'
                        {...getButtonProps()}
                    />
                    <HStack mt='30px'>
                        <Image src={avatar} boxSize='80px' />
                        <VStack>
                            <Text>
                                <span
                                    style={{
                                        marginLeft: '80px',
                                        fontWeight: 'bold',
                                        fontSize: '18px',
                                    }}
                                >
                                    Anna
                                </span>
                                <br />
                                <span
                                    style={{
                                        marginLeft: '10px',
                                        fontWeight: 'bold',
                                        fontSize: '14px',
                                    }}
                                >
                                    {' '}
                                    anna@gmail.com
                                </span>
                            </Text>
                        </VStack>
                    </HStack>

                    <SimpleGrid
                        columns={1}
                        spacingX='40px'
                        spacingY='20px'
                        mt={28}
                        mb={64}
                    >
                        <Box height='40px'>
                            {' '}
                            <HStack spacing={7}>
                                <Image src={caseCyclist} boxSize='35px' />
                                <Text fontWeight={'bold'}>Cases</Text>
                            </HStack>
                        </Box>
                        <Box height='40px'>
                            {' '}
                            <HStack spacing={7}>
                                <Image
                                    src={maintenance}
                                    boxSize='35px'
                                    sx={{
                                        fill: 'blue.500',
                                    }}
                                />

                                <Text fontWeight={'bold'}>Maintenance</Text>
                            </HStack>
                        </Box>
                        <Box height='40px'>
                            {' '}
                            <HStack spacing={7}>
                                <Image src={profile} boxSize='35px' />
                                <Text fontWeight={'bold'}>Profile</Text>
                            </HStack>
                        </Box>
                    </SimpleGrid>
                    <Box>
                        {' '}
                        <HStack spacing={7}>
                            <Image src={signout} boxSize='35px' />
                            <Text fontWeight={'bold'}>Sign Out</Text>
                        </HStack>
                    </Box>
                </Box>
            </motion.div>
            <div>
                <Outlet />
            </div>
        </>
    );
}

export default Navbar;
