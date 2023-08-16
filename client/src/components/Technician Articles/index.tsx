import { Box } from '@chakra-ui/react';
import { TbRectangleVerticalFilled } from 'react-icons/tb';

const TechnicianArticles = ({ articles }: { articles: any[] }) => {
	return (
		<>
			{articles &&
				articles.map((article, index) => {
					return (
						<Box key={index}>
							<TbRectangleVerticalFilled />
						</Box>
					);
				})}
		</>
	);
};

export default TechnicianArticles;
