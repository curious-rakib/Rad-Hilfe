import { Box, FormControl, Input } from '@chakra-ui/react';

const InputField = ({
  id,
  isRequired,
  type,
  placeholder,
  onChange,
  name,
  borderColor,
}: {
  id: string;
  isRequired: boolean;
  type: string;
  placeholder: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  name: string;
  borderColor: string;
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
          _placeholder={{
            color: 'accent',
            opacity: '60%',
          }}
        />
      </FormControl>
    </Box>
  );
};
export default InputField;
