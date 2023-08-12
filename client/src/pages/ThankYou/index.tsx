'use client'
import { Link as ReactRouterLink } from 'react-router-dom'
import { Link as ChakraLink, LinkProps } from '@chakra-ui/react'
import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import { ArrowBackIcon, CheckCircleIcon } from '@chakra-ui/icons'

export default function Success() {
    return (
        <Box color={'accent'}>

            <ChakraLink as={ReactRouterLink} to='/home'>

                <Flex mt={7} mx={7} gap={3} alignItems={'center'}> <ArrowBackIcon boxSize={30} />
                    <Text fontSize='xs'>Go back home </Text></Flex>
            </ChakraLink>



            <Flex
                flexDirection={'column'}
                justifyContent={'center'}
                alignItems={'center'}
                gap={8}
                h={'90vh'}
                textAlign="center" py={1} px={6}>
                <CheckCircleIcon boxSize={'100px'} color={'green.500'} />
                <Heading as="h1" size="3xl" mt={1} >
                    Thank You
                </Heading>
                <Text mt={'-15px'}>for your purchase | Stay With Us</Text>

            </Flex>
        </Box>

    )
}