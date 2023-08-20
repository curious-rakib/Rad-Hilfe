import {
  Box,
  Image,
  Center,
  Flex,
  FormControl,
  HStack,
  Heading,
  Input,
  Stack,
  Text,
  useToast,
  Button,
} from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';
import InputField from '../../components/InputField';
import { ChangeEvent } from 'react';
import SubmitButton from '../../components/Button';
import logo from '../../assets/logo.svg';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { signin } from '../../features/cyclist/cyclistSignIn-slice';
import { profile, userLogin } from '../../services/authentication';

import facebookLogo from '../../assets/facebook-svgrepo-com.svg';
import googleLogo from '../../assets/google-svgrepo-com.svg';

const Login = () => {
  const toast = useToast();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const { name, value } = event.target;

    const dataObj = { [name]: value };

    dispatch(signin(dataObj));
  };

  const { email, password } = useAppSelector((state) => state.signInInput);

  const handleClick = async () => {
    const signInUserData = { email, password };
    const token = await userLogin(signInUserData);
    localStorage.setItem('accessToken', token);

    if (token) {
      toast({
        title: 'Logged In Succefully',

        status: 'success',
        duration: 10000,
        position: 'top-right',
        isClosable: true,
      });
      if (localStorage.getItem('accessToken')) {
        const cyclist = await profile();

        if (cyclist && cyclist.bicycle) {
          navigate('/home');
        } else {
          navigate('/setup-daily-route');
        }
      }
    }
  };

  // const handleClick = async (event: any) => {
  //   const signInUserData = { email, password };

  //   const token = await userLogin(signInUserData);

  //   localStorage.setItem('accessToken', token);
  //   navigate('/setup-daily-route');
  //   if (token) {
  //     toast({
  //       title: 'Logged In Succefully',

  //       status: 'success',
  //       duration: 10000,
  //       position: 'top-right',
  //       isClosable: true,
  //     });
  //   }
  // };

  return (
    <Box p={4}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'}>
        <Center mt={10}>
          <HStack>
            <Heading fontFamily={'Inter'} fontSize={'4xl'} textAlign={'center'} color={'accent'}>
              Slipstream
            </Heading>
            <Image src={logo} boxSize='50px' />
          </HStack>
        </Center>

        <Box rounded={'xl'} px={4} mt={16}>
          <Text color={'accent'} fontWeight={'bold'} fontSize={'2xl'} mb={5}>
            Sign In
          </Text>
          <Stack spacing={5}>
            <InputField
              id='email'
              isRequired={true}
              type='email'
              placeholder='Email'
              onChange={handleChange}
              name='email'
              borderColor='accent'
              _placeholder={{ color: 'accent', opacity: '60%' }}
              color={'accent'}
              borderRadius={''}
            />
            <InputField
              id='password'
              isRequired={true}
              type='password'
              placeholder='Password'
              onChange={handleChange}
              name='password'
              _placeholder={{ color: 'accent', opacity: '60%' }}
              borderColor='accent'
              color={'accent'}
              borderRadius={''}
            />

            <Stack spacing={10} pt={2}>
              {/* <Link to={'/setup-daily-route'}> */}
              <SubmitButton
                borderRadius={'1.25rem'}
                onClick={handleClick}
                loadingText='Submitting'
                size='lg'
                w='100%'
                bg='accent'
                color='secondary'
                text='Sign In'
                fontWeight={''}
              />
              {/* </Link> */}
            </Stack>
            <Stack color={'accent'} mb={'1.5rem'} mt={'-0.5rem'}>
              <Text>
                Don't have an account?{' '}
                <Link to={'/signup'} style={{ textDecoration: 'underline' }}>
                  Sign Up
                </Link>
              </Text>
            </Stack>

            <Stack spacing={5} pt={2}>
              <SubmitButton
                svgUrl={googleLogo}
                borderRadius={'1.25rem'}
                loadingText='Submitting'
                size='lg'
                w=''
                bg='third'
                color='secondary'
                text='Sign in with Google'
                fontWeight={''}
              />
              <SubmitButton
                svgUrl={facebookLogo}
                borderRadius={'1.25rem'}
                loadingText='Submitting'
                size='lg'
                w=''
                bg='fourth'
                color='secondary'
                text='Sign in with Facebook'
                fontWeight={''}
              />
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default Login;
