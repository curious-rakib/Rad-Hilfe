import { useEffect, useRef, useState } from 'react';
import { Flex, Stack, Text, VStack } from '@chakra-ui/react'
import mapboxgl, { Map } from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { motion } from "framer-motion";
import { useDisclosure } from "@chakra-ui/react";
// import { MapboxSearchBox } from '@mapbox/search-js-web';
import 'mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import { useNavigate } from 'react-router-dom';
import { config } from '../../../config.ts'
import HomeOfficeAddressLayOver from '../../components/HomeOfficeAddressLayover'
import { Box } from '@chakra-ui/react';

function SetupDailyRoute() {
    const mapContainerRef = useRef<HTMLDivElement>(null);
    const mapRef = useRef<Map | null>(null);
    const { getButtonProps, getDisclosureProps, isOpen } = useDisclosure();
    const [hidden, setHidden] = useState(!isOpen);

    mapboxgl.accessToken = config.mapboxAccess;
    useEffect(() => {
        if (mapContainerRef.current) {
            mapRef.current = new mapboxgl.Map({
                container: mapContainerRef.current,
                style: 'mapbox://styles/mapbox/streets-v12?optimize=true',
                center: [90.30857818617242, 23.880958224097034],
                zoom: 16,
            });
        };
    }, []);


    return (
        <VStack
            spacing={4}
        >
            <Box
                style={{
                    width: '100vw',
                    height: '100vh',
                    position: 'relative'
                }}
                ref={mapContainerRef}


            />
            <motion.div
                {...getDisclosureProps()}
                hidden={hidden}
                initial={true}
                onAnimationStart={() => setHidden(false)}
                onAnimationComplete={() => setHidden(!isOpen)}
                animate={{ height: isOpen ? 250 : 0 }}
                style={{

                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    position: "absolute",
                    right: "0",
                    width: "100vw",
                    top: "0",
                    zIndex: 100
                }}

            >
                <Stack p={4} spacing={7}
                    style={{
                        borderRadius: '20px',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        position: 'absolute',
                        width: '100%',
                        height: '40%',
                        backgroundColor: '#001F3F',
                        zIndex: 1
                    }}

                >
                    <Text color={'accent'}>Your daily commute details</Text>
                    <HomeOfficeAddressLayOver />
                </Stack>
            </motion.div >
        </VStack>
    );
}

export default SetupDailyRoute