import { Box, Image, Center, Flex, FormControl, HStack, Heading, Input, Link, Stack, Text } from '@chakra-ui/react';
import InputField from '../../components/InputField';
import { ChangeEvent } from 'react';
import SubmitButton from '../../components/Button';
import logo from '../../assets/logo.svg'
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { signin } from '../../features/cyclist/cyclistSignIn-slice';
import { userLogin } from '../../services/authentication';

const Login = () => {
    const dispatch = useAppDispatch();
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {

        event.preventDefault();
        const { name, value } = event.target;

        const dataObj = { [name]: value }


        dispatch(signin(dataObj))

    }
    const { email, password } = useAppSelector(
        (state) => state.signInInput
    );


    const handleClick = async (event: any) => {

        const signInUserData = { email, password };

        const token = await userLogin(signInUserData);
        console.log('signInUserUser     ', token);


    }
    return (
        <Box

            p={3}

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

                <Box rounded={'xl'} px={4} mt={20}>
                    <Text color={'accent'} fontWeight={'semibold'} fontSize={'2xl'} mb={5} px={1}
                    >Sign In</Text>
                    <Stack spacing={5}>

                        <InputField
                            id='email'
                            isRequired={true}
                            type='email'
                            placeholder='Email'
                            onChange={handleChange}
                            name='email'
                            borderColor='accent' _placeholder={{ color: 'accent', opacity: '60%' }} color={'accent'}

                        />
                        <InputField
                            id='password'
                            isRequired={true}
                            type='password'
                            placeholder='Password'
                            onChange={handleChange}
                            name='password' _placeholder={{ color: 'accent', opacity: '60%' }}
                            borderColor='accent' color={'accent'}

                        />


                        <Stack spacing={10} pt={2}>
                            <SubmitButton
                                fontWeight='bold'
                                borderRadius='2xl'
                                onClick={handleClick}
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
                                Don't have an account, <Link>
                                    <Text as='u'>Sign up</Text>
                                </Link>
                            </Text>

                        </Stack>

                        <Stack spacing={5} pt={2}>

                            <SubmitButton
                                fontWeight='bold'
                                borderRadius='2xl'
                                loadingText='Submitting'
                                size='lg'
                                w=''
                                bg='third'
                                color='secondary'
                                text='Login With Google'

                            />
                            <SubmitButton
                                fontWeight='bold'
                                borderRadius='2xl'
                                loadingText='Submitting'
                                size='lg'
                                w=''
                                bg='fourth'
                                color='secondary'
                                text='Login With Facebook'

                            />


                        </Stack>

                    </Stack>
                </Box>
            </Stack>
        </Box>
    );
};

export default Login;


