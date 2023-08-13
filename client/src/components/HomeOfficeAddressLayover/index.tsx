import {
    Box,
    Button,
    Center,
    Flex,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Stack,
    useDisclosure,
} from '@chakra-ui/react';

import InputField from '../InputField';
import SubmitButton from '../Button';
import { useState } from 'react';
function HomeOfficeAddressLayover({ onToggle }: { onToggle: Function }, { setShow }: { setShow: Function }) {

    const handleChange = () => {
        // console.log('clcik from home');
    };

    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Stack spacing={9}>
            <Modal onClose={onClose} isOpen={isOpen} isCentered>
                <ModalOverlay />
                <ModalContent h={100}>
                    {/* <ModalHeader>Modal Title</ModalHeader> */}
                    <ModalCloseButton />
                    <ModalBody>
                        <p>
                            Please,set a marker of your address
                        </p>
                    </ModalBody>

                </ModalContent>
            </Modal>
            <InputField


                id='home'
                isRequired={true}
                type='text'
                placeholder='Home Address'
                onChange={handleChange}
                name='home'
                borderColor='accent'
                color="accent"
                onToggle={onToggle} borderRadius={''}
            />
            {/* <Button
                onClick={onOpen}
                variant={'unstyled'}
                color={'gray.50'}
                opacity={'60%'}
                border={'2px solid'}
                borderColor={'accent'}
                rounded={'xl'}
            >
                Home Address
            </Button> */}
            <InputField
                borderRadius='10px'
                id='work'
                isRequired={true}
                type='text'
                placeholder='Work Address'
                onChange={handleChange}
                name='work'
                borderColor='accent'
                color='accent'
                onToggle={onToggle}
            />

            <Center mt={-3}>
                <SubmitButton
                    loadingText='Submitting'
                    size='lg'
                    bg='accent'
                    w='200px'
                    color='secondary'
                    text='Next' borderRadius={'10px'} fontWeight={'bold'} />
            </Center>
        </Stack>
    );
}

export default HomeOfficeAddressLayover;
