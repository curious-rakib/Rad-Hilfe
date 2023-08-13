import { Button } from '@chakra-ui/react';
import { MouseEventHandler } from 'react';

const SubmitButton = ({
  svgUrl,
  borderRadius,
  onClick,
  fontWeight,
  loadingText,
  bg,
  size,
  w,
  color,
  text,
}: {
  svgUrl?: string;
  borderRadius?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  fontWeight: string;
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
      {' '}
      {svgUrl && <img src={svgUrl} style={{ paddingRight: '.5rem' }}></img>}
      {text}
    </Button>
  );
};
export default SubmitButton;
