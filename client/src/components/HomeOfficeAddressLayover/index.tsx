
import { Box, Center, Flex, Stack } from "@chakra-ui/react"


import InputField from "../InputField"
import SubmitButton from "../Button"
function HomeOfficeAddressLayover({ onToggle }: { onToggle: Function }) {
    const handleChange = () => {

    }
    return (
        < Stack spacing={6}



        >
            <InputField
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
            <InputField
                id='work'
                isRequired={true}
                type='text'
                placeholder='Work Address'
                onChange={handleChange}
                name='work'
                borderColor='accent'
                color="accent"
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

        </Stack  >





    )
}

export default HomeOfficeAddressLayover