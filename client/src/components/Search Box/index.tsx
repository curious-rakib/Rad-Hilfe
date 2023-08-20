import { SearchIcon } from '@chakra-ui/icons';
import { Flex, Input, InputGroup, InputLeftElement, InputRightElement, Spinner } from '@chakra-ui/react';
import { ChangeEvent, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { createPresentableCases } from '../../features/technician/slices/casesPresentationSlice';
import { extractCaseData } from '../../pages/Technician/Dashboard/Cases';

const SearchBox = () => {
	const cases = useAppSelector((state: any) => state.presentableCases);
	const dispatch = useAppDispatch();

	const [showSpinner, setShowSpinner] = useState<boolean>(false);
	const [input, setInput] = useState<string>('');

	const handleInputChange = async (event: ChangeEvent<HTMLInputElement>) => {
		const inputValue = event.target.value.toLowerCase();
		setInput(inputValue);
		// setShowSpinner(true);

		if (inputValue.length === 0) {
			dispatch(createPresentableCases(extractCaseData(cases)));
			return;
		}

		const filteredCases = cases.filter((singleCase: any) => {
			const clientName = singleCase['Client Name'].toLowerCase();
			return clientName.includes(input);
		});

		console.log('Filtered Cases:', filteredCases);
		dispatch(createPresentableCases(filteredCases));

		// setShowSpinner(false);
	};

	return (
		<Flex
			alignItems="center"
			justifyContent="flex-start"
			p={2}
			gap={2}
			w="350px"
			borderRadius="15px"
			bg="rgba(217, 217, 217, 0.01)">
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
					bg="#f7f7f7"
					color="#001f3f"
					borderColor="#001f3f"
					width="350px"
					fontFamily="Inter, sans-serif"
					fontSize="16px"
					fontStyle="normal"
					fontWeight="400"
					lineHeight="6px"
					_placeholder={{ color: '#757474', opacity: 1 }}
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
