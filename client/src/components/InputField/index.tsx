import { Box, FormControl, Input } from '@chakra-ui/react';
import { color } from 'framer-motion';

const InputField = ({
  id,
  isRequired,
  type,
  placeholder,
  onChange,
  name,
  borderColor,
  _placeholder
}: {
  id: string;
  isRequired: boolean;
  type: string;
  placeholder: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  name: string;
  borderColor: string;
  _placeholder?: {
    color: string,
    opacity: string
  }
}) => {
  return (
    <Box>
      <FormControl id={id} isRequired={isRequired}>
        <Input
          type={type}
          placeholder={placeholder}
          rounded={'xl'}
          onChange={onChange}
          name={name}
          borderColor={borderColor}
          _placeholder={_placeholder}
        />
      </FormControl>
    </Box>
  );
};
export default InputField;
