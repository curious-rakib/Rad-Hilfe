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
import { signup } from '../../features/cyclist/cyclistSignup-slice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { createAccount } from '../../services/authentication';

// const initialUserInfo = {
//     first: '',
//     last: '',
//     contact: '',
//     email: '',
//     password: '',
//     confirmpassword: ''
// };

const SignUp = () => {
    const dispatch = useAppDispatch();
    // const [signup, setSignup] = useState(initialUserInfo)
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;

        const dataObj = { [name]: value }
        // setSignup((prevState) => ({
        //     ...prevState,
        //     [name]: value
        // }))
        console.log(dataObj);
        dispatch(signup(dataObj))

    };

    const { first, last, email, password, phone } = useAppSelector((state) => state.input);
    console.log(first, last, email, password, phone);


    const handleClick = async () => {

        const name = first + last;
        const userData = { name, email, password, phone };
        localStorage.setItem('userData', JSON.stringify(userData));
        const registeredUser = await createAccount(userData);
        console.log('registeredUser     ', registeredUser);


    }
    const handleGoogleAuth = async (event: any) => {
        event.preventDefault();
        console.log('heelo');

    }
    const handleFacebookAuth = async (event: any) => {


    }
    // console.log(signup);
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
                                borderColor='accent' _placeholder={{ color: 'accent', opacity: '60%' }} color={'accent'} />
                        </HStack>

                        <InputField
                            id='phone'
                            isRequired={true}
                            type='text'
                            placeholder='Contact'
                            onChange={handleChange}
                            name='phone'
                            borderColor='accent' _placeholder={{ color: 'accent', opacity: '60%' }} color={'accent'} />
                        <InputField
                            id='email'
                            isRequired={true}
                            type='email'

                            placeholder='Email'
                            onChange={handleChange}
                            name='email'
                            borderColor='accent' _placeholder={{ color: 'accent', opacity: '60%' }} color={'accent'} />
                        <InputField
                            id='password'
                            isRequired={true}
                            type='password'
                            placeholder='Password'
                            onChange={handleChange}
                            name='password'
                            borderColor='accent' _placeholder={{ color: 'accent', opacity: '60%' }} color={'accent'} />
                        <InputField
                            id='confirmpassword'
                            isRequired={true}
                            type='password'
                            placeholder='Confirm Password'
                            onChange={handleChange}
                            name='confirmpassword'
                            borderColor='accent' _placeholder={{ color: 'accent', opacity: '60%' }} color={'accent'} />

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


