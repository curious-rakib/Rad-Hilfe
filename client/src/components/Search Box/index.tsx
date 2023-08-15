import { SearchIcon } from '@chakra-ui/icons';
import { Flex, Input, InputGroup, InputLeftElement, InputRightElement, Spinner } from '@chakra-ui/react';
import { useState } from 'react';
import './search.styles.css';

const SearchBox = () => {
	const [showSpinner, setShowSpinner] = useState<boolean>(false);
	const [input, setInput] = useState<string>('');
	const handleInputChange = async () => {
		setInput('');
	};
	return (
		<Flex
			alignItems={'center'}
			justify={'flex-start'}
			p={'10px'}
			gap={'10px'}
			w={'350px'}
			borderRadius={'15px'}
			bg={' rgba(217, 217, 217, 0.01)'}>
			<InputGroup>
				<InputLeftElement pointerEvents="none">
					<SearchIcon
						color="gray.500"
						fontSize={20}
					/>
				</InputLeftElement>
				<Input
					type="text"
					placeholder="Search Cases By Name..."
					focusBorderColor="secondary"
					onChange={handleInputChange}
				/>

				{showSpinner && (
					<InputRightElement>
						<Spinner
							color="secondary"
							size="sm"
						/>
					</InputRightElement>
				)}
			</InputGroup>
		</Flex>
	);
};

export default SearchBox;
