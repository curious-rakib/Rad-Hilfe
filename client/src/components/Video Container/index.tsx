import { AspectRatio, Flex, Text, Icon } from '@chakra-ui/react';
import { BsBookmark, BsFillBookmarkFill } from 'react-icons/bs';
const VideoContainer = ({ bookMark }: { bookMark: boolean }) => {
	return (
		<>
			<AspectRatio
				ratio={16 / 9}
				flex={0.9}>
				<iframe
					title="brakes"
					src="https://youtu.be/OQsiceeCZ0M"
					allowFullScreen
				/>
			</AspectRatio>
		</>
	);
};

export default VideoContainer;
