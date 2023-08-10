import { Input, Box, Text } from '@chakra-ui/react';
import React from 'react';

const InputTechnician = ({ id, isRequired, type, placeholder }: { id: String; isRequired: Boolean; type: String; placeholder: String }) => {
	return (
		<Box>
			<Text></Text>
			<Input
				variant="flushed"
				placeholder="Flushed"
			/>
		</Box>
	);
};

export default InputTechnician;
