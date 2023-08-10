import { Box, FormControl, Input, Text } from '@chakra-ui/react';

const InputTechnician = ({ id, isRequired, type, label, placeholder }: { id: string; isRequired: boolean; type: string; label: string; placeholder: string }) => {
	return (
		<Box>
			<FormControl
				id={id}
				isRequired={isRequired}>
				<Text
					fontSize={'1.5rem'}
					fontWeight={'500'}>
					{label}
				</Text>
				<Input
					mb={'2rem'}
					type={type}
					placeholder={placeholder}
					variant={'unstyled'}
					_placeholder={{ color: 'secondary', borderColor: 'secondary', fontSize: '1rem', fontWeight: '500' }}
					_focusVisible={{ borderColor: 'secondary' }}
					paddingBottom={'0.75rem'}
					borderRadius={'0'}
					borderBottom={'0.125rem solid #001F3F'}
				/>
			</FormControl>
		</Box>
	);
};

export default InputTechnician;
