import { Box, FormControl, Input, Text } from '@chakra-ui/react';

const InputTechnician = ({ id, isRequired, type, label, placeholder, colorScheme }: { id: string; isRequired: boolean; type: string; label: string; placeholder: string; colorScheme: string }) => {
	return (
		<Box>
			<FormControl
				id={id}
				isRequired={isRequired}>
				<Text
					fontSize={'1.5rem'}
					fontWeight={'500'}
					color={colorScheme}>
					{label}
				</Text>
				<Input
					mb={'2rem'}
					type={type}
					placeholder={placeholder}
					variant={'unstyled'}
					_placeholder={{ color: 'colorScheme', borderColor: 'colorScheme', fontSize: '1rem', fontWeight: '500' }}
					_focusVisible={{ borderColor: 'colorScheme' }}
					paddingBottom={'0.10rem'}
					borderRadius={'0'}
					borderBottom={'0.125rem solid'}
					borderBottomColor={colorScheme}
				/>
			</FormControl>
		</Box>
	);
};

export default InputTechnician;
