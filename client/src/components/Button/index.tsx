import { Button } from '@chakra-ui/react';
import { MouseEventHandler } from 'react';

const SubmitButton = ({
    onClick,
    loadingText,
    bg,
    size,
    w,
    color,
    text,
}: {
    onClick?: MouseEventHandler<HTMLButtonElement>
    loadingText: string;
    w: string;
    bg: string;
    size: string;
    color: string;
    text: string;
}) => {
    return (
        <Button onClick={onClick} w={w} loadingText={loadingText} size={size} bg={bg} color={color}>
            {text}
        </Button>
    );
};
export default SubmitButton;
