import { Box, Button, Flex, FormControl, FormLabel, HStack, Heading, Input, InputGroup, InputRightElement, Link, Stack, Text, useColorModeValue } from "@chakra-ui/react";


const SignUp = () => {
    return (
        <Flex

            align={'center'}
            justify={'center'}

            bg={useColorModeValue('blue.900', 'blue.900')}>
            <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                <Stack align={'center'}>
                    <Heading fontSize={'4xl'} textAlign={'center'} color={"green.300"}>
                        Slipstream
                    </Heading>

                </Stack>
                <Box
                    rounded={'xl'}

                    boxShadow={'lg'}
                    p={4}>
                    <Stack>
                        <HStack>
                            <Box>
                                <FormControl id="firstName" isRequired>

                                    <Input type="text"
                                        placeholder="First Name"
                                    />
                                </FormControl>
                            </Box>
                            <Box>
                                <FormControl id="lastName">

                                    <Input type="text"
                                        placeholder="Last Name" />
                                </FormControl>
                            </Box>
                        </HStack>
                        <FormControl id="email" isRequired>

                            <Input type="email" placeholder="Email" />
                        </FormControl>
                        <FormControl id="password" isRequired>

                            <InputGroup>
                                <Input type={'password'} placeholder="Password" />
                                <InputRightElement h={'full'}>
                                    <Button
                                        variant={'ghost'}
                                    >

                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                        </FormControl>
                        <Stack spacing={10} pt={2}>
                            <Button
                                loadingText="Submitting"
                                size="lg"
                                bg={'blue.400'}
                                color={'white'}
                                _hover={{
                                    bg: 'blue.500',
                                }}>
                                Sign up
                            </Button>
                        </Stack>
                        <Stack pt={6}>
                            <Text align={'center'}>
                                Already a user? <Link color={'blue.400'}>Login</Link>
                            </Text>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    )
};

export default SignUp;





