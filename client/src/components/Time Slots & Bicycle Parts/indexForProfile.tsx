import { Box, Center } from '@chakra-ui/react';
import { useState } from 'react';

const LoopSlotOrPartsComponent = ({ item, onClick, outline }: { item: string; onClick: Function; outline: boolean }) => {
	const [isSelected, setIsSelected] = useState(false);

	const handleClick = () => {
		setIsSelected(!isSelected);
		onClick();
	};
	return (
		<Box
			w={'8.75rem'}
			m={1}
			bg={isSelected ? 'secondary' : 'accent'}
			color={isSelected ? 'accent' : 'secondary'}
			outline={outline ? '.01rem solid' : 'none'}
			outlineColor={outline && isSelected ? 'accent' : 'none'}
			borderRadius={'.63rem'}
			p={'.45rem'}
			fontSize={'.95rem'}
			fontFamily={'Inter'}
			onClick={handleClick}>
			<Center>
				<strong>{item === 'Front And Back Derailleur' ? (item = 'Derailleur') : item}</strong>
			</Center>
		</Box>
	);
};

export default LoopSlotOrPartsComponent;
