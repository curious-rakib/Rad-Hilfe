import React from 'react'
import { Flex, Box } from '@chakra-ui/react'
import { useDisclosure } from "@chakra-ui/react";
import { ChevronLeftIcon, HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";
import { useState, useEffect } from 'react';
import { themes } from '../../data/navbarTheme';
import { themeCollections } from '../../data/navbarTheme';
function Navbar({ theme }: { theme: keyof themeCollections }) {
    const { getButtonProps, getDisclosureProps, isOpen } = useDisclosure();
    const [hidden, setHidden] = useState(!isOpen);



    return (
        <>
            <Flex backgroundColor={themes[theme].navbarBackgroundColor} p={'3vh 4vw 3vh 4vw'} justifyContent={'space-between'}>
                <Box border={'1px solid'} borderRadius='25px' borderColor={themes[theme].textColor}><ChevronLeftIcon color={themes[theme].textColor} fontSize='xxx-large' /></Box>
                <Box ><HamburgerIcon color={themes[theme].textColor} fontSize='xxx-large' {...getButtonProps()} /></Box>
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
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    position: "absolute",
                    right: "0",
                    height: "100vh",
                    top: "0",
                    zIndex: 100
                }}

            >
                <Box p={'3vh 4vw 3vh 4vw'} ><CloseIcon color={themes[theme].cross} fontSize='xx-large' {...getButtonProps()} /></Box>
            </motion.div >
            <div>
                <Outlet />
            </div>
        </>
    )
}

export default Navbar;