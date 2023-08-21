import { Box, Link, Text } from '@chakra-ui/react';

const TechnicianArticles = ({ articles }: { articles: any[] }) => {
	return (
		<>
			{articles &&
				articles.map((article, index) => {
					return (
						<Box
							borderRadius={'1rem'}
							boxShadow={'lg'}
							w={'90%'}
							m={'.5rem'}
							p={'1rem'}
							key={index}>
							<Link
								color="teal.500"
								href="#">
								<Text>{article.title}</Text>
							</Link>
						</Box>
					);
				})}
		</>
	);
};

export default TechnicianArticles;
