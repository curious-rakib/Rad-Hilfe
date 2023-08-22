import { Box } from '@chakra-ui/react';

const TechnicianArticles = ({ articles }: { articles: any[] }) => {
	return (
		<>
			{articles &&
				articles.map((article, index) => {
					return (
						<Box
							borderRadius={'1rem'}
							boxShadow={'lg'}
							w={'fit-content'}
							m={'.5rem'}
							p={'1rem'}
							key={index}>
							<a
								href={article.link}
								target="_blank"
								color="secondary">
								{article.title}
							</a>
						</Box>
					);
				})}
		</>
	);
};

export default TechnicianArticles;
