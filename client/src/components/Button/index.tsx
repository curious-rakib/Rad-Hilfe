import { Button } from '@chakra-ui/react';

const SubmitButton = ({

    loadingText,
    bg,
    size,
    w,
    color,
    text,
}: {

    loadingText: string;
    w: string;
    bg: string;
    size: string;
    color: string;
    text: string;
}) => {
    return (
        <Button w={w} loadingText={loadingText} size={size} bg={bg} color={color}>
            {text}
        </Button>
    );
};
export default SubmitButton;
