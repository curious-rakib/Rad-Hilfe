import { Select } from '@chakra-ui/react';
import './filter.styles.css';

const FilterComponent = ({ name, options, width }: { name: string; options: string[]; width: string }) => {
	return (
		<>
			<Select
				color="secondary"
				variant="unstyled"
				placeholder={name}
				size="md"
				fontFamily={'Inter'}
				fontSize={16}
				fontWeight={400}
				focusBorderColor="secondary"
				iconSize="30"
				width={`${width}%`}>
				{options.map((option, index) => (
					<option
						key={index}
						value={option}>
						{option}
					</option>
				))}
			</Select>
		</>
	);
};

export default FilterComponent;
