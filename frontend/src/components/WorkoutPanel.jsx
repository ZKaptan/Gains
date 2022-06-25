import React from 'react';
import { HStack, Box, Text, Button } from '@chakra-ui/react';
import { BsPersonFill } from 'react-icons/bs';
import { MdThumbUp } from 'react-icons/md';

const WorkoutPanel = ({ workout }) => {
	return (
		// TODO: Make border responsive

		<HStack
			gap="1"
			border="2px"
			borderLeft="0"
			w={{ base: '100%', sm: '80%', md: '60%' }}
			borderColor="gray.100"
			p="2"
			justifyContent="space-between"
		>
			<HStack>
				<Box p="2" bg="gray">
					<BsPersonFill size="40" />
				</Box>
				<Box>
					<Text fontSize="s" color="gray">
						{workout.user}
					</Text>
					<Text>{workout.name}</Text>
					<Text fontSize="s" color="gray">
						{workout.date}
					</Text>
				</Box>
			</HStack>
			<Button variant="ghost">
				<MdThumbUp size="26" />
			</Button>
		</HStack>
	);
};

export default WorkoutPanel;
