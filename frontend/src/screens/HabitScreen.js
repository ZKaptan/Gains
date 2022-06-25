import { Box, Heading, HStack, Text, VStack } from '@chakra-ui/react';
import { CalendarIcon } from '@chakra-ui/icons';
import React from 'react';
import Calendar from 'react-calendar';
import '../index.css';

const HabitScreen = () => {
	const onClick = (e) => {
		const today = new Date();
		const date = Date.parse(e);
		if (
			today.getDate() === date.getDate() &&
			today.getMonth() === date.getMonth() &&
			today.getFullYear === date.getFullYear()
		) {
		}
	};

	return (
		<Box m="8">
			<Heading>Mediation</Heading>
			<Calendar onClickDay={onClick} />
			<HStack mt="8" spacing="5" alignItems="center">
				<CalendarIcon />
				<VStack spacing="1" alignItems="start">
					<Text>Start Date</Text>
					<Text fontSize="sm">Feb 5</Text>
				</VStack>
			</HStack>
		</Box>
	);
};

export default HabitScreen;
