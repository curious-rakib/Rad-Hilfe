import { SearchIcon } from '@chakra-ui/icons';
import { Input, InputGroup, InputLeftElement, InputRightElement, Spinner } from '@chakra-ui/react';
import { useState } from 'react';
import './search.styles.css';

const SearchBox = () => {
	const [showSpinner, setShowSpinner] = useState<boolean>(false);
	const [input, setInput] = useState<string>('');
	const handleInputChange = async () => {
		setInput('');
	};
	return (
		<div className="search-container">
			<InputGroup>
				<InputLeftElement pointerEvents="none">
					<SearchIcon
						color="gray.500"
						fontSize={20}
					/>
				</InputLeftElement>
				<Input
					type="text"
					placeholder="Search Cases..."
					focusBorderColor="secondary"
					onChange={handleInputChange}
				/>

				{showSpinner && (
					<InputRightElement>
						<Spinner color="secondary" />
					</InputRightElement>
				)}
			</InputGroup>
		</div>
	);
};

export default SearchBox;
