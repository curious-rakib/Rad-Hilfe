import { useEffect, useRef, useState } from 'react';
import mapboxgl, { Map } from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
// import { MapboxSearchBox } from '@mapbox/search-js-web';
import 'mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import { useNavigate } from 'react-router-dom';
import { config } from '../../../config.ts'


function SetupDailyRoute() {
    const mapContainerRef = useRef<HTMLDivElement>(null);
    const mapRef = useRef<Map | null>(null);

    mapboxgl.accessToken = config.mapboxAccess;
    useEffect(() => {
        if (mapContainerRef.current) {
            mapRef.current = new mapboxgl.Map({
                container: mapContainerRef.current,
                style: 'mapbox://styles/mapbox/satellite-streets-v12?optimize=true',
                center: [90.30857818617242, 23.880958224097034],
                zoom: 16,
            })
        }
    }, [])


    return (
        <div
            style={{ width: '100vw', height: '100vh' }}
            ref={mapContainerRef}
        />
    );
}

export default SetupDailyRoute