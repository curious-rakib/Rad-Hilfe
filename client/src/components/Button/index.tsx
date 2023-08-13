import { Button } from '@chakra-ui/react';
import { MouseEventHandler } from 'react';

const SubmitButton = ({
    onClick,
    loadingText,
    fontWeight,
    borderRadius,
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
    borderRadius: string;
    fontWeight: string
}) => {
    return (
        <Button onClick={onClick} w={w} loadingText={loadingText} size={size} bg={bg} color={color}
            borderRadius={borderRadius} fontWeight={fontWeight}
        >
            {text}
        </Button>
    );
};
export default SubmitButton;
