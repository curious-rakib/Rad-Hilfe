import { Stack, Switch } from '@chakra-ui/react';
import { useState } from 'react';


const SetSwitch = ({ setFullrevision }: { setFullrevision: Function }) => {
    const [isChecked, setIsChecked] = useState(false);
    const handleSwitchChange = () => {
        setFullrevision(!isChecked)
        setIsChecked(!isChecked);

    }


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