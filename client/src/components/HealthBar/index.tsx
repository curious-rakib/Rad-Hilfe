import React from 'react';
import { Progress } from '@chakra-ui/react';

function HealthBar({ health, colorScheme }: { health: number, colorScheme: string }) {
    return (
        <>
            <Progress value={health} colorScheme={colorScheme} />
        </>
    )
}

export default HealthBar