import { useEffect, useRef, useState } from 'react';
import { Stack, Text, VStack } from '@chakra-ui/react';
import mapboxgl, { Popup, Marker, Map } from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { useDisclosure } from '@chakra-ui/react';
import { MapboxSearchBox } from '@mapbox/search-js-web';
import 'mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import { config } from '../../../config.ts';
import HomeOfficeAddressLayOver from '../../components/HomeOfficeAddressLayover';
import { Box } from '@chakra-ui/react';
import { Slide } from '@chakra-ui/react';
import axios from 'axios';

function SetupDailyRoute() {
  const [markars, setMarkars] = useState<{ lat: number; lng: number }[]>([]);

  const generateNewMarker = ({ lat, lng, map }: { lng: number; lat: number; map: Map }) => {
    setMarkars((prevState) => [...prevState, { lat, lng }]);

    const popUp = new Popup({ closeButton: false, anchor: 'left' }).setHTML(
      `<div class="popup">You click here: <br/>[${lng},  ${lat}]</div>`
    );

    const marker = new Marker({ color: '#63df29', scale: 1.5 })
      .setLngLat([lng, lat])
      .setPopup(popUp)
      .addTo(map);
  };
  const [directions, setDirections] = useState([
    {
      distance: 0,
    },
  ]);
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<Map | null>(null);
  const { isOpen, onToggle } = useDisclosure();

  const mapInitRef = useRef<Map | null>(null);
  const [hidden, setHidden] = useState(!isOpen);

  mapboxgl.accessToken =
    'pk.eyJ1IjoiemFoaWR0d3QiLCJhIjoiY2xnaWV0YXB1MHVzNDNwbXk4NmdjZDBzZiJ9.7yB9lTwtcki0wvg2BQHNaw';

  useEffect(() => {
    if (mapContainerRef.current) {
      mapRef.current = new mapboxgl.Map({
        container: mapContainerRef.current,
        style: 'mapbox://styles/zahidtwt/clgienaqi005u01o1d5rzcmgi',
        center: [90.30857818617242, 23.880958224097034],
        zoom: 13,
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
        const [longitude, latitude] = [
          event.detail.features[0].geometry.coordinates[0],
          event.detail.features[0].geometry.coordinates[1],
        ];
        // const featureCollection = event.detail;
        // const longitude = featureCollection.features[0].geometry.coordinates[0];
        // const latitude = featureCollection.features[0].geometry.coordinates[1];

        // console.log(longitude, latitude);
      });

      mapRef.current &&
        mapRef.current.on('mouseup', ({ lngLat }: { lngLat: any }) =>
          generateNewMarker({
            map: mapRef.current!,
            ...lngLat,
          })
        );
    }
    return () => mapRef.current?.remove();
  }, []);

  // useEffect(() => {

  //   const fetchData = async () => {
  //     const startCoordslat = markars[0].lat;

  //     const startCoordslng = markars[0].lng;

  //     const endCoordslat = markars[markars.length - 1].lat;
  //     const endCoordslng = markars[markars.length - 1].lng;

  //     try {
  //       const response = await axios.get(
  //         `https://api.mapbox.com/directions/v5/mapbox/cycling/${startCoordslng},${startCoordslat};${endCoordslng},${endCoordslat}`,

  //         {
  //           params: {
  //             alternatives: true,
  //             continue_straight: true,
  //             geometries: 'geojson',
  //             language: 'en',
  //             overview: 'simplified',
  //             steps: true,
  //             access_token: mapboxgl.accessToken,
  //           },
  //         }
  //       );

  //       setDirections(response.data.routes);
  //     } catch (error) {
  //       console.error('Error fetching directions:', error);
  //     }
  //   };

  //   fetchData();
  // }, [markars]);

  useEffect(() => {
    const fetchData = async () => {
      if (markars.length > 1) {
        const startCoordslat = markars[0].lat;

        const startCoordslng = markars[0].lng;

        const endCoordslat = markars[markars.length - 1].lat;
        const endCoordslng = markars[markars.length - 1].lng;

        try {
          const response = await axios.get(
            `https://api.mapbox.com/directions/v5/mapbox/cycling/${startCoordslng},${startCoordslat};${endCoordslng},${endCoordslat}`,

            {
              params: {
                alternatives: true,
                continue_straight: true,
                geometries: 'geojson',
                language: 'en',
                overview: 'simplified',
                steps: true,
                access_token: mapboxgl.accessToken,
              },
            }
          );

          // if the route already exists on the map, we'll reset it using setData
          if (mapRef.current && !mapRef.current.getSource('route')) {
            mapRef.current.addLayer({
              id: 'route',
              type: 'line',
              source: {
                type: 'geojson',
                data: {
                  type: 'Feature',
                  properties: {},
                  geometry: {
                    type: 'LineString',
                    coordinates: response.data.routes[0].geometry.coordinates,
                  },
                },
              },
              layout: {
                'line-join': 'round',
                'line-cap': 'round',
              },
              paint: {
                'line-color': '#3887be',
                'line-width': 5,
                'line-opacity': 0.75,
              },
            });
          }

          setDirections(response.data.routes);
        } catch (error) {
          console.error('Error fetching directions:', error);
        }
      }
    };

    fetchData();
  }, [markars]);

  const distance = directions[0].distance;
  console.log(directions);
  localStorage.setItem('totalDistance', JSON.stringify(distance));
  // console.log(distance);

  const [show, setShow] = useState<boolean>(true);

  return (
    <VStack spacing={4}>
      <Box
        style={{
          width: '100vw',
          height: '100vh',
          position: 'relative',
        }}
        ref={mapContainerRef}
      />
      {show && (
        <Slide direction='bottom' in={isOpen} style={{ zIndex: 10 }}>
          <Stack
            p={4}
            spacing={7}
            style={{
              borderRadius: '2rem 2rem 0 0',
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
            <Text mt={'0.5rem'} color={'accent'} fontWeight={'semibold'} fontSize={'xl'} px={1}>
              Your daily commute details
            </Text>
            <HomeOfficeAddressLayOver markars={markars} onToggle={onToggle} />
          </Stack>
        </Slide>
      )}
    </VStack>
  );
}

export default SetupDailyRoute;
