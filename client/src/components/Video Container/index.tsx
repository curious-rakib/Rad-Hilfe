import { AspectRatio } from '@chakra-ui/react';

const VideoContainer = () => {
	return (
		<>
			<AspectRatio
				maxW="25rem"
				ratio={16 / 9}>
				<iframe
					title="naruto"
					src="https://www.youtube.com/embed/QhBnZ6NPOY0"
					allowFullScreen
				/>
			</AspectRatio>
		</>
	);
};

export default VideoContainer;