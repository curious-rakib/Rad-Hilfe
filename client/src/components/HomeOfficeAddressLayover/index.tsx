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
function HomeOfficeAddressLayover({ onToggle }: { onToggle: Function }) {
    const handleChange = () => {
        // console.log('clcik from home');
    };

    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <Stack spacing={6}>
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
                    {/* <ModalFooter>
                        <Button onClick={onClose}>Close</Button>
                    </ModalFooter> */}
                </ModalContent>
            </Modal>
            <InputField
                // onF={onOpen}

                id='home'
                isRequired={true}
                type='text'
                placeholder='Home Address'
                onChange={handleChange}
                name='home'
                borderColor='accent'
                color="accent"
                onToggle={onToggle}

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

            <Center>
                <SubmitButton
                    loadingText='Submitting'
                    size='lg'
                    bg='accent'
                    w='200px'
                    color='secondary'
                    text='Next'
                />
            </Center>
        </Stack>
    );
}

export default HomeOfficeAddressLayover;
