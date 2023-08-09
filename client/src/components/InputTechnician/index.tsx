import { Box, FormControl, Input, Stack } from '@chakra-ui/react';

const InputTechnician = ({ id, isRequired, type, placeholder }: { id: string; isRequired: boolean; type: string; placeholder: string }) => {
	return (
		<Box>
			<FormControl
				id={id}
				isRequired={isRequired}>
				<Input
					type={type}
					placeholder={placeholder}
					variant="flushed"
				/>
			</FormControl>
		</Box>
	);
};

export default InputTechnician;
