import { Button, HStack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
interface RecreationButton {
    id: any;
    text: string,
    chosen: boolean
}

const RecreationButton = () => {
    const [buttonsData, setButtonsData] = useState<RecreationButton[]>([])
    const buttonsInfo = [
        {
            id: 1,
            text: 'Urban',
            chosen: false
        },
        {
            id: 2,
            text: 'Sports',
            chosen: false
        },
        {
            id: 3,
            text: 'Off-road',
            chosen: false
        },

    ]

    useEffect(() => setButtonsData(buttonsInfo), [])
    const handleClick = (button: RecreationButton) => {
        const updatedButtonData = buttonsData.map((b) => b.id === button.id ? { ...b, chosen: !button.chosen } : b)
        setButtonsData(updatedButtonData);
    }
    console.log(buttonsData);
    return (
        <HStack>
            {
                buttonsData.map((button, index) => (
                    <Button
                        key={index}
                        variant={'unstyled'}

                        onClick={() => handleClick(button)}
                        w={28}
                        h={12}
                        borderRadius='20%'
                        bg={button.chosen ? 'fourth' : 'transparent'}
                        color={button.chosen ? 'secondary' : 'fourth'}
                        border={button.chosen ? 'none' : `2px solid`}
                        borderColor={button.chosen ? 'none' : 'fourth'}

                    >{button.text}</Button>
                ))
            }
        </HStack>
    );
};

export default RecreationButton;
;