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
	_placeholder,
	color,
	onToggle,
}: {
	id: string;
	isRequired: boolean;
	type: string;
	placeholder: string;
	onChange: React.ChangeEventHandler<HTMLInputElement>;
	name: string;
	borderColor: string;
	_placeholder?: {
		color: string;
		opacity: string;
	};
	color: string;
	onToggle?: Function;
}) => {
	return (
		<Box>
			<FormControl
				id={id}
				isRequired={isRequired}>
				<Input
					type={type}
					placeholder={placeholder}
					rounded={'xl'}
					onChange={onChange}
					color={color}
					name={name}
					borderColor={borderColor}
					_placeholder={_placeholder}
					onFocus={() => {
						if (onToggle) return onToggle();
					}}
				/>
			</FormControl>
		</Box>
	);
};
export default InputField;
