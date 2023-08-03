import { HStack, Box, Circle } from '@chakra-ui/react'
import React from 'react'

function Progress({ color, pagenumber }: { color: string, pagenumber: number }) {
    return (
        <Box>
            <HStack gap='0vw'>
                <Box bg={color} p={'1px 1px 1px 1px'} borderColor='color' clipPath={'polygon(0 0, 80% 0%, 100% 100%, 20% 100%)'} >

                    <Box bg={pagenumber > 1 ? color : 'secondary'} p={'1vh 7vw 1vh 7vw'} borderColor='color' clipPath={'polygon(0 0, 80% 0%, 100% 100%, 20% 100%)'}>
                        <Circle size={'25px'}
                            color="secondary"
                            border='1px  solid' borderColor="secondary">1</Circle>
                    </Box>
                </Box>
                <Box bg={color} p={'1px 1px 1px 1px'} borderColor='color' clipPath={'polygon(0 0, 80% 0%, 100% 100%, 20% 100%)'} >
                    <Box bg={pagenumber >= 2 ? color : 'secondary'} p={'1vh 7vw 1vh 7vw'} clipPath={'polygon(0 0, 80% 0%, 100% 100%, 20% 100%)'}>
                        <Circle size={'25px'} color="secondary" border='1px  solid' borderColor="secondary">2</Circle>
                    </Box>
                </Box>
                <Box bg={color} p={'1px 1px 1px 1px'} borderColor='color' clipPath={'polygon(0 0, 80% 0%, 100% 100%, 20% 100%)'} >
                    <Box bg={pagenumber >= 3 ? color : 'secondary'} p={'1vh 7vw 1vh 7vw'} borderColor={color} clipPath={'polygon(0 0, 80% 0%, 100% 100%, 20% 100%)'}>
                        <Circle bg="white" size={'25px'} color="secondary" border='1px  solid' borderColor="secondary">3</Circle>
                    </Box>
                </Box>
                <Box bg={color} p={'1px 1px 1px 1px'} borderColor='color' clipPath={'polygon(0 0, 80% 0%, 100% 100%, 20% 100%)'} >
                    <Box bg={pagenumber == 4 ? color : 'secondary'} p={'1vh 7vw 1vh 7vw'} clipPath={'polygon(0 0, 80% 0%, 100% 100%, 20% 100%)'}>
                        <Circle bg="white" size={'25px'} color="secondary" border='1px  solid' borderColor="secondary">4</Circle>
                    </Box>
                </Box>
            </HStack >
        </Box >
    )
}

export default Progress