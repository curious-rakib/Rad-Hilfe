import { Box, Flex, Text } from '@chakra-ui/react';
import { TbRectangleVerticalFilled } from 'react-icons/tb';
import { IconContext } from 'react-icons';
import SolidVerticalRectangle from '../Solid Vertical Rectangle';

const TechnicianArticles = ({ articles }: { articles: any[] }) => {
	return (
		<>
			{articles &&
				articles.map((article, index) => {
					return (
						<Box
							borderRadius={'1rem'}
							boxShadow={'2xl'}
							w={'25rem'}
							h={'7rem'}
							m={'.5rem'}
							p={'1rem'}
							bg={'accent'}
							key={index}>
							<Flex>
								<SolidVerticalRectangle
									width={'.55rem'}
									height={'5rem'}
									bgColor={'secondary'}
								/>
								<Flex
									ml={'1rem'}
									direction={'column'}
									gap={'.5rem'}>
									<Text>{article.title}</Text>
									<Flex
										gap={'.5rem'}
										alignItems={'center'}>
										<Text> {article.author}</Text>
										<SolidVerticalRectangle
											width={'.2rem'}
											height={'1.2rem'}
											bgColor={'secondary'}
										/>
										<Text> {article.date}</Text>
									</Flex>
								</Flex>
							</Flex>
						</Box>
					);
				})}
		</>
	);
};

export default TechnicianArticles;
