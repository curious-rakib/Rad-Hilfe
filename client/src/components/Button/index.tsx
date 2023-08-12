import { Button } from '@chakra-ui/react';
import { MouseEventHandler } from 'react';

const SubmitButton = ({
  borderRadius,
  onClick,
  loadingText,
  bg,
  size,
  w,
  color,
  text,
}: {
  borderRadius?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  loadingText: string;
  w: string;
  bg: string;
  size: string;
  color: string;
  text: string;
}) => {
  return (
    <Button
      borderRadius={borderRadius}
      onClick={onClick}
      w={w}
      loadingText={loadingText}
      size={size}
      bg={bg}
      color={color}
      fontWeight={'700'}
    >
      {text}
    </Button>
  );
};
export default SubmitButton;
