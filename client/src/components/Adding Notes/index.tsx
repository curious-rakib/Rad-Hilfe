import { Box, Button, Flex, Input, Text } from '@chakra-ui/react';
import { MouseEventHandler, useState } from 'react';
import { GrAddCircle } from 'react-icons/gr';
import { IconContext } from 'react-icons';

const AddingNotes = () => {
	const [notes, setNotes] = useState<string[]>([]);
	const [input, setInput] = useState<string>('');

	const handleAdd = () => {
		if (!input && input.length === 0) return;
		setNotes((previousNotes) => [...previousNotes, input]);
		setInput('');
	};

	return (
		<Flex
			direction={'column'}
			alignItems={'center'}>
			{notes.map((note, index) => (
				<Box
					key={index}
					bg={'#d9d9d9'}
					w={'20rem'}
					h={'4rem'}
					m={'.30rem'}
					p={'.5rem'}
					borderRadius={'1rem'}>
					<Text
						color={'secondary'}
						fontFamily={'Inter'}
						fontWeight={'600'}
						fontSize={'1rem'}>
						{note}
					</Text>
				</Box>
			))}

			<Flex
				mt={'1rem'}
				gap={'1rem'}>
				<Input
					placeholder="Add Note"
					_placeholder={{ color: 'secondary' }}
					bg={'#d9d9d9'}
					color={'secondary'}
					value={input}
					onChange={(event) => setInput(event.target.value)}
				/>
				<Button
					bg={'#d9d9d9'}
					onClick={handleAdd}>
					<IconContext.Provider value={{ color: 'red' }}>
						<GrAddCircle size={30} />
					</IconContext.Provider>
				</Button>
			</Flex>
		</Flex>
	);
};

export default AddingNotes;
