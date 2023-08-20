import { Box, Button, Flex, Input, Text, Icon } from '@chakra-ui/react';
import { MouseEventHandler, useState } from 'react';
import { GrAdd } from 'react-icons/gr';
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
			alignItems={'center'}

		>
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
				gap={'1rem'}
				position={'fixed'}
				bottom={70} // Stick to the top
				right={380} // Stick to the right
				zIndex={1}


			>
				<Input

					placeholder="Write a note..."
					_placeholder={{ color: 'secondary' }}
					bg={'#d9d9d9'}
					color={'secondary'}
					value={input}
					onChange={(event) => setInput(event.target.value)}
				/>
				<Button
					bg={'#d9d9d9'}
					onClick={handleAdd}
					color={'secondary'}
					borderRadius={'.75rem'}>
					<Flex
						justify={'center'}
						alignItems={'center'}>
						<Text m={'.25rem'}> Add</Text>
						<Icon
							as={GrAdd}
							color={'secondary'}
							boxSize={'1.15rem'}
						/>
					</Flex>
				</Button>
			</Flex>
		</Flex>
	);
};

export default AddingNotes;
