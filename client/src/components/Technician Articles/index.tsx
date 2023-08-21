import { Box, Link, Text } from '@chakra-ui/react';
import AddingNotes from '../Adding Notes';

const TechnicianArticles = ({ articles }: { articles: any[] }) => {
	return (
		<div>
			{articles &&
				articles.map((article, index) => {
					return (
						<Box h={'4rem'}>
							<Box
								borderRadius={'1rem'}
								boxShadow={'lg'}
								w={'25rem'}
								m={'.5rem'}
								p={'1rem'}
								key={index}>
								<Link
									color="teal.500"
									href="#">
									<Text>{article.title}</Text>
								</Link>
							</Box>
						</Box>
					);
				})}

			<div style={{ height: '150px', overflowY: 'auto' }}>
				<hr />
				<AddingNotes></AddingNotes>
			</div>
		</div>
	);
};

export default TechnicianArticles;
