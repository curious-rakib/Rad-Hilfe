import { Box, Flex, Link, Text } from '@chakra-ui/react';
import { TbRectangleVerticalFilled } from 'react-icons/tb';
import { IconContext } from 'react-icons';
import SolidVerticalRectangle from '../Solid Vertical Rectangle';
import AddingNotes from '../Adding Notes';

const TechnicianArticles = ({ articles }: { articles: any[] }) => {
	return (
		<div



		>
			{articles &&
				articles.map((article, index) => {
					return (

						<Box

							h={'4rem'}
						>
							<Box
								borderRadius={'1rem'}
								boxShadow={'lg'}
								w={'25rem'}
								// h={'4rem'}
								m={'.5rem'}
								p={'1rem'}
								// bg={'accent'}
								key={index}>
								{/* <Flex> */}
								{/* <SolidVerticalRectangle
		width={'.55rem'}
		height={'5rem'}
		bgColor={'secondary'}
	/> */}
								{/* <Flex
			ml={'1rem'}
			direction={'column'}
			gap={'.5rem'}> */}
								<Link color='teal.500' href='#'>
									<Text>{article.title}</Text>
								</Link>

								{/* <Flex
			gap={'.5rem'}
			alignItems={'center'}>
			<Text> {article.author}</Text>
			<SolidVerticalRectangle
				width={'.2rem'}
				height={'1.2rem'}
				bgColor={'secondary'}
			/>
			<Text> {article.date}</Text>
		</Flex> */}
								{/* </Flex> */}
								{/* </Flex> */}
							</Box>
						</Box>


					);
				})}


			<div style={{ height: '150px', overflowY: 'auto', }}>
				<hr />
				<AddingNotes></AddingNotes>

			</div>

		</div>
	);
};

export default TechnicianArticles;
