import {
    Image,
    Box,
    Center,
    Flex,
    HStack,
    Heading,
    Stack,
    Text,
} from '@chakra-ui/react';
import React, { ChangeEvent, useState } from 'react';
import InputField from '../../components/InputField';
import SubmitButton from '../../components/Button';
import logo from '../../assets/logo.svg';

const initialUserInfo = {
    first: '',
    last: '',
    contact: '',
    email: '',
    password: '',
    confirmpassword: ''
};

const SignUp = () => {
    const [signup, setSignup] = useState(initialUserInfo)
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setSignup((prevState) => ({
            ...prevState,
            [name]: value
        }))
    };
    const handleClick = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();

    }
    const handleGoogleAuth = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {


    }
    const handleFacebookAuth = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {


    }
    console.log(signup);
    return (
        <Box p={4}>
            <Stack spacing={8} mx={'auto'} maxW={'lg'}>
                <Center mt={10}>
                    <HStack>
                        <Heading fontSize={'4xl'} textAlign={'center'} color={'accent'}>
                            Slipstream
                        </Heading>
                        <Image src={logo} boxSize='50px' />
                    </HStack>
                </Center>

                <Box rounded={'xl'} pb={4}>
                    <Text
                        fontSize={'2xl'}
                        fontWeight={'bold'}
                        py={6}
                        textAlign={'left'}
                        color={'accent'}
                    >
                        Sign up
                    </Text>
                    <Stack spacing={5}>
                        <HStack>
                            <InputField
                                id='firstName'
                                isRequired={true}
                                type='text'
                                placeholder='First Name'
                                onChange={handleChange}
                                name='first'
                                borderColor='accent'
                                _placeholder={{ color: 'accent', opacity: '60%' }} color={'accent'} />

                            <InputField
                                id='lastName'
                                isRequired={true}
                                type='text'
                                placeholder='Last Name'
                                onChange={handleChange}
                                name='last'
                                borderColor='accent' _placeholder={{ color: 'accent', opacity: '60%' }} color={''} />
                        </HStack>

                        <InputField
                            id='contact'
                            isRequired={true}
                            type='contact'
                            placeholder='Contact'
                            onChange={handleChange}
                            name='contact'
                            borderColor='accent' _placeholder={{ color: 'accent', opacity: '60%' }} color={''} />
                        <InputField
                            id='email'
                            isRequired={true}
                            type='email'
                            placeholder='Email'
                            onChange={handleChange}
                            name='email'
                            borderColor='accent' _placeholder={{ color: 'accent', opacity: '60%' }} color={''} />
                        <InputField
                            id='password'
                            isRequired={true}
                            type='password'
                            placeholder='Password'
                            onChange={handleChange}
                            name='password'
                            borderColor='accent' _placeholder={{ color: 'accent', opacity: '60%' }} color={''} />
                        <InputField
                            id='confirmpassword'
                            isRequired={true}
                            type='password'
                            placeholder='Confirm Password'
                            onChange={handleChange}
                            name='confirmpassword'
                            borderColor='accent' _placeholder={{ color: 'accent', opacity: '60%' }} color={''} />

                        <Stack spacing={10} pt={2}>
                            <SubmitButton
                                onClick={handleClick}

                                loadingText='Submitting'
                                size='lg'
                                bg='accent'
                                w=''
                                color='secondary'
                                text='Sign Up'
                            />
                        </Stack>
                        <Flex align={'center'} justify={'space-between'} color={'accent'}>
                            <Text>Have an account?</Text>
                            <Text>SignIn</Text>
                        </Flex>

                        <Stack spacing={5} pt={2}>
                            <SubmitButton
                                onClick={handleGoogleAuth}
                                loadingText='Submitting'
                                size='lg'
                                bg='third'
                                w=''
                                color='secondary'
                                text='Continue With Google'
                            />
                            <SubmitButton
                                onClick={handleFacebookAuth}
                                loadingText='Submitting'
                                size='lg'
                                bg='fourth'
                                w=''
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

export default SignUp;
