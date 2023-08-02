import { Button } from '@chakra-ui/react';

const SubmitButton = ({
    loadingText,
    bg,
    size,
    color,
    text,
}: {
    loadingText: string;
    bg: string;
    size: string;
    color: string;
    text: string;
}) => {
    return (
        <Button loadingText={loadingText} size={size} bg={bg} color={color}>
            {text}
        </Button>
    );
};
export default SubmitButton;
