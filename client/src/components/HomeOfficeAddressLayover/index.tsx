
import { Box, Center, Flex, Stack } from "@chakra-ui/react"


import InputField from "../InputField"
import SubmitButton from "../Button"
function HomeOfficeAddressLayover() {
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