import { Text, Box, HStack, VStack } from '@chakra-ui/react';
import TechnicianWorkingDays from '../../../components/Technician Working Days';
import InputTechnician from './../../../components/InputTechnician';

const TechnicianProfile = () => {
	return (
		<>
			<HStack spacing={'3rem'}>
				<VStack
					color={'secondary'}
					width={'100%'}
					bg={'red'}>
					<InputTechnician
						id={'fullName'}
						isRequired={true}
						type={'text'}
						placeholder={'Enter Full Name'}></InputTechnician>
					<Text>Rakib</Text>
				</VStack>

				<VStack
					color="secondary"
					width={'100%'}>
					<Text
						as="b"
						fontSize={'1.25rem'}
						fontWeight={'500'}
						fontFamily={'Inter'}>
						Which days can you work on ?
					</Text>
					<TechnicianWorkingDays colorScheme={'accent'} />
				</VStack>
			</HStack>
		</>
	);
};

export default TechnicianProfile;
