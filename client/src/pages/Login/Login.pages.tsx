import { Box, Image, Center, Flex, FormControl, HStack, Heading, Input, Link, Stack, Text } from '@chakra-ui/react';
import InputField from '../../components/InputField';
import { ChangeEvent } from 'react';
import SubmitButton from '../../components/Button';
import logo from '../../assets/logo.svg'

const Login = () => {
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        // const { name, value } = event.target;
    }
    return (
        <Box

            p={4}

        >
            <Stack spacing={8} mx={'auto'} maxW={'lg'}>
                <Center mt={10}>
                    <HStack>
                        <Heading fontSize={'4xl'} textAlign={'center'} color={'accent'}>
                            Slipstream

                        </Heading>
                        <Image src={logo} boxSize='50px' />

                    </HStack>

                </Center>

                <Box rounded={'xl'} px={4} mt={16}>
                    <Text color={'accent'} fontWeight={'semibold'} fontSize={'2xl'} mb={5} >Sign In</Text>
                    <Stack spacing={5}>

                        <InputField
                            id='email'
                            isRequired={true}
                            type='email'
                            placeholder='Email'
                            onChange={handleChange}
                            name='email'
                            borderColor='accent' _placeholder={{ color: 'accent', opacity: '60%' }}


                        />
                        <InputField
                            id='password'
                            isRequired={true}
                            type='password'
                            placeholder='Password'
                            onChange={handleChange}
                            name='password' _placeholder={{ color: 'accent', opacity: '60%' }}
                            borderColor='accent'


                        />


                        <Stack spacing={10} pt={2}>
                            <SubmitButton
                                loadingText='Submitting'
                                size='lg'
                                w=''
                                bg='accent'
                                color='secondary'
                                text='Sign In'

                            />
                        </Stack>
                        <Stack

                            color={'accent'}

                        >
                            <Text >
                                Don't have an account? <Link>Sign up</Link>
                            </Text>

                        </Stack>

                        <Stack spacing={5} pt={2}>

                            <SubmitButton
                                loadingText='Submitting'
                                size='lg'
                                w=''
                                bg='third'
                                color='secondary'
                                text='Continue With Google'

                            />
                            <SubmitButton
                                loadingText='Submitting'
                                size='lg'
                                w=''
                                bg='fourth'
                                color='secondary'
                                text='Continue With Facebook'

                            />


                        </Stack>

                    </Stack>
                </Box>
            </Stack>
        </Box>
    );
};

export default Login;