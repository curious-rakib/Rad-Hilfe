import { HStack, Box, Circle } from '@chakra-ui/react'
import React from 'react'

function Progress({ color }: { color: string }) {
    return (
        <Box>
            <HStack gap='0vw'>
                <Box bg="accent" p={'1vh 8vw 1vh 7vw'} clipPath={'polygon(0 0, 80% 0%, 100% 100%, 20% 100%)'}>
                    <Circle bg="white" size={'25px'} color="secondary">1</Circle>
                </Box>
                <Box bg="accent" p={'1vh 8vw 1vh 7vw'} clipPath={'polygon(0 0, 80% 0%, 100% 100%, 20% 100%)'}>
                    <Circle bg="white" size={'25px'} color="secondary">2</Circle>
                </Box>
                <Box bg="accent" p={'1vh 8vw 1vh 7vw'} clipPath={'polygon(0 0, 80% 0%, 100% 100%, 20% 100%)'}>
                    <Circle bg="white" size={'25px'} color="secondary">3</Circle>
                </Box>
                <Box bg="accent" p={'1vh 8vw 1vh 7vw'} clipPath={'polygon(0 0, 80% 0%, 100% 100%, 20% 100%)'}>
                    <Circle bg="white" size={'25px'} color="secondary">4</Circle>
                </Box>
            </HStack >
        </Box >
    )
}

export default Progress