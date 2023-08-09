import { Stack, Switch } from '@chakra-ui/react';
import { useState } from 'react';


const SetSwitch = () => {
    const [isChecked, setIsChecked] = useState(false);
    const handleSwitchChange = () => {
        setIsChecked(true);
    }
    console.log(isChecked);

    return (
        <Stack align='center' direction='row'>

            <Switch size='md'
                onChange={handleSwitchChange}
                colorScheme='teal'
            // isChecked={isChecked} 
            />

        </Stack>
    );
};

export default SetSwitch;