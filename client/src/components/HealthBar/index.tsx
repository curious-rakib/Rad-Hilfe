import React from 'react';
import { Progress, Flex, Text, Grid, GridItem } from '@chakra-ui/react';

function HealthBar({ health, partname }: { health: number, partname: string }) {
    return (
        <Grid templateColumns='repeat(7, 1fr)'>
            <GridItem colSpan={2}>
                <Text>{partname}</Text>
            </GridItem>
            <GridItem colSpan={5} alignItems={'center'} marginTop={'auto'} marginBottom={'auto'}>
                <Progress value={health} colorScheme='yellow' borderRadius={'8px'} />
            </GridItem>
        </Grid>
    )
}

export default HealthBar