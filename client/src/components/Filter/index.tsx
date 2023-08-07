import { Select, background } from '@chakra-ui/react';
import './filter.styles.css';

const FilterComponent = ({ name, options }: { name: string; options: string[] }) => {
	return (
		<>
			<Select
				bg={'inherit'}
				color="secondary"
				variant="unstyled"
				placeholder={name}
				_placeholder={{ backgroundColor: 'white' }}
				size="md"
				fontFamily={'Inter'}
				fontSize={16}
				fontWeight={400}
				focusBorderColor="secondary"
				iconSize="30">
				{options.map((option, index) => (
					<option
						style={{ backgroundColor: 'white' }}
						key={index}
						value={option}
						color="secondary">
						{option}
					</option>
				))}
			</Select>
		</>
	);
};

export default FilterComponent;
