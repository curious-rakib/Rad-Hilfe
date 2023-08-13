import { useEffect, useRef, useState } from 'react';
import { Flex, Stack, Text, VStack } from '@chakra-ui/react'
import mapboxgl, { Popup, Marker, Map } from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { motion } from "framer-motion";
import { useDisclosure } from "@chakra-ui/react";
import { MapboxSearchBox } from '@mapbox/search-js-web';
import 'mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import { useNavigate } from 'react-router-dom';
import { config } from '../../../config.ts'
import HomeOfficeAddressLayOver from '../../components/HomeOfficeAddressLayover'
import { Box } from '@chakra-ui/react';
import { Slide } from '@chakra-ui/react'

export const generateNewMarker = ({ lat, lng, map }: { lng: number, lat: number, map: Map }) => {
    console.log("inside generate new marker")
    const popUp = new Popup({ closeButton: false, anchor: 'left', })
        .setHTML(`<div class="popup">You click here: <br/>[${lng},  ${lat}]</div>`)

    const marker = new Marker({ color: '#63df29', scale: 1.5 }).setLngLat([lng, lat]).setPopup(popUp).addTo(map)


}


function SetupDailyRoute() {
    const mapContainerRef = useRef<HTMLDivElement>(null);
    const mapRef = useRef<Map | null>(null);
    const { isOpen, onToggle } = useDisclosure();

    const mapInitRef = useRef<Map | null>(null);
    const [hidden, setHidden] = useState(!isOpen);

    mapboxgl.accessToken = config.mapboxAccess;
    useEffect(() => {
        // console.log(isOpen);
    }, [])
    useEffect(() => {
        if (mapContainerRef.current) {
            mapRef.current = new mapboxgl.Map({
                container: mapContainerRef.current,
                style: 'mapbox://styles/mapbox/streets-v12?optimize=true',
                center: [90.30857818617242, 23.880958224097034],
                zoom: 16,
            });

            const search = new MapboxSearchBox();
            search.accessToken = config.mapboxAccess;
            search.theme = {
                variables: {
                    fontFamily: 'Poppins, sans-serif',
                    unit: '15px',
                    padding: '0.5em',
                    borderRadius: '10px',
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                },
                cssText: '.Input:active { opacity: 0.5; }, ',
            };
            mapRef.current.addControl(search);
            search.addEventListener('retrieve', async (event: any) => {
                const [longitude, latitude] = [event.detail.features[0].geometry.coordinates[0], event.detail.features[0].geometry.coordinates[1]];
                // const featureCollection = event.detail;
                // const longitude = featureCollection.features[0].geometry.coordinates[0];
                // const latitude = featureCollection.features[0].geometry.coordinates[1];


            });


            mapRef.current && mapRef.current.on(
                'mouseup',
                ({ lngLat }: { lngLat: any }) => generateNewMarker({
                    map: mapRef.current!,
                    ...lngLat
                }))
        };
        return () => mapRef.current?.remove();
    }, []);

    const [show, setShow] = useState<boolean>(true)

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
            {
                show &&
                <Slide direction='bottom' in={isOpen} style={{ zIndex: 10 }}>
                    <Stack p={4} spacing={7}
                        style={{
                            borderRadius: '20px',
                            bottom: 0,
                            left: 0,
                            right: 0,
                            position: 'absolute',
                            width: '100%',
                            height: '40vh',
                            backgroundColor: '#001F3F',
                            zIndex: 200,

                        }}

                    >
                        <Text color={'accent'} fontWeight={'semibold'} fontSize={'xl'} px={1} >Your daily commute details</Text>
                        <HomeOfficeAddressLayOver onToggle={onToggle} />
                    </Stack>
                </Slide>
            }
        </VStack >
    );
}

export default SetupDailyRoute