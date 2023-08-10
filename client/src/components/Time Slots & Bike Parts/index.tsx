import { Box, Center } from '@chakra-ui/react';
import { useState } from 'react';

const LoopSlotOrPartsComponent = ({ item, onClick }: { item: string; onClick: Function }) => {
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
			borderRadius={'.63rem'}
			p={'.45rem'}
			fontSize={'.95rem'}
			fontFamily={'Inter'}
			onClick={handleClick}>
			<Center>
				<strong>{item === 'Front & Back Derailleur' ? (item = 'Derailleur') : item}</strong>
			</Center>
		</Box>
	);
};

export default LoopSlotOrPartsComponent;
