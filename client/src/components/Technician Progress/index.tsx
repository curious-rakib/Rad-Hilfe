import { HStack, Box, Circle } from '@chakra-ui/react';

function TechnicianProgress({ pagenumber }: { pagenumber: number }) {
	return (
		<Box>
			<HStack gap="0vw">
				<Box
					bg={'secondary'}
					p={'1px 1px 1px 1px'}
					border={'2px solid'}
					borderColor="third"
					clipPath={'polygon(0 0, 80% 0%, 100% 100%, 20% 100%)'}>
					<Box
						bg={pagenumber === 1 ? 'secondary' : 'third'}
						p={'1vh 4vw 1vh 4vw'}
						border={'2px solid'}
						borderColor="third"
						clipPath={'polygon(0 0, 80% 0%, 100% 100%, 20% 100%)'}>
						<Circle
							size={'30px'}
							color="third"
							outline="2px solid"
							outlineColor="third">
							1
						</Circle>
					</Box>
				</Box>
				<Box
					bg={'secondary'}
					p={'1px 1px 1px 1px'}
					borderColor="color"
					clipPath={'polygon(0 0, 80% 0%, 100% 100%, 20% 100%)'}>
					<Box
						bg={pagenumber === 2 ? 'accent' : 'secondary'}
						p={'1vh 4vw 1vh 4vw'}
						clipPath={'polygon(0 0, 80% 0%, 100% 100%, 20% 100%)'}>
						<Circle
							size={'30px'}
							color="secondary"
							outline="2px solid"
							outlineColor="secondary">
							2
						</Circle>
					</Box>
				</Box>
				<Box
					bg={'secondary'}
					p={'1px 1px 1px 1px'}
					borderColor="color"
					clipPath={'polygon(0 0, 80% 0%, 100% 100%, 20% 100%)'}>
					<Box
						bg={pagenumber === 3 ? 'accent' : 'secondary'}
						p={'1vh 4vw 1vh 4vw'}
						borderColor={'accent'}
						clipPath={'polygon(0 0, 80% 0%, 100% 100%, 20% 100%)'}>
						<Circle
							size={'30px'}
							color="secondary"
							outline="2px solid"
							outlineColor="secondary">
							3
						</Circle>
					</Box>
				</Box>
			</HStack>
		</Box>
	);
}

export default TechnicianProgress;
