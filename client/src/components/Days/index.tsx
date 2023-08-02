import { Box, Button, HStack, Stack } from '@chakra-ui/react';

const Days = ({
    colorScheme,

}: { colorScheme: string }) => {
    return (
        <HStack>
            {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day) => (
                <Button
                    key={day}
                    bg={colorScheme}
                    width='60px'
                    borderRadius='60px'
                    height='50px'

                >
                    {day}
                </Button>
            ))}
        </HStack>
    );
};

export default Days;
